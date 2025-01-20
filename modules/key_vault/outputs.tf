output "key_vault_id" {
  value = azurerm_key_vault.main.id
}

output "docker_registry_username_secret_value" {
  description = "Docker registry username secret"
  value       = azurerm_key_vault_secret.docker_registry_username.value
}

output "docker_registry_password_secret_value" {
  description = "Docker registry password secret"
  value       = azurerm_key_vault_secret.docker_registry_password.value
}