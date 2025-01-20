# Resource group name
variable "resource_group_name" {
  description = "Resource group name"
  type        = string
}

# Azure region
variable "location" {
  description = "Azure region"
  type        = string
}

# App Service Plan
variable "app_service_plan" {
  description = "Azure App Service Plan"
  type        = string
}

# Apps names
variable "app_names" {
  description = "Application names"
  type        = list(string)
}

# Container images
variable "container_images" {
  description = "Docker images"
  type        = list(string)
}

# Docker Registry URL
variable "docker_registry_url" {
  description = "Docker Registry URL"
  type        = string
}

# Secrets recovered from Key Vault module
variable "docker_registry_username" {
  description = "Docker Registry Name"
  type        = string
}

variable "docker_registry_password" {
  description = "Docker Registry Password"
  type        = string
}
