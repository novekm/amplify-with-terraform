resource "local_file" "tf_outputs" {
  filename = "${path.root}/../sample-amplify-app/.env"
  content  = <<-EOF
    VITE_REGION=${data.aws_region.current.name}
    VITE_API_ID=${aws_appsync_graphql_api.appsync_graphql_api.id}
    VITE_GRAPHQL_URL=${aws_appsync_graphql_api.appsync_graphql_api.uris.GRAPHQL}
    VITE_IDENTITY_POOL_ID=${aws_cognito_identity_pool.identity_pool.id}
    VITE_USER_POOL_ID=${aws_cognito_user_pool.user_pool.id}
    VITE_APP_CLIENT_ID=${aws_cognito_user_pool_client.user_pool_client.id}
    VITE_LANDING_BUCKET=${aws_s3_bucket.landing_bucket.id}
    EOF
}
