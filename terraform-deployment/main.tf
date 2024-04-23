// This is a template file for a basic deployment.
// Modify the parameters below with actual values
module "sample-qs" {
  // location of the module - can be local or git repo
  source = "./modules/sample-module"

  path_to_build_spec     = "../amplify.yml"
  create_codecommit_repo = true

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
    // Admin Users to create
    KevonMayersAdmin : {
      username         = "novekm-admin"
      given_name       = "Kevon"
      family_name      = "Mayers"
      email            = "novekm+app-admin@amazon.com"
      email_verified   = true // no touchy
      group_membership = ["Admin", "Standard"]
    },
    KevonMayersStandard : {
      username         = "novekm-standard"
      given_name       = "Kevon"
      family_name      = "Mayers"
      email            = "novekm+app-standard@amazon.com"
      email_verified   = true // no touchy
      group_membership = ["Standard"]
    },


    NarutoUzumaki : {
      username         = "nuzumaki"
      given_name       = "Naruto"
      family_name      = "Uzumaki"
      email            = "naruto@rasengan.com"
      email_verified   = true // no touchy
      group_membership = ["Admin", "Standard"]
      # group_membership = ["Admin", "Standard"]
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
