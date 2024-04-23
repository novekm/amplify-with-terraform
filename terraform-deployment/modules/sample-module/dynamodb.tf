// TODO - Create TF code for DynamoDB
resource "random_string" "output_table" {
  length  = 4
  special = false
  upper   = false
}
resource "aws_dynamodb_table" "output" {
  name           = "${var.app_name}-output-${random_string.output_table.result}" // No touchy
  billing_mode   = var.output_billing_mode
  read_capacity  = var.output_read_capacity
  write_capacity = var.output_write_capacity
  hash_key       = "ObjectId" // Partition Key
  # range_key      = "-" // Sort Key

  attribute {
    name = "ObjectId"
    type = "S"
  }


  # ttl {
  #   attribute_name = "TimeToExist"
  #   enabled        = false
  # }

  # Workaround for "ValidationException: TimeToLive is already disabled"
  # when running terraform apply twice
  dynamic "ttl" {
    for_each = local.ttl
    content {
      enabled        = local.ttl[0].ttl_enable
      attribute_name = local.ttl[0].ttl_attribute
    }
  }

  # global_secondary_index {
  #   name               = "GameTitleIndex"
  #   hash_key           = "GameTitle"
  #   range_key          = "TopScore"
  #   write_capacity     = 10
  #   read_capacity      = 10
  #   projection_type    = "INCLUDE"
  #   non_key_attributes = ["UserId"]
  # }

  tags = merge(
    {
      "AppName" = var.app_name
    },
    var.tags,
  )
}
