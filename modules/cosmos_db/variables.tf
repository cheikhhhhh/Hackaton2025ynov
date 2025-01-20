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

# Cosmos DB account name
variable "account_name" {
  description = "Cosmos DB account name"
  type        = string
}

# Database List
variable "database_names" {
  description = "Database List"
  type        = list(string)
}

# Consistency Level
variable "consistency_level" {
  description = "Consistency Level"
  type        = string
  default     = "Session"
}

# Cosmos DB offer
variable "offer_type" {
  description = "Cosmos DB offer"
  type        = string
  default     = "Standard"
}

# Multi-region configuration
variable "enable_multiple_write_locations" {
  description = "Multi-region configuration"
  type        = bool
  default     = false
}

# Tags
variable "tags" {
  description = "Cosmos DB tag map"
  type        = map(string)
  default     = {}
}
