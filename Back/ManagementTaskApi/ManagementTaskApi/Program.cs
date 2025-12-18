
using ManagementTask.Application.Interfaces;
using ManagementTask.Application.Tasks.GetTasks;
using ManagementTask.Infrastructure.Data.Connection;
using ManagementTask.Infrastructure.Data.Repositories;
using Microsoft.AspNetCore.Connections;

namespace ManagementTaskApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddScoped<GetTasksHandler>();
            builder.Services.AddScoped<IDbConnectionFactory>(sp =>
            {
                var cs = builder.Configuration.GetConnectionString("DefaultConnection");
                return new SqlConnectionFactory(cs!);
            });
            builder.Services.AddScoped<ITaskRepository, TaskRepository>();


            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
