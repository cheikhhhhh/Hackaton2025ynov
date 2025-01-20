# Azure App Service Plan
resource "azurerm_app_service_plan" "main" {
  name                = var.app_service_plan
  location            = var.location
  resource_group_name = var.resource_group_name
  kind                = "Linux"
  reserved            = true

  sku {
    tier = "PremiumV2"
    size = "P1v2"
  }
}

# Azure App Service Containers
resource "azurerm_app_service" "containers" {
  count               = length(var.app_names)
  name                = var.app_names[count.index]
  location            = var.location
  resource_group_name = var.resource_group_name
  app_service_plan_id = azurerm_app_service_plan.main.id

  # Container configuration
  site_config {
    linux_fx_version = "DOCKER|${var.container_images[count.index]}"
  }

  # App Settings with secrets transmitted from the Key Vault module
  app_settings = {
    WEBSITES_ENABLE_APP_SERVICE_STORAGE = "false"
    DOCKER_REGISTRY_SERVER_URL          = var.docker_registry_url
    DOCKER_REGISTRY_SERVER_USERNAME     = var.docker_registry_username
    DOCKER_REGISTRY_SERVER_PASSWORD     = var.docker_registry_password
  }
}
