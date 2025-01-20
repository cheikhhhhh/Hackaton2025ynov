resource "azurerm_key_vault" "main" {
  name                        = var.key_vault_name
  location                    = var.location
  resource_group_name         = var.resource_group_name
  sku_name                    = "standard"
  tenant_id                   = data.azurerm_client_config.current.tenant_id
  purge_protection_enabled    = true
  #soft_delete_enabled         = true
}

resource "azurerm_key_vault_secret" "docker_registry_username" {
  name         = "docker-registry-username"
  value        = var.docker_registry_username
  key_vault_id = azurerm_key_vault.main.id
}

resource "azurerm_key_vault_secret" "docker_registry_password" {
  name         = "docker-registry-password"
  value        = var.docker_registry_password
  key_vault_id = azurerm_key_vault.main.id
}
