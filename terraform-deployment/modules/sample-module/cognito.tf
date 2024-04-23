# - USER POOL -
resource "aws_cognito_user_pool" "user_pool" {
  name = "${var.app_name}-${var.user_pool_name}"
  account_recovery_setting {
    recovery_mechanism {
      name     = "verified_email"
      priority = 1
    }
    # Additional recovery mechanism
    # recovery_mechanism {
    #   name     = "verified_phone_number"
    #   priority = 2
    # }
  }

  alias_attributes         = ["email"] // alows users to sign-in with either username or email address
  auto_verified_attributes = ["email"] // disable this if you set email_verification_message and subject

  // enable these if auto_verified_attributes is not present
  # email_verification_message = var.email_verification_message
  # email_verification_subject = var.email_verification_subject

  admin_create_user_config {
    allow_admin_create_user_only = true
    invite_message_template {
      email_message = var.invite_email_message
      email_subject = var.invite_email_subject
      sms_message   = var.invite_sms_message
    }
  }
  password_policy {
    minimum_length                   = var.password_policy_min_length
    require_lowercase                = var.password_policy_require_lowercase
    require_numbers                  = var.password_policy_require_numbers
    require_uppercase                = var.password_policy_require_uppercase
    temporary_password_validity_days = var.password_policy_temp_password_validity_days
  }


  # General Schema
  dynamic "schema" {
    for_each = var.schemas == null ? [] : var.schemas
    content {
      name                     = lookup(schema.value, "name")
      attribute_data_type      = lookup(schema.value, "attribute_data_type")
      required                 = lookup(schema.value, "required")
      mutable                  = lookup(schema.value, "mutable")
      developer_only_attribute = lookup(schema.value, "developer_only_attribute")
    }
  }

  # Schema (String)
  dynamic "schema" {
    for_each = var.string_schemas == null ? [] : var.string_schemas
    content {
      name                     = lookup(schema.value, "name")
      attribute_data_type      = lookup(schema.value, "attribute_data_type")
      required                 = lookup(schema.value, "required")
      mutable                  = lookup(schema.value, "mutable")
      developer_only_attribute = lookup(schema.value, "developer_only_attribute")

      # string_attribute_constraints
      dynamic "string_attribute_constraints" {
        for_each = length(lookup(schema.value, "string_attribute_constraints")) == 0 ? [] : [lookup(schema.value, "string_attribute_constraints", {})]
        content {
          min_length = lookup(string_attribute_constraints.value, "min_length", 0)
          max_length = lookup(string_attribute_constraints.value, "max_length", 0)
        }
      }
    }
  }

  # Schema (Number)
  dynamic "schema" {
    for_each = var.number_schemas == null ? [] : var.number_schemas
    content {
      name                     = lookup(schema.value, "name")
      attribute_data_type      = lookup(schema.value, "attribute_data_type")
      required                 = lookup(schema.value, "required")
      mutable                  = lookup(schema.value, "mutable")
      developer_only_attribute = lookup(schema.value, "developer_only_attribute")

      # number_attribute_constraints
      dynamic "number_attribute_constraints" {
        for_each = length(lookup(schema.value, "number_attribute_constraints")) == 0 ? [] : [lookup(schema.value, "number_attribute_constraints", {})]
        content {
          min_value = lookup(number_attribute_constraints.value, "min_value", 0)
          max_value = lookup(number_attribute_constraints.value, "max_value", 0)
        }
      }
    }
  }


  tags = merge(
    {
      "AppName" = var.app_name
    },
    var.tags,
  )
}

# Cognito User Pool Client
resource "aws_cognito_user_pool_client" "user_pool_client" {
  name         = var.user_pool_client_name
  user_pool_id = aws_cognito_user_pool.user_pool.id
  # callback_urls                        = ["https://example.com"]
  # allowed_oauth_flows_user_pool_client = true
  # allowed_oauth_flows                  = ["code", "implicit"]
  # allowed_oauth_scopes         = ["email", "openid"]
  supported_identity_providers = ["COGNITO"]
}


