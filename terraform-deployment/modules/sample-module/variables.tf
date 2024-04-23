# - Amplify -
variable "create_amplify_app" {
  type        = bool
  default     = true
  description = "Conditional creation of AWS Amplify Web Application"
}
variable "app_name" {
  type        = string
  default     = "sampleApp"
  description = "The name of the Amplify Application"
}
variable "path_to_build_spec" {
  type        = string
  default     = null
  description = "The path to the location of your build_spec file. Use if 'build_spec' is not defined."

}
variable "build_spec" {
  type        = string
  default     = null
  description = "The actual content of your build_spec. Use if 'path_to_build_spec' is not defined."
}
variable "enable_auto_branch_creation" {
  type        = bool
  default     = true
  description = "Enables automated branch creation for the Amplify app"

}
variable "enable_auto_branch_deletion" {
  type        = bool
  default     = true
  description = "Automatically disconnects a branch in the Amplify Console when you delete a branch from your Git repository"

}
variable "auto_branch_creation_patterns" {
  type        = list(any)
  default     = ["main", "dev", ]
  description = "Automated branch creation glob patterns for the Amplify app. Ex. feat*/*"

}
variable "enable_auto_build" {
  type        = bool
  default     = true
  description = "Enables auto-building of autocreated branches for the Amplify App."

}
variable "enable_amplify_app_pr_preview" {
  type        = bool
  default     = false
  description = "Enables pull request previews for the autocreated branch"

}
variable "enable_performance_mode" {
  type        = bool
  default     = false
  description = "Enables performance mode for the branch. This keeps cache at Edge Locations for up to 10min after changes"
}
variable "framework" {
  type        = string
  default     = "React"
  description = "Framework for the autocreated branch"

}
variable "existing_repo_url" {
  type        = string
  default     = null
  description = "URL for the existing repo"

}
variable "github_access_token" {
  type        = string
  default     = null
  description = "Optional GitHub access token. Only required if using GitHub repo."

}
variable "amplify_app_framework" {
  type    = string
  default = "React"

}
variable "create_amplify_domain_association" {
  type    = bool
  default = false

}
variable "amplify_app_domain_name" {
  type        = string
  default     = "example.com"
  description = "The name of your domain. Ex. naruto.ninja"

}


