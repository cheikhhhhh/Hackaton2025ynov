# VNet ID
output "vnet_id" {
  description = "Virtual Network ID"
  value       = azurerm_virtual_network.main.id
}

# Subnets
output "subnet_names" {
  description = "Subnets Names"
  value       = azurerm_subnet.subnets[*].name
}

# Subnet IDs List
output "subnet_ids" {
  description = "Subnet IDs List"
  value       = azurerm_subnet.subnets[*].id
}

# Subnets Address prefixes
output "subnet_address_prefixes" {
  description = "Subnets Address prefixes"
  value       = azurerm_subnet.subnets[*].address_prefixes
}
