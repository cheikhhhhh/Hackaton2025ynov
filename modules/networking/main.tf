# Virtual Network
resource "azurerm_virtual_network" "main" {
  name                = var.vnet_name
  location            = var.location
  resource_group_name = var.resource_group_name
  address_space       = var.address_space

  tags = var.tags
}

# VNet Subnets
resource "azurerm_subnet" "subnets" {
  count               = length(var.subnets)
  name                = var.subnets[count.index].name
  resource_group_name = var.resource_group_name
  virtual_network_name = azurerm_virtual_network.main.name
  address_prefixes    = [var.subnets[count.index].address_prefix]
}
