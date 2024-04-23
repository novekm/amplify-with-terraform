// This is a template file for a basic deployment.
// Modify the parameters below with actual values
module "sample-qs" {
  source = "./modules/sample-module"

  path_to_build_spec = "../amplify.yml"

  cognito_groups = {
    Admin : {
      name        = "Admin"
      description = "Admin users"
    },
    Standard : {
      name        = "Standard"
      description = "Standard users"
    },

  }

  cognito_users = {
    # Admin Users to create
    NarutoUzumaki : {
      username         = "nuzumaki"
      given_name       = "Naruto"
      family_name      = "Uzumaki"
      email            = "naruto@rasengan.com"
      email_verified   = true // no touchy
      group_membership = ["Admin", "Standard"]
    },

    # Standard Users to create
    SasukeUchiha : {
      username         = "suchiha"
      given_name       = "Sasuke"
      family_name      = "Uchiha"
      email            = "sasuke@chidori.com"
      email_verified   = true // no touchy
      group_membership = ["Standard"]
    }
  }

}
