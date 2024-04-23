# Data source
data "aws_ssm_parameter" "ssm_github_access_token" {
  count = var.lookup_ssm_github_access_token ? 1 : 0
  name  = var.ssm_github_access_token_name
}


resource "aws_ssm_parameter" "landing_bucket_name" {
  name  = "${var.app_name}-landing_bucket_name" // This is the 'unique key'
  type  = "String"
  value = aws_s3_bucket.landing_bucket.id // App storage S3 bucket

  tags = merge(
    {
      "AppName" = var.app_name
    },
    var.tags,
  )
}

resource "aws_ssm_parameter" "dynamodb_output_table_name" {
  name  = "${var.app_name}-dynamodb_output_table_name" // This is the 'unique key'
  type  = "String"
  value = aws_dynamodb_table.output.id // Name of the DynamoDB table

  tags = merge(
    {
      "AppName" = var.app_name
    },
    var.tags,
  )
}
