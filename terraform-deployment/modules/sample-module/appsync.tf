# API Data Source
resource "aws_appsync_datasource" "appsync_dynamodb_datasource" {
  api_id           = aws_appsync_graphql_api.appsync_graphql_api.id
  name             = lower("${var.app_name}_output_dynamodb_datasource")
  service_role_arn = aws_iam_role.appsync_dynamodb_restricted_access[0].arn
  type             = "AMAZON_DYNAMODB"

  dynamodb_config {
    table_name = aws_dynamodb_table.output.name
  }
}
# API
resource "aws_appsync_graphql_api" "appsync_graphql_api" {
  authentication_type = "AMAZON_COGNITO_USER_POOLS"
  name                = "${var.app_name}-${var.appsync_graphql_api_name}"

  user_pool_config {
    aws_region     = data.aws_region.current.name
    default_action = "ALLOW"
    user_pool_id   = aws_cognito_user_pool.user_pool.id
  }


  schema = <<EOF
type Object  @aws_auth(cognito_groups: ["Admin", "Standard"])  {
  ObjectId: String!
  Version: String
  DetailType: String
  Source: String
  FileName: String
  FilePath: String
  AccountId: String
  CreatedAt: String
  Region: String
  CurrentBucket: String
  OriginalBucket: String
  ObjectSize: Int
  SourceIPAddress: String
  LifecycleConfig: String
}

type Objects {
  objects: [Object!]!
  nextToken: String
  @aws_auth(cognito_groups: ["Admin", "Standard"])
}


type Query {
  listObjects(limit: Int, nextToken: String): Objects @aws_auth(cognito_groups: ["Admin", "Standard"])
  getObject(ObjectId: String!): Object @aws_auth(cognito_groups: ["Admin", "Standard"])
  }

# type Mutation {
#   deleteOneObject(ObjectId: String!): Object
#   @aws_auth(cognito_groups: ["Admin",])
# }

schema {
  query: Query
  # mutation: Mutation
}
EOF
}


# Resolvers
# UNIT type resolver (default)
# Query - Get a single S3 Object (APPSYNC_JS)
resource "aws_appsync_resolver" "appsync_resolver_query_get_object" {
  api_id      = aws_appsync_graphql_api.appsync_graphql_api.id
  data_source = aws_appsync_datasource.appsync_dynamodb_datasource.name
  type        = "Query"
  field       = "getObject"
  kind        = "UNIT"
  code        = file("${path.module}/appsync_js_resolvers/getObject.js")

  runtime {
    name            = "APPSYNC_JS"
    runtime_version = "1.0.0"
  }

}

# Query - List all S3 Objects (APPSYNC_JS)
resource "aws_appsync_resolver" "appsync_resolver_query_list_objects" {
  api_id      = aws_appsync_graphql_api.appsync_graphql_api.id
  data_source = aws_appsync_datasource.appsync_dynamodb_datasource.name
  type        = "Query"
  field       = "listObjects"

  kind = "UNIT"
  code = file("${path.module}/appsync_js_resolvers/listObjects.js")

  runtime {
    name            = "APPSYNC_JS"
    runtime_version = "1.0.0"
  }
}







