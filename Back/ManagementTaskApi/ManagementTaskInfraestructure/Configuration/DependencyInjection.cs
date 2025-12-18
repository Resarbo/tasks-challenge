using ManagementTask.Infrastructure.Data.Connection;
using ManagementTask.Infrastructure.Data.Repositories;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace ManagementTask.Infrastructure.Configuration
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(
            this IServiceCollection services,
            string connectionString)
        {
            services.AddScoped<IDbConnectionFactory>(
                _ => new SqlConnectionFactory(connectionString));

            return services;
        }
    }
}
