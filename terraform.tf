terraform {
  cloud {
    organization = "will_tec"

    workspaces {
      name = "grage"
    }
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
  }

  required_version = ">= 1.1.0"
}