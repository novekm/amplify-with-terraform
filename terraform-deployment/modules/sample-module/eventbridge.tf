# https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_rule

resource "random_uuid" "event_bus_uuid" {
}
resource "aws_cloudwatch_event_bus" "event_bus" {
  name = "${var.app_name}-event_bus-${random_uuid.event_bus_uuid.result}"
  tags = merge(
    {
      "AppName" = var.app_name
    },
    var.tags,
  )
}
resource "aws_cloudwatch_event_rule" "default_event_bus_to_event_bus" {
  name        = "${var.app_name}-default_event_bus_to_${var.app_name}-event_bus"
  description = "Send all S3 bucket events for tca buckets from default event bus to event_bus"
  // default event bus is used if event_bus_name is not specificed
  # role_arn = var.create_full_access_roles ? aws_iam_role.eventbridge_invoke_step_functions_state_machine_full_access[0].arn : aws_iam_role.eventbridge_invoke_sfn_state_machine_restricted_access[0].arn
  role_arn = aws_iam_role.eventbridge_invoke_custom_event_bus_restricted_access[0].arn
  event_pattern = jsonencode({
    source = ["aws.s3"],
    detail-type = [
      "Object Access Tier Changed",
      "Object ACL Updated",
      "Object Created",
      "Object Deleted",
      "Object Restore Completed",
      "Object Restore Expired",
      "Object Restore Initiated",
      "Object Storage Class Changed",
      "Object Tags Added",
    "Object Tags Deleted"],
    detail = {
      bucket = {
        name = [
          "${aws_s3_bucket.landing_bucket.id}",
        ]
      }
    }
  })

  tags = merge(
    {
      "AppName" = var.app_name
    },
    var.tags,
  )
}
resource "aws_cloudwatch_event_rule" "sns_default_event_bus_to_event_bus" {
  name        = "${var.app_name}-sns_default_event_bus_to_event_bus"
  description = "Send all SNS events for tca sfn failures from default event bus to event_bus"
  // default event bus is used if event_bus_name is not specificed
  # role_arn = var.create_full_access_roles ? aws_iam_role.eventbridge_invoke_step_functions_state_machine_full_access[0].arn : aws_iam_role.eventbridge_invoke_sfn_state_machine_restricted_access[0].arn
  role_arn = aws_iam_role.eventbridge_invoke_custom_event_bus_restricted_access[0].arn
  event_pattern = jsonencode({
    source = ["aws.s3"],
    detail-type = [
      "Object Access Tier Changed",
      "Object ACL Updated",
      "Object Created",
      "Object Deleted",
      "Object Restore Completed",
      "Object Restore Expired",
      "Object Restore Initiated",
      "Object Storage Class Changed",
      "Object Tags Added",
    "Object Tags Deleted"],
    detail = {
      bucket = {
        name = [
          "${aws_s3_bucket.landing_bucket.id}",
        ]
      }
    }
  })

  tags = merge(
    {
      "AppName" = var.app_name
    },
    var.tags,
  )
}
resource "aws_cloudwatch_event_rule" "landing_bucket_object_created" {
  name           = "${var.app_name}-landing_bucket_object_created"
  description    = "Capture each object creation in S3 landing_bucket"
  event_bus_name = aws_cloudwatch_event_bus.event_bus.name
  # role_arn       = var.create_full_access_roles ? aws_iam_role.eventbridge_invoke_step_functions_state_machine_full_access[0].arn : aws_iam_role.eventbridge_invoke_sfn_state_machine_restricted_access[0].arn
  role_arn = aws_iam_role.eventbridge_invoke_sfn_state_machine_restricted_access[0].arn
  event_pattern = jsonencode({
    source      = ["aws.s3"],
    detail-type = ["Object Created"],
    detail = {
      bucket = {
        name = ["${aws_s3_bucket.landing_bucket.id}"]
      }
    }
  })

  tags = merge(
    {
      "AppName" = var.app_name
    },
    var.tags,
  )
}

resource "aws_cloudwatch_event_target" "default_event_bus" {
  rule      = aws_cloudwatch_event_rule.default_event_bus_to_event_bus.name
  target_id = "default_event_bus_to_event_bus"
  arn       = aws_cloudwatch_event_bus.event_bus.arn
  role_arn  = aws_iam_role.eventbridge_invoke_custom_event_bus_restricted_access[0].arn
}
resource "aws_cloudwatch_event_target" "step_function" {
  rule           = aws_cloudwatch_event_rule.landing_bucket_object_created.name
  event_bus_name = aws_cloudwatch_event_bus.event_bus.name
  target_id      = "landing_bucket_object_created"
  arn            = aws_sfn_state_machine.sfn_state_machine.arn
  role_arn       = aws_iam_role.eventbridge_invoke_sfn_state_machine_restricted_access[0].arn
}
