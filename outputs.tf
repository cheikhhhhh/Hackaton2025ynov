output "resource_group_name" {
  value = azurerm_resource_group.main.name
}

output "app_service_urls" {
  value = [for app in azurerm_app_service.containers : app.default_site_hostname]
}

output "cosmos_db_connection_strings" {
  value = module.cosmos_db.connection_strings
}

output "sql_db_connection_strings" {
  value = module.sql_database.connection_strings
}

output "data_factory_name" {
  value = module.data_factory.data_factory_name
}

output "function_app_urls" {
  value = module.functions.urls
}