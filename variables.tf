# Azure region
variable "location" {
  description = "Azure region"
  type        = string
  default     = "North Europe"
}

# Azure Resource Group
variable "resource_group_name" {
  description = "Azure Resource Group"
  type        = string
  default     = "azure-infra-rg"
}

# App Service configuration
variable "app_names" {
  description = "App Service"
  type        = list(string)
  default     = ["web-app", "mobile-app"]
}

variable "container_images" {
  description = "Docker images"
  type        = list(string)
  default     = ["myregistry.azurecr.io/web-app:latest", "myregistry.azurecr.io/mobile-app:latest"]
}

variable "docker_registry_url" {
  description = "Docker Registry URL"
  type        = string
  default     = "https://myregistry.azurecr.io"
}

# Docker Registry credentials
variable "docker_registry_username" {
  description = "Docker Registry Username"
  type        = string
  sensitive   = true
}

variable "docker_registry_password" {
  description = "Docker Registry Password"
  type        = string
  sensitive   = true
}

# Key Vault configuration
variable "key_vault_name" {
  description = "Azure Key Vault"
  type        = string
}

# Virtual Network Configuration
variable "vnet_name" {
  description = "Virtual Network"
  type        = string
  default     = "my-vnet"
}

variable "address_space" {
  description = "VN address space"
  type        = list(string)
  default     = ["10.0.0.0/16"]
}

variable "subnets" {
  description = "Subnets config"
  type = list(object({
    name           = string
    address_prefix = string
  }))
  default = [
    { name = "web", address_prefix = "10.0.1.0/24" },
    { name = "data", address_prefix = "10.0.2.0/24" },
    { name = "functions", address_prefix = "10.0.3.0/24" }
  ]
}
