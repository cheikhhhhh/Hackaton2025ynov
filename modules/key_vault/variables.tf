# Azure Key Vault
variable "key_vault_name" {
  description = "Azure Key Vault Name"
  type        = string
}

# Azure Region
variable "location" {
  description = "Azure region"
  type        = string
}

# Azure Resource Group
variable "resource_group_name" {
  description = "Resource group name"
  type        = string
}

# Docker credentials
variable "docker_registry_username" {
  description = "Docker registry username"
  type        = string
}

variable "docker_registry_password" {
  description = "Docker registry password"
  type        = string
}
