# Configure Provider
provider "azurerm" {
  features {}
}

# Terraform Backend
terraform {
  backend "azurerm" {
    resource_group_name  = "tf-backend-rg"
    storage_account_name = "tfbackendstorage"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}

# Resource group
resource "azurerm_resource_group" "main" {
  name     = var.resource_group_name
  location = var.location
}

# Key Vault Module
module "key_vault" {
  source              = "./modules/key_vault"
  key_vault_name      = var.key_vault_name
  location            = var.location
  resource_group_name = azurerm_resource_group.main.name
  docker_registry_username = var.docker_registry_username
  docker_registry_password = var.docker_registry_password
}

# Key Vault data sources
data "azurerm_key_vault" "main" {
  name                = module.key_vault.key_vault_name
  resource_group_name = azurerm_resource_group.main.name
}

data "azurerm_key_vault_secret" "docker_registry_username" {
  name         = "docker-registry-username"
  key_vault_id = data.azurerm_key_vault.main.id
}

data "azurerm_key_vault_secret" "docker_registry_password" {
  name         = "docker-registry-password"
  key_vault_id = data.azurerm_key_vault.main.id
}

# App Service Module
module "app_service" {
  source              = "./modules/app_service"
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location
  app_service_plan    = var.app_service_plan
  app_names           = var.app_names
  container_images    = var.container_images
  docker_registry_url = var.docker_registry_url

  # Retrieving secrets from key_vault module
  docker_registry_username = module.key_vault.docker_registry_username_secret_value
  docker_registry_password = module.key_vault.docker_registry_password_secret_value
}

# Azure Cosmos DB Module
module "cosmos_db" {
  source              = "./modules/cosmos_db"
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location
  account_name        = var.account_name
  database_names      = var.database_names
}

# Azure SQL Database Module
module "sql_database" {
  source              = "./modules/sql_db"
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location
  server_name         = var.sql_server_name
  databases           = var.sql_databases
}

# Azure Data Factory Module
module "data_factory" {
  source              = "./modules/data_factory"
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location
  data_factory_name   = var.data_factory_name
}

# Azure Functions Module
module "functions" {
  source              = "./modules/functions"
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location
  function_app_name   = var.function_app_name
}

# Monitoring Module (Azure Monitor & Application Insights)
module "monitoring" {
  source              = "./modules/monitoring"
  resource_group_name = azurerm_resource_group.main.name
  location            = var.location
  log_analytics_name  = var.log_analytics_name
  app_insights_name   = var.app_insights_name
}

# Networking Module
module "networking" {
  source              = "./modules/networking"
  resource_group_name = var.resource_group_name
  location            = var.location
  vnet_name           = var.vnet_name
  address_space       = var.address_space
  subnets             = var.subnets
  tags                = var.tags
}

