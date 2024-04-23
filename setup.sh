# Make bin directory and change back to terraform-test-framework-workshop directory
# cd ../../.. && mkdir bin && cd ec2-user/environment/terraform-test-framework-workshop

# Amazon Linux 2023

# Install Homebrew
export NONINTERACTIVE=1
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Add Homebrew to $PATH (uncomment below line if using Amazon Linux 2 Image)
# (echo; echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"') >> /home/ec2-user/.bashrc
eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"


# Check Homebrew version to validte installation
brew -v

# Install Terraform (if not already installed) - likely will install v1.5.7
brew install terraform

# Unlink Terraform so tfenv can be installed
brew unlink terraform

# Install tfenv
brew install tfenv

# Check tfenv version to validte installation
tfenv -v

# Download and switch to to latest version of Terraform
tfenv use latest

# Validate that v1.6 or higher of Terraform is installed
terraform -v

# Install Checkov
brew install checkov

# Check Checkov version to validte installation
checkov -v


echo Setup finished successfully!