# - Cognito -
# User Pool
variable "user_pool_name" {
  type        = string
  default     = "user_pool"
  description = "The name of the Cognito User Pool created"
}
variable "user_pool_client_name" {
  type        = string
  default     = "user_pool_client"
  description = "The name of the Cognito User Pool Client created"
}
variable "identity_pool_name" {
  type        = string
  default     = "identity_pool"
  description = "The name of the Cognito Identity Pool created"

}
variable "identity_pool_allow_unauthenticated_identites" {
  type    = bool
  default = false
}
variable "identity_pool_allow_classic_flow" {
  type    = bool
  default = false

}
variable "email_verification_message" {
  type        = string
  default     = <<-EOF

  Thank you for registering with the Sample App. This is your email confirmation.
  Verification Code: {####}

  EOF
  description = "The Cognito email verification message"
}
variable "email_verification_subject" {
  type        = string
  default     = "Sample App Verification"
  description = "The Cognito email verification subject"
}
variable "invite_email_message" {
  type    = string
  default = <<-EOF
    You have been invited to the Sample App App! Your username is "{username}" and
    temporary password is "{####}". Please reach out to an admin if you have issues signing in.

  EOF

}
variable "invite_email_subject" {
  type    = string
  default = <<-EOF
  Welcome to the Sample App!
  EOF

}
variable "invite_sms_message" {
  type    = string
  default = <<-EOF
    You have been invited to the Sample App! Your username is "{username}" and
    temporary password is "{####}".

  EOF

}
variable "password_policy_min_length" {
  type        = number
  default     = 8
  description = "The minimum nmber of characters for Cognito user passwords"
}
variable "password_policy_require_lowercase" {
  type        = bool
  default     = true
  description = "Whether or not the Cognito user password must have at least 1 lowercase character"

}
variable "password_policy_require_uppercase" {
  type        = bool
  default     = true
  description = "Whether or not the Cognito user password must have at least 1 uppercase character"

}
variable "password_policy_require_numbers" {
  type        = bool
  default     = true
  description = "Whether or not the Cognito user password must have at least 1 number"

}

variable "password_policy_require_symbols" {
  type        = bool
  default     = true
  description = "Whether or not the Cognito user password must have at least 1 special character"

}

variable "password_policy_temp_password_validity_days" {
  type        = number
  default     = 7
  description = "The number of days a temp password is valid. If user does not sign-in during this time, will need to be reset by an admin"

}
# General Schema
variable "schemas" {
  description = "A container with the schema attributes of a user pool. Maximum of 50 attributes"
  type        = list(any)
  default     = []
}
# Schema (String)
variable "string_schemas" {
  description = "A container with the string schema attributes of a user pool. Maximum of 50 attributes"
  type        = list(any)
  default = [{
    name                     = "email"
    attribute_data_type      = "String"
    required                 = true
    mutable                  = false
    developer_only_attribute = false

    string_attribute_constraints = {
      min_length = 7
      max_length = 60
    }
    },
    {
      name                     = "given_name"
      attribute_data_type      = "String"
      required                 = true
      mutable                  = true
      developer_only_attribute = false

      string_attribute_constraints = {
        min_length = 1
        max_length = 25
      }
    },
    {
      name                     = "family_name"
      attribute_data_type      = "String"
      required                 = true
      mutable                  = true
      developer_only_attribute = false

      string_attribute_constraints = {
        min_length = 1
        max_length = 25
      }
    },
    {
      name                     = "IAC_PROVIDER"
      attribute_data_type      = "String"
      required                 = false
      mutable                  = true
      developer_only_attribute = false

      string_attribute_constraints = {
        min_length = 1
        max_length = 10
      }
    },
  ]
}
# Schema (number)
variable "number_schemas" {
  description = "A container with the number schema attributes of a user pool. Maximum of 50 attributes"
  type        = list(any)
  default     = []
}

# Groups
variable "cognito_groups" {
  type = map(object({
    name        = string,
    description = optional(string, ""),
  }))
  description = "Collection of Amazon Cognito User Pool Groups you wish to create."
  default     = {}

}
# Users
variable "cognito_users" {
  type = map(object({
    username         = string,
    given_name       = string,
    family_name      = string,
    email            = string,
    email_verified   = optional(bool, true),
    group_membership = optional(list(string), ["admin"])

  }))
  description = "Collection of Amazon Cognito Users you wish to creat."
  default     = {}
}


# - AppSync (GraphQL API) -
variable "appsync_graphql_api_name" {
  type    = string
  default = "graphql-api"

}


# - DynamoDB -
variable "dynamodb_ttl_enable" {
  type    = bool
  default = false
}
variable "dynamodb_ttl_attribute" {
  type    = string
  default = "TimeToExist"
}
variable "output_billing_mode" {
  type    = string
  default = "PROVISIONED"
}
variable "output_read_capacity" {
  type    = number
  default = 20

}
variable "output_write_capacity" {
  type    = number
  default = 20

}


# - S3 -
variable "landing_bucket_name" {
  type        = string
  default     = "landing-bucket"
  description = "Name of the S3 bucket for audio file upload. Max 27 characters."
}
variable "s3_enable_force_destroy" {
  type    = string
  default = "true"

}
variable "s3_enable_bucket_policy" {
  type        = bool
  default     = true
  description = "Conditional creation of S3 bucket policies."

}
variable "s3_block_public_access" {
  type        = bool
  default     = true
  description = "Conditional enabling of the block public access S3 feature."

}
variable "s3_block_public_acls" {
  type        = bool
  default     = true
  description = "Conditional enabling of the block public ACLs S3 feature."

}
variable "s3_block_public_policy" {
  type        = bool
  default     = true
  description = "Conditional enabling of the block public policy S3 feature."

}
variable "landing_bucket_enable_cors" {
  type        = bool
  default     = true
  description = "Contiditional enabling of CORS."

}
variable "landing_bucket_create_nuke_everything_lifecycle_config" {
  type        = bool
  default     = false
  description = "Conditional create of the lifecycle config to remove all objects from the bucket."
}
variable "landing_bucket_days_until_objects_expiration" {
  type        = number
  default     = 1
  description = "The number of days until objects in the bucket are deleted."
}


# - Step Function -
variable "sfn_state_machine_name" {
  type        = string
  default     = "state-machine"
  description = "Name of the state machine used to orchestrate pipeline"

}
#  - Step Function -
# State Management
# GenerateUUID
variable "sfn_state_generate_uuid_name" {
  type        = string
  default     = "GenerateUUID"
  description = "Name for SFN State that generates a UUID that is appended to the object key of the file copied from landing to input bucket"

}
# variable "sfn_state_generate_uuid_type" {
#   type        = string
#   default     = "Pass"
#   description = "Pass state type"

# }
variable "sfn_state_generate_uuid_next_step" {
  type    = string
  default = "GetSampleInputFile"

}

# GetInputFile
variable "create_sfn_state_get_input_file" {
  type        = bool
  default     = true
  description = "Enables creation of GetSampleInputFile sfn state"

}
variable "sfn_state_get_input_file_name" {
  type        = string
  default     = "GetInputFile"
  description = "Fetches the file that was uploaded to the S3 Landing Bucket."

}



# - IAM -
variable "create_restricted_access_roles" {
  type        = bool
  default     = true
  description = "Conditional creation of restricted access roles"

}


# - SSM -
variable "lookup_ssm_github_access_token" {
  type        = bool
  default     = false
  description = <<-EOF
  *IMPORTANT!*
  Conditional data fetch of SSM parameter store for GitHub access token.
  To ensure security of this token, you must manually add it via the AWS console
  before using.
  EOF

}
variable "ssm_github_access_token_name" {
  type        = string
  default     = null
  description = "The name (key) of the SSM parameter store of your GitHub access token."

}


# GitLab
variable "enable_gitlab_mirroring" {
  type        = bool
  default     = false
  description = "Enables GitLab mirroring to the option AWS CodeCommit repo."
}
variable "gitlab_mirroring_iam_user_name" {
  type        = string
  default     = "gitlab_mirroring"
  description = "The IAM Username for the GitLab Mirroring IAM User."
}
variable "gitlab_mirroring_policy_name" {
  type        = string
  default     = "gitlab_mirroring_policy"
  description = "The name of the IAM policy attached to the GitLab Mirroring IAM User"
}


# CodeCommit
variable "create_codecommit_repo" {
  type    = bool
  default = false
}
variable "codecommit_repo_name" {
  type    = string
  default = "codecommit_repo"
}
variable "codecommit_repo_description" {
  type    = string
  default = "The CodeCommit repo created in the sample deployment"
}
variable "codecommit_repo_default_branch" {
  type    = string
  default = "main"

}



variable "tags" {
  type        = map(any)
  description = "Tags to apply to resources"
  default = {
    "IAC_PROVIDER" = "Terraform"
  }
}
