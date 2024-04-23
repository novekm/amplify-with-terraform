resource "random_string" "landing_bucket" {
  length  = 4
  special = false
  upper   = false
}


# [Notes:]
# Why are you using data sources instead of jsonencode() for policies?
# Data sources let you check the syntax of your json code by running 'terraform validate'
# This happens automatically when running 'terraform plan' and 'terraform apply'
# In the event your syntax is correct, it will tell you what is in correct
# When using jsonencode() you will just get a MalformedPolicy error if something is incorrect

# - S3 Bucket Policies -
# The S3 Bucket Polices do the following:
#  - Allow the s3:PutObject action only for objects that have specific extensions (suffix)
#  - Explicitly deny the s3:PutObject action for objects that don't have the specific extensions (suffix)
# Note: This explicit deny statement applies the file-type requirement to users with full access to your Amazon S3 resources.
# [More info]: https://aws.amazon.com/premiumsupport/knowledge-center/s3-allow-certain-file-types/


# Landing Bucket IAM Policy
data "aws_iam_policy_document" "landing_bucket_restrict_file_types" {
  statement {
    principals {
      type = "AWS"
      identifiers = [
        "${data.aws_caller_identity.current.account_id}",
      ]
    }
    effect  = "Allow"
    actions = ["s3:PutObject", "s3:GetObject"]
    # Allows all S3 operations for files matching the below suffixes
    resources = [
      "${aws_s3_bucket.landing_bucket.arn}/*.amr",
      "${aws_s3_bucket.landing_bucket.arn}/*.flac",
      "${aws_s3_bucket.landing_bucket.arn}/*.mp3",
      "${aws_s3_bucket.landing_bucket.arn}/*.mp4",
      "${aws_s3_bucket.landing_bucket.arn}/*.ogg",
      "${aws_s3_bucket.landing_bucket.arn}/*.webm",
      "${aws_s3_bucket.landing_bucket.arn}/*.wav",
    ]
  }
  statement {
    principals {
      type        = "AWS"
      identifiers = ["*"]
    }
    # WARNING - this is an EXPLICIT DENY. Be very careful of the action for this statement.condition {
    # If you accidentally change it to "s3:*", you will lock yourself out of the bucket.
    # To resolve this, you must log in to the root user account and delete the policy.
    effect  = "Deny"
    actions = ["s3:PutObject"]
    # Denys all S3 operations for files that do not match the below suffixes
    not_resources = [
      "${aws_s3_bucket.landing_bucket.arn}/*.amr",
      "${aws_s3_bucket.landing_bucket.arn}/*.flac",
      "${aws_s3_bucket.landing_bucket.arn}/*.mp3",
      "${aws_s3_bucket.landing_bucket.arn}/*.mp4",
      "${aws_s3_bucket.landing_bucket.arn}/*.ogg",
      "${aws_s3_bucket.landing_bucket.arn}/*.webm",
      "${aws_s3_bucket.landing_bucket.arn}/*.wav",
    ]
  }
}
# Landing S3 Bucket Policy
resource "aws_s3_bucket_policy" "landing_bucket_restrict_file_types" {
  count  = var.s3_enable_bucket_policy ? 1 : 0
  bucket = aws_s3_bucket.landing_bucket.id
  policy = data.aws_iam_policy_document.landing_bucket_restrict_file_types.json
}


# S3 Bucket Notifications -> EventBridge
resource "aws_s3_bucket_notification" "landing_bucket_events" {
  bucket = aws_s3_bucket.landing_bucket.id
  # Send all S3 events for this bucket to EventBridge
  eventbridge = true
}



# - LifeCycle Configurations -
# S3 Output Bucket has the necessary files copied to other S3 buckets automatically.
# This is handled by Lambda. This lifecycle configuration removes all of the objects
# in the bucket after 1 day. You can configure the number of days by changing the value
# for the variable 'output_bucket_days_until_objects_expiration' or disable the
# lifecycle policy completely by setting 'output_bucket_create_nuke_everything_lifecycle_config'
# to false.
resource "aws_s3_bucket_lifecycle_configuration" "landing_bucket_lifecycle_config" {
  count  = var.landing_bucket_create_nuke_everything_lifecycle_config ? 1 : 0
  bucket = aws_s3_bucket.landing_bucket.id
  rule {
    id = "nuke-everything"
    filter {} // empty filter = rule applies to all objects in the bucket
    expiration {
      days = var.landing_bucket_days_until_objects_expiration
    }
    status = "Enabled"
  }
}

# - S3 Buckets -
# S3 Landing Bucket
resource "aws_s3_bucket" "landing_bucket" {
  bucket        = lower("${var.app_name}-${var.landing_bucket_name}-${random_string.landing_bucket.result}")
  force_destroy = var.s3_enable_force_destroy

  tags = merge(
    {
      "AppName" = var.app_name
    },
    var.tags,
  )
}
# S3 Landing Bucket - Block Public Access
resource "aws_s3_bucket_public_access_block" "landing_bucket_block_public_access" {
  count               = var.s3_block_public_access ? 1 : 0
  bucket              = aws_s3_bucket.landing_bucket.id
  block_public_acls   = var.s3_block_public_acls
  block_public_policy = var.s3_block_public_policy
}
# S3 Landing Bucket - CORS Policy
resource "aws_s3_bucket_cors_configuration" "landing_bucket_cors" {
  count  = var.landing_bucket_enable_cors ? 1 : 0
  bucket = aws_s3_bucket.landing_bucket.id

  cors_rule {
    allowed_headers = ["*"]
    allowed_methods = ["GET", "HEAD", "PUT", "POST", "DELETE"]
    allowed_origins = ["*"]
    expose_headers = [
      "x-amz-server-side-encryption",
      "x-amz-request-id",
      "x-amz-id-2", "ETag"
    ]
    max_age_seconds = 3000
  }

}
