# Cosmos DB account ID
output "cosmosdb_account_id" {
  description = "Cosmos DB account ID"
  value       = azurerm_cosmosdb_account.main.id
}

# Cosmos DB account name
output "cosmosdb_account_name" {
  description = "Cosmos DB account name"
  value       = azurerm_cosmosdb_account.main.name
}

# Connection strings
output "cosmosdb_connection_strings" {
  description = "Cosmos DB Connection strings"
  value       = azurerm_cosmosdb_account.main.connection_strings
}

# Databases List
output "cosmosdb_database_names" {
  description = "Cosmos DB databases"
  value       = azurerm_cosmosdb_sql_database.databases[*].name
}
