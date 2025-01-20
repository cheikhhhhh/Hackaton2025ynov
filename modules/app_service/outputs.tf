output "app_service_urls" {
  description = "Azure App Services Urls"
  value       = [for app in azurerm_app_service.containers : app.default_site_hostname]
}
