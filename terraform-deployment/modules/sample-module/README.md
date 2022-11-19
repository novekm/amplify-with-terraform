### Created by [Kevon Mayers](https://www.linkedin.com/in/kevonmayers)
## Requirements

No requirements.

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | n/a |
| <a name="provider_local"></a> [local](#provider\_local) | n/a |
| <a name="provider_random"></a> [random](#provider\_random) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_amplify_app.sample_app](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/amplify_app) | resource |
| [aws_amplify_branch.sample_amplify_branch_dev](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/amplify_branch) | resource |
| [aws_amplify_branch.sample_amplify_branch_main](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/amplify_branch) | resource |
| [aws_amplify_domain_association.example](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/amplify_domain_association) | resource |
| [aws_appsync_datasource.sample_appsync_dynamodb_datasource](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appsync_datasource) | resource |
| [aws_appsync_graphql_api.sample_appsync_graphql_api](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appsync_graphql_api) | resource |
| [aws_appsync_resolver.sample_appsync_resolver_mutation_delete_one_job](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appsync_resolver) | resource |
| [aws_appsync_resolver.sample_appsync_resolver_query_get_all_jobs](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appsync_resolver) | resource |
| [aws_appsync_resolver.sample_appsync_resolver_query_get_all_jobs_paginated](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appsync_resolver) | resource |
| [aws_appsync_resolver.sample_appsync_resolver_query_get_one_job](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/appsync_resolver) | resource |
| [aws_cloudwatch_event_bus.sample_event_bus](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_bus) | resource |
| [aws_cloudwatch_event_rule.default_event_bus_to_sample_event_bus](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_rule) | resource |
| [aws_cloudwatch_event_rule.sample_landing_bucket_object_created](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_rule) | resource |
| [aws_cloudwatch_event_target.default_event_bus](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_target) | resource |
| [aws_cloudwatch_event_target.sample_step_function](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cloudwatch_event_target) | resource |
| [aws_codecommit_repository.sample_codecommit_repo](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/codecommit_repository) | resource |
| [aws_cognito_identity_pool.sample_identity_pool](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_identity_pool) | resource |
| [aws_cognito_identity_pool_roles_attachment.sample_identity_pool_auth_roles_attachment](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_identity_pool_roles_attachment) | resource |
| [aws_cognito_user.sample_admin_cognito_users](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user) | resource |
| [aws_cognito_user.sample_standard_cognito_users](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user) | resource |
| [aws_cognito_user_group.sample_admin_cognito_user_group](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_group) | resource |
| [aws_cognito_user_group.sample_standard_cognito_user_group](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_group) | resource |
| [aws_cognito_user_in_group.sample_admin_cognito_user_group_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_in_group) | resource |
| [aws_cognito_user_in_group.sample_standard_cognito_user_group_association](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_in_group) | resource |
| [aws_cognito_user_pool.sample_user_pool](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_pool) | resource |
| [aws_cognito_user_pool_client.sample_user_pool_client](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/cognito_user_pool_client) | resource |
| [aws_dynamodb_table.sample_output](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/dynamodb_table) | resource |
| [aws_iam_policy.sample_dynamodb_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) | resource |
| [aws_iam_policy.sample_dynamodb_restricted_access_read_only_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) | resource |
| [aws_iam_policy.sample_eventbridge_invoke_custom_sample_event_bus_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) | resource |
| [aws_iam_policy.sample_eventbridge_invoke_sfn_state_machine_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) | resource |
| [aws_iam_policy.sample_s3_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) | resource |
| [aws_iam_policy.sample_ssm_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) | resource |
| [aws_iam_role.sample_amplify_codecommit](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role.sample_appsync_dynamodb_restricted_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role.sample_cognito_admin_group_restricted_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role.sample_cognito_authrole_restricted_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role.sample_cognito_standard_group_restricted_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role.sample_cognito_unauthrole_restricted_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role.sample_eventbridge_invoke_custom_sample_event_bus_restricted_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role.sample_eventbridge_invoke_sfn_state_machine_restricted_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role.sample_step_functions_master_restricted_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_user.sample_gitlab_mirroring](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_user) | resource |
| [aws_iam_user_policy.sample_gitlab_mirroring_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_user_policy) | resource |
| [aws_s3_bucket.sample_app_storage_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.sample_input_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.sample_landing_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.sample_output_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.sample_quicksight_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.sample_s3_logging_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket.sample_tf_remote_state_bucket](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket) | resource |
| [aws_s3_bucket_cors_configuration.sample_app_storage_bucket_cors](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_cors_configuration) | resource |
| [aws_s3_bucket_cors_configuration.sample_input_bucket_cors](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_cors_configuration) | resource |
| [aws_s3_bucket_cors_configuration.sample_landing_bucket_cors](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_cors_configuration) | resource |
| [aws_s3_bucket_cors_configuration.sample_output_bucket_cors](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_cors_configuration) | resource |
| [aws_s3_bucket_cors_configuration.sample_quicksight_bucket_cors](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_cors_configuration) | resource |
| [aws_s3_bucket_lifecycle_configuration.sample_input_bucket_lifecycle_config](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_lifecycle_configuration) | resource |
| [aws_s3_bucket_lifecycle_configuration.sample_landing_bucket_lifecycle_config](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_lifecycle_configuration) | resource |
| [aws_s3_bucket_lifecycle_configuration.sample_output_bucket_lifecycle_config](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_lifecycle_configuration) | resource |
| [aws_s3_bucket_notification.sample_app_storage_bucket_events](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_notification) | resource |
| [aws_s3_bucket_notification.sample_input_bucket_events](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_notification) | resource |
| [aws_s3_bucket_notification.sample_landing_bucket_events](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_notification) | resource |
| [aws_s3_bucket_notification.sample_output_bucket_events](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_notification) | resource |
| [aws_s3_bucket_notification.sample_quicksight_bucket_events](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_notification) | resource |
| [aws_s3_bucket_notification.sample_s3_logging_bucket_events](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_notification) | resource |
| [aws_s3_bucket_policy.sample_app_storage_bucket_restrict_file_types](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_policy.sample_input_bucket_restrict_file_types](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_policy.sample_landing_bucket_restrict_file_types](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_policy.sample_output_bucket_restrict_file_types](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_policy) | resource |
| [aws_s3_bucket_public_access_block.sample_app_storage_bucket_block_public_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_public_access_block.sample_input_bucket_block_public_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_public_access_block.sample_landing_bucket_block_public_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_public_access_block.sample_output_bucket_block_public_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_public_access_block.sample_quicksight_bucket_block_public_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_public_access_block.sample_s3_logging_bucket_block_public_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_public_access_block.sample_tf_remote_state_bucket_block_public_access](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_public_access_block) | resource |
| [aws_s3_bucket_versioning.sample_tf_remote_state_bucket_versioning](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/s3_bucket_versioning) | resource |
| [aws_sfn_state_machine.sample_sfn_state_machine](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/sfn_state_machine) | resource |
| [aws_ssm_parameter.sample_app_storage_bucket_name](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.sample_dynamodb_output_table_name](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.sample_input_bucket_name](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ssm_parameter) | resource |
| [aws_ssm_parameter.sample_output_bucket_name](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/ssm_parameter) | resource |
| [local_file.outputs](https://registry.terraform.io/providers/hashicorp/local/latest/docs/resources/file) | resource |
| [random_uuid.sample_app_storage_bucket_uuid](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/uuid) | resource |
| [random_uuid.sample_file_uuid](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/uuid) | resource |
| [random_uuid.sample_input_bucket_uuid](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/uuid) | resource |
| [random_uuid.sample_landing_bucket_uuid](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/uuid) | resource |
| [random_uuid.sample_output_bucket_uuid](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/uuid) | resource |
| [random_uuid.sample_output_uuid](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/uuid) | resource |
| [random_uuid.sample_quicksight_bucket_uuid](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/uuid) | resource |
| [random_uuid.sample_s3_logging_bucket_uuid](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/uuid) | resource |
| [random_uuid.sample_tf_remote_state_bucket_uuid](https://registry.terraform.io/providers/hashicorp/random/latest/docs/resources/uuid) | resource |
| [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) | data source |
| [aws_iam_policy_document.sample_amplify_trust_relationship](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_app_storage_bucket_restrict_file_types](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_appsync_trust_relationship](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_cognito_admin_group_trust_relationship](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_cognito_authrole_trust_relationship](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_cognito_standard_group_trust_relationship](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_cognito_unauthrole_trust_relationship](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_dynamodb_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_dynamodb_restricted_access_read_only_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_eventbridge_invoke_custom_sample_event_bus_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_eventbridge_invoke_sfn_state_machine_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_eventbridge_trust_relationship](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_input_bucket_restrict_file_types](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_landing_bucket_restrict_file_types](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_output_bucket_restrict_file_types](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_s3_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_ssm_restricted_access_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.sample_step_function_trust_relationship](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_region.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/region) | data source |
| [aws_ssm_parameter.ssm_github_access_token](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/ssm_parameter) | data source |

## Inputs

| Name | Description | Type | Default | Required |
|------|-------------|------|---------|:--------:|
| <a name="input_app_name"></a> [app\_name](#input\_app\_name) | The name of the Amplify Application | `string` | `"sample-App"` | no |
| <a name="input_create_amplify_app"></a> [create\_amplify\_app](#input\_create\_amplify\_app) | Conditional creation of AWS Amplify Web Application | `bool` | `true` | no |
| <a name="input_create_restricted_access_roles"></a> [create\_restricted\_access\_roles](#input\_create\_restricted\_access\_roles) | Conditional creation of TCA restricted access roles | `bool` | `true` | no |
| <a name="input_create_sample_amplify_branch_dev"></a> [create\_tca\_amplify\_branch\_dev](#input\_create\_tca\_amplify\_branch\_dev) | n/a | `bool` | `true` | no |
| <a name="input_create_sample_amplify_branch_main"></a> [create\_tca\_amplify\_branch\_main](#input\_create\_tca\_amplify\_branch\_main) | n/a | `bool` | `true` | no |
| <a name="input_create_sample_amplify_domain_association"></a> [create\_tca\_amplify\_domain\_association](#input\_create\_tca\_amplify\_domain\_association) | n/a | `bool` | `false` | no |
| <a name="input_create_sample_quicksight_bucket"></a> [create\_tca\_quicksight\_bucket](#input\_create\_tca\_quicksight\_bucket) | Conditional creation of QuickSight bucket | `bool` | `false` | no |
| <a name="input_create_sample_s3_logging_bucket"></a> [create\_tca\_s3\_logging\_bucket](#input\_create\_tca\_s3\_logging\_bucket) | Conditional creation of S3 Logging bucket | `bool` | `true` | no |
| <a name="input_create_sample_sfn_state_get_sample_input_file"></a> [create\_tca\_sfn\_state\_get\_tca\_input\_file](#input\_create\_tca\_sfn\_state\_get\_tca\_input\_file) | Enables creation of GetTCAInputFile sfn state | `bool` | `true` | no |
| <a name="input_create_sample_tf_remote_state_bucket"></a> [create\_tca\_tf\_remote\_state\_bucket](#input\_create\_tca\_tf\_remote\_state\_bucket) | Conditional creation of S3 bucket to be used for Terraform Remote State | `bool` | `true` | no |
| <a name="input_dynamodb_ttl_attribute"></a> [dynamodb\_ttl\_attribute](#input\_dynamodb\_ttl\_attribute) | n/a | `string` | `"TimeToExist"` | no |
| <a name="input_dynamodb_ttl_enable"></a> [dynamodb\_ttl\_enable](#input\_dynamodb\_ttl\_enable) | - DynamoDB - | `bool` | `false` | no |
| <a name="input_github_access_token"></a> [github\_access\_token](#input\_github\_access\_token) | Optional GitHub access token. Only required if using GitHub repo. | `string` | `null` | no |
| <a name="input_lookup_ssm_github_access_token"></a> [lookup\_ssm\_github\_access\_token](#input\_lookup\_ssm\_github\_access\_token) | *IMPORTANT!*<br>Conditional data fetch of SSM parameter store for GitHub access token.<br>To ensure security of this token, you must manually add it via the AWS console<br>before using. | `bool` | `false` | no |
| <a name="input_s3_enable_force_destroy"></a> [s3\_enable\_force\_destroy](#input\_s3\_enable\_force\_destroy) | n/a | `string` | `"true"` | no |
| <a name="input_ssm_github_access_token_name"></a> [ssm\_github\_access\_token\_name](#input\_ssm\_github\_access\_token\_name) | The name (key) of the SSM parameter store of your GitHub access token | `string` | `null` | no |
| <a name="input_tags"></a> [tags](#input\_tags) | Tags to apply to resources | `map(any)` | <pre>{<br>  "IAC_PROVIDER": "Terraform"<br>}</pre> | no |
| <a name="input_sample_admin_cognito_user_group_description"></a> [tca\_admin\_cognito\_user\_group\_description](#input\_tca\_admin\_cognito\_user\_group\_description) | n/a | `string` | `"Admin Group"` | no |
| <a name="input_sample_admin_cognito_user_group_name"></a> [tca\_admin\_cognito\_user\_group\_name](#input\_tca\_admin\_cognito\_user\_group\_name) | n/a | `string` | `"Admin"` | no |
| <a name="input_sample_admin_cognito_users"></a> [tca\_admin\_cognito\_users](#input\_tca\_admin\_cognito\_users) | Admin Users | `map(any)` | `{}` | no |
| <a name="input_sample_amplify_app_domain_name"></a> [tca\_amplify\_app\_domain\_name](#input\_tca\_amplify\_app\_domain\_name) | The name of your domain. Ex. naruto.ninja | `string` | `"example.com"` | no |
| <a name="input_sample_amplify_app_framework"></a> [tca\_amplify\_app\_framework](#input\_tca\_amplify\_app\_framework) | n/a | `string` | `"React"` | no |
| <a name="input_sample_amplify_branch_dev_name"></a> [tca\_amplify\_branch\_dev\_name](#input\_tca\_amplify\_branch\_dev\_name) | n/a | `string` | `"dev"` | no |
| <a name="input_sample_amplify_branch_dev_stage"></a> [tca\_amplify\_branch\_dev\_stage](#input\_tca\_amplify\_branch\_dev\_stage) | n/a | `string` | `"DEVELOPMENT"` | no |
| <a name="input_sample_amplify_branch_main_name"></a> [tca\_amplify\_branch\_main\_name](#input\_tca\_amplify\_branch\_main\_name) | n/a | `string` | `"main"` | no |
| <a name="input_sample_amplify_branch_main_stage"></a> [tca\_amplify\_branch\_main\_stage](#input\_tca\_amplify\_branch\_main\_stage) | n/a | `string` | `"PRODUCTION"` | no |
| <a name="input_sample_app_storage_bucket_name"></a> [tca\_app\_storage\_bucket\_name](#input\_tca\_app\_storage\_bucket\_name) | Bucket used for Amplify app storage. Max 27 characters | `string` | `"sample-app-storage-bucket"` | no |
| <a name="input_sample_appsync_graphql_api_name"></a> [tca\_appsync\_graphql\_api\_name](#input\_tca\_appsync\_graphql\_api\_name) | AppSync - GraphQL | `string` | `"sample-graphql-api"` | no |
| <a name="input_sample_codecommit_repo_default_branch"></a> [tca\_codecommit\_repo\_default\_branch](#input\_tca\_codecommit\_repo\_default\_branch) | n/a | `string` | `"main"` | no |
| <a name="input_sample_codecommit_repo_description"></a> [tca\_codecommit\_repo\_description](#input\_tca\_codecommit\_repo\_description) | n/a | `string` | `"The CodeCommit repo created by TCA"` | no |
| <a name="input_sample_codecommit_repo_name"></a> [tca\_codecommit\_repo\_name](#input\_tca\_codecommit\_repo\_name) | n/a | `string` | `"sample_codecommit_repo"` | no |
| <a name="input_sample_create_codecommit_repo"></a> [tca\_create\_codecommit\_repo](#input\_tca\_create\_codecommit\_repo) | CodeCommit | `bool` | `false` | no |
| <a name="input_sample_custom_language_model_name"></a> [tca\_custom\_language\_model\_name](#input\_tca\_custom\_language\_model\_name) | Specify how you want your vocabulary filter applied to your transcript.<br>    To replace words with '***' , choose 'mask' .<br>    To delete words, choose 'remove' .<br>    To flag words without changing them, choose 'tag' . | `string` | `null` | no |
| <a name="input_sample_custom_vocabulary_filter_name"></a> [tca\_custom\_vocabulary\_filter\_name](#input\_tca\_custom\_vocabulary\_filter\_name) | The name of the custom vocabulary filter you want to include in your Call Analytics<br>    transcription request. Vocabulary filter names are case sensitive. Note that if you<br>    include 'VocabularyFilterName' in your request, you must also include 'VocabularyFilterMethod'. | `string` | `null` | no |
| <a name="input_sample_custom_vocabulary_name"></a> [tca\_custom\_vocabulary\_name](#input\_tca\_custom\_vocabulary\_name) | The name of the custom vocabulary you want to include in your Call Analytics<br>    transcription request. Vocabulary names are case sensitive. | `string` | `null` | no |
| <a name="input_sample_email_verification_message"></a> [tca\_email\_verification\_message](#input\_tca\_email\_verification\_message) | The Cognito email verification message | `string` | `"\nThank you for registering with TCA. This is your email confirmation.\nVerification Code: {####}\n\n"` | no |
| <a name="input_sample_email_verification_subject"></a> [tca\_email\_verification\_subject](#input\_tca\_email\_verification\_subject) | The Cognito email verification subject | `string` | `"TCA Verification"` | no |
| <a name="input_sample_enable_content_redaction"></a> [tca\_enable\_content\_redaction](#input\_tca\_enable\_content\_redaction) | Enables the content redaction feature of Amazon Transcribe Call Analytics | `bool` | `false` | no |
| <a name="input_sample_enable_gitlab_mirroring"></a> [tca\_enable\_gitlab\_mirroring](#input\_tca\_enable\_gitlab\_mirroring) | Enables GitLab mirroring to the option AWS CodeCommit repo. | `bool` | `false` | no |
| <a name="input_sample_existing_repo_url"></a> [tca\_existing\_repo\_url](#input\_tca\_existing\_repo\_url) | URL for the existing repo | `string` | `null` | no |
| <a name="input_sample_first_speaker_participant_role"></a> [tca\_first\_speaker\_participant\_role](#input\_tca\_first\_speaker\_participant\_role) | n/a | `string` | `"AGENT"` | no |
| <a name="input_sample_gitlab_mirroring_iam_user_name"></a> [tca\_gitlab\_mirroring\_iam\_user\_name](#input\_tca\_gitlab\_mirroring\_iam\_user\_name) | The IAM Username for the GitLab Mirroring IAM User. | `string` | `"sample_gitlab_mirroring"` | no |
| <a name="input_sample_gitlab_mirroring_policy_name"></a> [tca\_gitlab\_mirroring\_policy\_name](#input\_tca\_gitlab\_mirroring\_policy\_name) | The name of the IAM policy attached to the GitLab Mirroring IAM User | `string` | `"sample_gitlab_mirroring_policy"` | no |
| <a name="input_sample_identity_pool_allow_classic_flow"></a> [tca\_identity\_pool\_allow\_classic\_flow](#input\_tca\_identity\_pool\_allow\_classic\_flow) | n/a | `bool` | `false` | no |
| <a name="input_sample_identity_pool_allow_unauthenticated_identites"></a> [tca\_identity\_pool\_allow\_unauthenticated\_identites](#input\_tca\_identity\_pool\_allow\_unauthenticated\_identites) | n/a | `bool` | `false` | no |
| <a name="input_sample_identity_pool_name"></a> [tca\_identity\_pool\_name](#input\_tca\_identity\_pool\_name) | The name of the Cognito Identity Pool created | `string` | `"sample_identity_pool"` | no |
| <a name="input_sample_input_bucket_create_nuke_everything_lifecycle_config"></a> [tca\_input\_bucket\_create\_nuke\_everything\_lifecycle\_config](#input\_tca\_input\_bucket\_create\_nuke\_everything\_lifecycle\_config) | Conditional create of the lifecycle config to remove all objects from the bucket | `bool` | `true` | no |
| <a name="input_sample_input_bucket_days_until_objects_expiration"></a> [tca\_input\_bucket\_days\_until\_objects\_expiration](#input\_tca\_input\_bucket\_days\_until\_objects\_expiration) | The number of days until objects in the bucket are deleted | `number` | `1` | no |
| <a name="input_sample_input_bucket_enable_cors"></a> [tca\_input\_bucket\_enable\_cors](#input\_tca\_input\_bucket\_enable\_cors) | Contiditional enabling of CORS | `bool` | `true` | no |
| <a name="input_sample_input_bucket_name"></a> [tca\_input\_bucket\_name](#input\_tca\_input\_bucket\_name) | Name of the S3 bucket for transcribe job source. Max 27 characters | `string` | `"sample-input-bucket"` | no |
| <a name="input_sample_invite_email_message"></a> [tca\_invite\_email\_message](#input\_tca\_invite\_email\_message) | n/a | `string` | `"You have been invited to the TCA App! Your username is \"{username}\" and\ntemporary password is \"{####}\". Please reach out to an admin if you have issues signing in.\n\n"` | no |
| <a name="input_sample_invite_email_subject"></a> [tca\_invite\_email\_subject](#input\_tca\_invite\_email\_subject) | n/a | `string` | `"You've been CHOSEN.\n"` | no |
| <a name="input_sample_invite_sms_message"></a> [tca\_invite\_sms\_message](#input\_tca\_invite\_sms\_message) | n/a | `string` | `"You have been invited to the TCA App! Your username is \"{username}\" and\ntemporary password is \"{####}\".\n\n"` | no |
| <a name="input_sample_landing_bucket_create_nuke_everything_lifecycle_config"></a> [tca\_landing\_bucket\_create\_nuke\_everything\_lifecycle\_config](#input\_tca\_landing\_bucket\_create\_nuke\_everything\_lifecycle\_config) | Conditional create of the lifecycle config to remove all objects from the bucket | `bool` | `true` | no |
| <a name="input_sample_landing_bucket_days_until_objects_expiration"></a> [tca\_landing\_bucket\_days\_until\_objects\_expiration](#input\_tca\_landing\_bucket\_days\_until\_objects\_expiration) | The number of days until objects in the bucket are deleted | `number` | `1` | no |
| <a name="input_sample_landing_bucket_enable_cors"></a> [tca\_landing\_bucket\_enable\_cors](#input\_tca\_landing\_bucket\_enable\_cors) | Contiditional enabling of CORS | `bool` | `true` | no |
| <a name="input_sample_landing_bucket_name"></a> [tca\_landing\_bucket\_name](#input\_tca\_landing\_bucket\_name) | Name of the S3 bucket for audio file upload. Max 27 characters | `string` | `"sample-landing-bucket"` | no |
| <a name="input_sample_language_options"></a> [tca\_language\_options](#input\_tca\_language\_options) | List of language codes for languages you thinkg may be present in your media.<br>    Default is 'en-US.' Including more than 5 is not recommended. | `list(any)` | <pre>[<br>  "en-US"<br>]</pre> | no |
| <a name="input_sample_number_schemas"></a> [tca\_number\_schemas](#input\_tca\_number\_schemas) | A container with the number schema attributes of a user pool. Maximum of 50 attributes | `list(any)` | `[]` | no |
| <a name="input_sample_output_billing_mode"></a> [tca\_output\_billing\_mode](#input\_tca\_output\_billing\_mode) | n/a | `string` | `"PROVISIONED"` | no |
| <a name="input_sample_output_bucket_create_nuke_everything_lifecycle_config"></a> [tca\_output\_bucket\_create\_nuke\_everything\_lifecycle\_config](#input\_tca\_output\_bucket\_create\_nuke\_everything\_lifecycle\_config) | Conditional create of the lifecycle config to remove all objects from the bucket | `bool` | `true` | no |
| <a name="input_sample_output_bucket_days_until_objects_expiration"></a> [tca\_output\_bucket\_days\_until\_objects\_expiration](#input\_tca\_output\_bucket\_days\_until\_objects\_expiration) | The number of days until objects in the bucket are deleted | `number` | `1` | no |
| <a name="input_sample_output_bucket_enable_cors"></a> [tca\_output\_bucket\_enable\_cors](#input\_tca\_output\_bucket\_enable\_cors) | Contiditional enabling of CORS | `bool` | `true` | no |
| <a name="input_sample_output_bucket_name"></a> [tca\_output\_bucket\_name](#input\_tca\_output\_bucket\_name) | Output bucket for completed transcriptions. Max 27 characters | `string` | `"sample-output-bucket"` | no |
| <a name="input_sample_output_read_capacity"></a> [tca\_output\_read\_capacity](#input\_tca\_output\_read\_capacity) | n/a | `number` | `20` | no |
| <a name="input_sample_output_write_capacity"></a> [tca\_output\_write\_capacity](#input\_tca\_output\_write\_capacity) | n/a | `number` | `20` | no |
| <a name="input_sample_password_policy_min_length"></a> [tca\_password\_policy\_min\_length](#input\_tca\_password\_policy\_min\_length) | The minimum nmber of characters for Cognito user passwords | `number` | `8` | no |
| <a name="input_sample_password_policy_require_lowercase"></a> [tca\_password\_policy\_require\_lowercase](#input\_tca\_password\_policy\_require\_lowercase) | Whether or not the Cognito user password must have at least 1 lowercase character | `bool` | `true` | no |
| <a name="input_sample_password_policy_require_numbers"></a> [tca\_password\_policy\_require\_numbers](#input\_tca\_password\_policy\_require\_numbers) | Whether or not the Cognito user password must have at least 1 number | `bool` | `true` | no |
| <a name="input_sample_password_policy_require_symbols"></a> [tca\_password\_policy\_require\_symbols](#input\_tca\_password\_policy\_require\_symbols) | Whether or not the Cognito user password must have at least 1 special character | `bool` | `true` | no |
| <a name="input_sample_password_policy_require_uppercase"></a> [tca\_password\_policy\_require\_uppercase](#input\_tca\_password\_policy\_require\_uppercase) | Whether or not the Cognito user password must have at least 1 uppercase character | `bool` | `true` | no |
| <a name="input_sample_password_policy_temp_password_validity_days"></a> [tca\_password\_policy\_temp\_password\_validity\_days](#input\_tca\_password\_policy\_temp\_password\_validity\_days) | The number of days a temp password is valid. If user does not sign-in during this time, will need to be reset by an admin | `number` | `7` | no |
| <a name="input_sample_pii_entity_types"></a> [tca\_pii\_entity\_types](#input\_tca\_pii\_entity\_types) | Sets which types of PII you want to redact in your transcript. You can include as<br>  many as you'd like, or you can select 'ALL' (default).<br>  Acceptable values are:<br>  'BANK\_ACCOUNT\_NUMBER','BANK\_ROUTING','CREDIT\_DEBIT\_NUMBER','CREDIT\_DEBIT\_CVV'<br>  ,'CREDIT\_DEBIT\_EXPIRY','PIN','EMAIL','ADDRESS','NAME','PHONE','SSN','ALL' | `list(string)` | `[]` | no |
| <a name="input_sample_quicksight_bucket_name"></a> [tca\_quicksight\_bucket\_name](#input\_tca\_quicksight\_bucket\_name) | Name of the QuickSight bucket. Max 27 characters | `string` | `"quicksight-bucket"` | no |
| <a name="input_sample_s3_block_public_access"></a> [tca\_s3\_block\_public\_access](#input\_tca\_s3\_block\_public\_access) | Conditional enabling of the block public access S3 feature | `bool` | `true` | no |
| <a name="input_sample_s3_block_public_acls"></a> [tca\_s3\_block\_public\_acls](#input\_tca\_s3\_block\_public\_acls) | Conditional enabling of the block public ACLs S3 feature | `bool` | `true` | no |
| <a name="input_sample_s3_block_public_policy"></a> [tca\_s3\_block\_public\_policy](#input\_tca\_s3\_block\_public\_policy) | Conditional enabling of the block public policy S3 feature | `bool` | `true` | no |
| <a name="input_sample_s3_enable_bucket_policy"></a> [tca\_s3\_enable\_bucket\_policy](#input\_tca\_s3\_enable\_bucket\_policy) | Conditional creation of S3 bucket policies | `bool` | `true` | no |
| <a name="input_sample_s3_logging_bucket_name"></a> [tca\_s3\_logging\_bucket\_name](#input\_tca\_s3\_logging\_bucket\_name) | Name of bucket used for TCA logs. Max 27 characters | `string` | `"sample-logs"` | no |
| <a name="input_sample_schemas"></a> [tca\_schemas](#input\_tca\_schemas) | A container with the schema attributes of a user pool. Maximum of 50 attributes | `list(any)` | `[]` | no |
| <a name="input_sample_second_speaker_participant_role"></a> [tca\_second\_speaker\_participant\_role](#input\_tca\_second\_speaker\_participant\_role) | n/a | `string` | `"CUSTOMER"` | no |
| <a name="input_sample_sfn_state_generate_uuid_name"></a> [tca\_sfn\_state\_generate\_uuid\_name](#input\_tca\_sfn\_state\_generate\_uuid\_name) | Name for SFN State that generates a UUID that is appended to the object key of the file copied from tca\_landing to tca\_input bucket | `string` | `"GenerateUUID"` | no |
| <a name="input_sample_sfn_state_generate_uuid_next_step"></a> [tca\_sfn\_state\_generate\_uuid\_next\_step](#input\_tca\_sfn\_state\_generate\_uuid\_next\_step) | } | `string` | `"GetTCAInputFile"` | no |
| <a name="input_sample_sfn_state_get_sample_input_file_name"></a> [tca\_sfn\_state\_get\_tca\_input\_file\_name](#input\_tca\_sfn\_state\_get\_tca\_input\_file\_name) | Generates a UUID that is appended to the object key of the file copied from tca\_landing to tca\_input bucket | `string` | `"GetTCAInputFile"` | no |
| <a name="input_sample_sfn_state_get_sample_input_file_next_step"></a> [tca\_sfn\_state\_get\_tca\_input\_file\_next\_step](#input\_tca\_sfn\_state\_get\_tca\_input\_file\_next\_step) | n/a | `string` | `"StartCallAnalyticsJob"` | no |
| <a name="input_sample_sfn_state_machine_name"></a> [tca\_sfn\_state\_machine\_name](#input\_tca\_sfn\_state\_machine\_name) | Name of the state machine used to orchestrate pipeline | `string` | `"sample-state-machine"` | no |
| <a name="input_sample_sfn_state_start_call_analytics_job_name"></a> [tca\_sfn\_state\_start\_call\_analytics\_job\_name](#input\_tca\_sfn\_state\_start\_call\_analytics\_job\_name) | Generates a UUID that is appended to the object key of the file copied from tca\_landing to tca\_input bucket | `string` | `"StartCallAnalyticsJob"` | no |
| <a name="input_sample_sfn_state_start_call_analytics_job_next_step"></a> [tca\_sfn\_state\_start\_call\_analytics\_job\_next\_step](#input\_tca\_sfn\_state\_start\_call\_analytics\_job\_next\_step) | n/a | `string` | `"Wait20Seconds"` | no |
| <a name="input_sample_standard_cognito_user_group_description"></a> [tca\_standard\_cognito\_user\_group\_description](#input\_tca\_standard\_cognito\_user\_group\_description) | n/a | `string` | `"Standard Group"` | no |
| <a name="input_sample_standard_cognito_user_group_name"></a> [tca\_standard\_cognito\_user\_group\_name](#input\_tca\_standard\_cognito\_user\_group\_name) | n/a | `string` | `"Standard"` | no |
| <a name="input_sample_standard_cognito_users"></a> [tca\_standard\_cognito\_users](#input\_tca\_standard\_cognito\_users) | Standard Users | `map(any)` | `{}` | no |
| <a name="input_sample_string_schemas"></a> [tca\_string\_schemas](#input\_tca\_string\_schemas) | A container with the string schema attributes of a user pool. Maximum of 50 attributes | `list(any)` | <pre>[<br>  {<br>    "attribute_data_type": "String",<br>    "developer_only_attribute": false,<br>    "mutable": false,<br>    "name": "email",<br>    "required": true,<br>    "string_attribute_constraints": {<br>      "max_length": 25,<br>      "min_length": 7<br>    }<br>  },<br>  {<br>    "attribute_data_type": "String",<br>    "developer_only_attribute": false,<br>    "mutable": true,<br>    "name": "given_name",<br>    "required": true,<br>    "string_attribute_constraints": {<br>      "max_length": 25,<br>      "min_length": 1<br>    }<br>  },<br>  {<br>    "attribute_data_type": "String",<br>    "developer_only_attribute": false,<br>    "mutable": true,<br>    "name": "family_name",<br>    "required": true,<br>    "string_attribute_constraints": {<br>      "max_length": 25,<br>      "min_length": 1<br>    }<br>  },<br>  {<br>    "attribute_data_type": "String",<br>    "developer_only_attribute": false,<br>    "mutable": true,<br>    "name": "IAC_PROVIDER",<br>    "required": false,<br>    "string_attribute_constraints": {<br>      "max_length": 10,<br>      "min_length": 1<br>    }<br>  }<br>]</pre> | no |
| <a name="input_sample_tf_remote_state_bucket_name"></a> [tca\_tf\_remote\_state\_bucket\_name](#input\_tca\_tf\_remote\_state\_bucket\_name) | Name of Terraform Remote State bucket. Max 27 characters | `string` | `"sample-tf-remote-state"` | no |
| <a name="input_sample_use_custom_language_model"></a> [tca\_use\_custom\_language\_model](#input\_tca\_use\_custom\_language\_model) | Enables the use of a custom language model in your job | `bool` | `false` | no |
| <a name="input_sample_use_custom_vocabulary"></a> [tca\_use\_custom\_vocabulary](#input\_tca\_use\_custom\_vocabulary) | Enables the use of a custom vocabulary in your job | `bool` | `false` | no |
| <a name="input_sample_use_custom_vocabulary_filter"></a> [tca\_use\_custom\_vocabulary\_filter](#input\_tca\_use\_custom\_vocabulary\_filter) | Enables the use of a custom vocabulary filter in your job | `bool` | `false` | no |
| <a name="input_sample_use_language_id_settings"></a> [tca\_use\_language\_id\_settings](#input\_tca\_use\_language\_id\_settings) | Enables the use of LanguageIdSettings in your job.<br>    More info here: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/transcribe.html | `bool` | `false` | no |
| <a name="input_sample_use_redaction_type_redacted_and_unredacted"></a> [tca\_use\_redaction\_type\_redacted\_and\_unredacted](#input\_tca\_use\_redaction\_type\_redacted\_and\_unredacted) | Sets the RedactionType to either 'redacted\_and\_unredacted' (default) or 'redacted' | `bool` | `true` | no |
| <a name="input_sample_user_pool_client_name"></a> [tca\_user\_pool\_client\_name](#input\_tca\_user\_pool\_client\_name) | The name of the Cognito User Pool Client created | `string` | `"sample_user_pool_client"` | no |
| <a name="input_sample_user_pool_name"></a> [tca\_user\_pool\_name](#input\_tca\_user\_pool\_name) | The name of the Cognito User Pool created | `string` | `"sample_user_pool"` | no |

## Outputs

| Name | Description |
|------|-------------|
| <a name="output_aws_current_region"></a> [aws\_current\_region](#output\_aws\_current\_region) | AWS Current Region |
| <a name="output_sample_app_storage_bucket_arn"></a> [tca\_app\_storage\_bucket\_arn](#output\_tca\_app\_storage\_bucket\_arn) | The ARN of the S3 app storage bucket |
| <a name="output_sample_app_storage_bucket_id"></a> [tca\_app\_storage\_bucket\_id](#output\_tca\_app\_storage\_bucket\_id) | The name of the S3 app storage bucket |
| <a name="output_sample_appsync_graphql_api_id"></a> [tca\_appsync\_graphql\_api\_id](#output\_tca\_appsync\_graphql\_api\_id) | n/a |
| <a name="output_sample_appsync_graphql_api_region"></a> [tca\_appsync\_graphql\_api\_region](#output\_tca\_appsync\_graphql\_api\_region) | AppSync (GraphQL) |
| <a name="output_sample_appsync_graphql_api_uris"></a> [tca\_appsync\_graphql\_api\_uris](#output\_tca\_appsync\_graphql\_api\_uris) | n/a |
| <a name="output_sample_dynamodb_output_table_name"></a> [tca\_dynamodb\_output\_table\_name](#output\_tca\_dynamodb\_output\_table\_name) | DynamoDB |
| <a name="output_sample_identity_pool_id"></a> [tca\_identity\_pool\_id](#output\_tca\_identity\_pool\_id) | n/a |
| <a name="output_sample_input_bucket_arn"></a> [tca\_input\_bucket\_arn](#output\_tca\_input\_bucket\_arn) | The Arn of the S3 input bucket |
| <a name="output_sample_input_bucket_id"></a> [tca\_input\_bucket\_id](#output\_tca\_input\_bucket\_id) | The name of the S3 input bucket |
| <a name="output_sample_output_bucket_arn"></a> [tca\_output\_bucket\_arn](#output\_tca\_output\_bucket\_arn) | The Arn of the S3 input bucket |
| <a name="output_sample_output_bucket_id"></a> [tca\_output\_bucket\_id](#output\_tca\_output\_bucket\_id) | The name of the S3 output bucket |
| <a name="output_sample_quicksight_bucket_arn"></a> [tca\_quicksight\_bucket\_arn](#output\_tca\_quicksight\_bucket\_arn) | The ARN of the S3 app storage bucket |
| <a name="output_sample_quicksight_bucket_id"></a> [tca\_quicksight\_bucket\_id](#output\_tca\_quicksight\_bucket\_id) | The name of the S3 app storage bucket |
| <a name="output_sample_s3_logging_bucket_arn"></a> [tca\_s3\_logging\_bucket\_arn](#output\_tca\_s3\_logging\_bucket\_arn) | The ARN of the S3 logging bucket |
| <a name="output_sample_s3_logging_bucket_id"></a> [tca\_s3\_logging\_bucket\_id](#output\_tca\_s3\_logging\_bucket\_id) | The name of the S3 logging bucket |
| <a name="output_sample_step_function_arn"></a> [tca\_step\_function\_arn](#output\_tca\_step\_function\_arn) | Step Function |
| <a name="output_sample_user_pool_client_id"></a> [tca\_user\_pool\_client\_id](#output\_tca\_user\_pool\_client\_id) | n/a |
| <a name="output_sample_user_pool_id"></a> [tca\_user\_pool\_id](#output\_tca\_user\_pool\_id) | n/a |
| <a name="output_sample_user_pool_region"></a> [tca\_user\_pool\_region](#output\_tca\_user\_pool\_region) | Cognito |
