# Resource group name
variable "resource_group_name" {
  description = "# Resource group name"
  type        = string
}

# Azure region
variable "location" {
  description = "Azure region"
  type        = string
}

# SQL Params
variable "sql_server_name" {
  description = "value"
  type = string
}

variable "sql_databases" {
  description = "value"
  type = string
}