# Cognito Identity Pool
resource "aws_cognito_identity_pool" "identity_pool" {
  identity_pool_name               = var.identity_pool_name
  allow_unauthenticated_identities = var.identity_pool_allow_unauthenticated_identites
  allow_classic_flow               = var.identity_pool_allow_classic_flow

  cognito_identity_providers {
    client_id = aws_cognito_user_pool_client.user_pool_client.id
    # provider_name           = "cognito-idp.${var.aws_region}.amazonaws.com/${aws_cognito_user_pool.user_pool.id}"
    provider_name           = "cognito-idp.${data.aws_region.current.name}.amazonaws.com/${aws_cognito_user_pool.user_pool.id}"
    server_side_token_check = false
  }
}

# Cognito Identity Pool Roles Attachments
resource "aws_cognito_identity_pool_roles_attachment" "identity_pool_auth_roles_attachment" {
  identity_pool_id = aws_cognito_identity_pool.identity_pool.id

  role_mapping {
    identity_provider = "cognito-idp.${data.aws_region.current.id}.amazonaws.com/${aws_cognito_user_pool.user_pool.id}:${aws_cognito_user_pool_client.user_pool_client.id}"
    # ambiguous_role_resolution = "AuthenticatedRole"
    ambiguous_role_resolution = "Deny" // must be either "AuthenticatedRole" or "Deny" (case-sensitive)
    # type                      = "Token"
    type = "Rules" // either "Token" or "Rules" (case-sensitive)

    # More info on Fine-Grained access Control with Cognito Identity Pools:
    # https://www.youtube.com/watch?v=tAUmz94O2Qo
    # https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_MappingRule.html
    mapping_rule {
      claim = "cognito:groups" // claim that is in token for cognito users in groups
      # Set this to "Contains" if users will potentially be in more than one group
      match_type = "Contains" // Valid values are "Equals", "Contains", "StartsWith", and "NotEqual"
      # role_arn   = var.create_full_access_roles ? aws_iam_role.cognito_admin_group_full_access[0].arn : aws_iam_role.cognito_admin_group_restricted_access[0].arn
      role_arn = aws_iam_role.cognito_admin_group_restricted_access[0].arn
      value    = "Admin" // group name. Claim/value = cognito:groups/Admin
    }
    mapping_rule {
      claim = "cognito:groups" // claim that is in token for cognito users in groups
      # Set this to "Contains" if users will potentially be in more than one group
      match_type = "Contains" // Valid values are "Equals", "Contains", "StartsWith", and "NotEqual"
      role_arn   = aws_iam_role.cognito_standard_group_restricted_access[0].arn
      value      = "Standard" // group name. Claim/value = cognito:groups/Standard
    }
  }

  # IAM Roles for users who are not in any groups
  roles = {
    "authenticated"   = aws_iam_role.cognito_authrole_restricted_access[0].arn
    "unauthenticated" = aws_iam_role.cognito_unauthrole_restricted_access[0].arn
  }
}

# resource "aws_cognito_user" "name" {
#   username     = "test"
#   user_pool_id = aws_cognito_user_pool.user_pool.id

# }


# - COGNITO USERS -
# Users
resource "aws_cognito_user" "cognito_users" {
  for_each = var.cognito_users != null ? var.cognito_users : {}
  # for_each     = var.cognito_users == null ? {} : var.cognito_users
  user_pool_id = aws_cognito_user_pool.user_pool.id

  # username = each.value.email
  username = each.value.username
  attributes = {
    email          = each.value.email
    given_name     = each.value.given_name
    family_name    = each.value.family_name
    IAC_PROVIDER   = "Terraform"
    email_verified = true
  }
}

