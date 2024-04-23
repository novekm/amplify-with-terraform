# AWS Current Region
output "aws_current_region" {
  value = data.aws_region.current

}

# S3
output "landing_bucket_id" {
  value       = aws_s3_bucket.landing_bucket
  description = "The name of the S3 landing bucket"
}
output "landing_bucket_arn" {
  value       = aws_s3_bucket.landing_bucket
  description = "The Arn of the S3 landing bucket"
}

# Amplify

# Step Function
output "step_function_arn" {
  value = aws_sfn_state_machine.sfn_state_machine.arn

}

# IAM

# DynamoDB
output "dynamodb_output_table_name" {
  value = aws_dynamodb_table.output.name
}



# Cognito
output "user_pool_region" {
  value = data.aws_region.current
}
output "user_pool_id" {
  value = aws_cognito_user_pool.user_pool
}
output "user_pool_client_id" {
  value = aws_cognito_user_pool_client.user_pool_client
}
output "identity_pool_id" {
  value = aws_cognito_identity_pool.identity_pool
}


# AppSync (GraphQL)
output "appsync_graphql_api_region" {
  value = data.aws_region.current
}
output "appsync_graphql_api_id" {
  value = aws_appsync_graphql_api.appsync_graphql_api
}
output "appsync_graphql_api_uris" {
  value = aws_appsync_graphql_api.appsync_graphql_api
}
