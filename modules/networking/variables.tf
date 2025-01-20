# Nom du groupe de ressources
variable "resource_group_name" {
  description = "The name of the resource group where the VNet will be created."
  type        = string
}

# Région Azure
variable "location" {
  description = "The Azure region where the VNet will be created."
  type        = string
}

# Nom du VNet
variable "vnet_name" {
  description = "The name of the Virtual Network."
  type        = string
}

# Plage d'adresses du VNet
variable "address_space" {
  description = "The address space for the Virtual Network."
  type        = list(string)
  default     = ["10.0.0.0/16"]
}

# Configuration des Subnets
variable "subnets" {
  description = "List of subnets to create within the Virtual Network. Each subnet should have a name and an address_prefix."
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

# Balises
variable "tags" {
  description = "A map of tags to assign to the networking resources."
  type        = map(string)
  default     = {}
}
