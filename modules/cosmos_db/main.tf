# Compte Cosmos DB
resource "azurerm_cosmosdb_account" "main" {
  name                = var.account_name
  location            = var.location
  resource_group_name = var.resource_group_name
  offer_type          = var.offer_type
  kind                = "GlobalDocumentDB"

  consistency_policy {
    consistency_level = var.consistency_level
  }

  geo_location {
    location          = var.location
    failover_priority = 0
  }

  tags = var.tags
}

# Cosmos DB databases
resource "azurerm_cosmosdb_sql_database" "databases" {
  count               = length(var.database_names)
  name                = var.database_names[count.index]
  resource_group_name = var.resource_group_name
  account_name        = azurerm_cosmosdb_account.main.name
}