# Groups
resource "aws_cognito_user_group" "cognito_user_groups" {
  for_each     = var.cognito_groups == null ? {} : var.cognito_groups
  user_pool_id = aws_cognito_user_pool.user_pool.id
  name         = each.value.name
  description  = each.value.description
  precedence   = 1
  role_arn     = each.value.name == "Admin" ? aws_iam_role.cognito_admin_group_restricted_access[0].arn : aws_iam_role.cognito_standard_group_restricted_access[0].arn
}

# Admin User Group Association
resource "aws_cognito_user_in_group" "cognito_user_group_memberships" {
  for_each = local.users_and_their_groups
  # for_each = var.cognito_users == null ? {} : var.cognito_users
  # for_each     = var.admin_cognito_users == null ? {} : var.admin_cognito_users
  user_pool_id = aws_cognito_user_pool.user_pool.id
  group_name   = each.value.group_name
  # group_name   = [each.key].group_membership
  # group_name   = aws_cognito_user_group.admin_cognito_user_group.name
  username = each.value.username
  depends_on = [
    aws_cognito_user.cognito_users,
    aws_cognito_user_group.cognito_user_groups,
  ]
}



# Admin Users
# resource "aws_cognito_user" "admin_cognito_users" {
#   for_each = var.admin_cognito_users == null ? {} : var.admin_cognito_users

#   user_pool_id = aws_cognito_user_pool.user_pool.id

#   # username = each.value.email
#   username = each.value.username
#   attributes = {
#     email          = each.value.email
#     given_name     = each.value.given_name
#     family_name    = each.value.family_name
#     IAC_PROVIDER   = "Terraform"
#     email_verified = true
#   }
# }

# # Admin User Group
# resource "aws_cognito_user_group" "admin_cognito_user_group" {
#   user_pool_id = aws_cognito_user_pool.user_pool.id
#   name         = var.admin_cognito_user_group_name
#   description  = var.admin_cognito_user_group_description
#   precedence   = 1
#   role_arn     = aws_iam_role.cognito_admin_group_restricted_access[0].arn
# }

# # Admin User Group Association
# resource "aws_cognito_user_in_group" "admin_cognito_user_group_association" {
#   for_each     = var.admin_cognito_users == null ? {} : var.admin_cognito_users
#   user_pool_id = aws_cognito_user_pool.user_pool.id
#   group_name   = aws_cognito_user_group.admin_cognito_user_group.name
#   username = each.value.username
#   depends_on = [
#     aws_cognito_user.admin_cognito_users,
#     aws_cognito_user_group.admin_cognito_user_group,
#   ]
# }


# # Standard Users
# resource "aws_cognito_user" "standard_cognito_users" {
#   for_each = var.standard_cognito_users == null ? {} : var.standard_cognito_users

#   user_pool_id = aws_cognito_user_pool.user_pool.id

#   username = each.value.username
#   attributes = {
#     email          = each.value.email
#     given_name     = each.value.given_name
#     family_name    = each.value.family_name
#     IAC_PROVIDER   = "Terraform"
#     email_verified = true
#   }
# }

# # Standard User Group
# resource "aws_cognito_user_group" "standard_cognito_user_group" {
#   user_pool_id = aws_cognito_user_pool.user_pool.id
#   name         = var.standard_cognito_user_group_name
#   description  = var.standard_cognito_user_group_description
#   precedence   = 2
#   role_arn     = aws_iam_role.cognito_standard_group_restricted_access[0].arn
# }

# # Admin User Group Association
# resource "aws_cognito_user_in_group" "standard_cognito_user_group_association" {
#   for_each     = var.standard_cognito_users == null ? {} : var.standard_cognito_users
#   user_pool_id = aws_cognito_user_pool.user_pool.id
#   group_name   = aws_cognito_user_group.standard_cognito_user_group.name
#   username     = each.value.username
#   depends_on = [
#     aws_cognito_user.standard_cognito_users,
#     aws_cognito_user_group.standard_cognito_user_group,
#   ]

# }






