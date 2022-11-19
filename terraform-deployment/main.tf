// This is a template file for a basic deployment.
// Modify the parameters below with actual values
module "sample-qs" {
  // location of the module - can be local or git repo
  source = "./modules/sample-module"

  # - Cognito -
  # Admin Users to create
  sample_admin_cognito_users = {
    NarutoUzumaki : {
      username       = "admin"
      given_name     = "Default"
      family_name    = "Admin"
      email          = "novekm@amazon.com"
      email_verified = true // no touchy
    },
    SasukeUchiha : {
      username       = "kmayers"
      given_name     = "Kevon"
      family_name    = "Mayers"
      email          = "kevonmayers31@gmail.com"
      email_verified = true // no touchy
    }
  }
  # Standard Users to create
  sample_standard_cognito_users = {
    DefaultStandardUser : {
      username       = "default"
      given_name     = "Default"
      family_name    = "User"
      email          = "kevon_mayers@yahoo.com"
      email_verified = true // no touchy
    }
  }

}
