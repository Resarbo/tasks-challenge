using Dapper;
using ManagementTask.Application.Interfaces;
using ManagementTask.Infrastructure.Data.Connection;
using ManagementTask.Infrastructure.Data.Mappings;
using ManagementTask.Infrastructure.Queries;
using System.Data;
using Task = ManagementTask.Domain.Entities.Task;

namespace ManagementTask.Infrastructure.Data.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly IDbConnectionFactory _connectionFactory;

        public TaskRepository(IDbConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        public IEnumerable<Task> GetTasks(int? statusId, int? priorityId)
        {
            using IDbConnection connection = _connectionFactory.CreateConnection();

            var parameters = new
            {
                StatusId = statusId,
                PriorityId = priorityId
            };

            var rows = connection.Query<TaskDbRow>(
                TaskQueries.GetTasks,
                parameters,
                commandType: CommandType.StoredProcedure
            );

            return rows.Select(TaskDapperMapper.ToDomain);
        }
    }
}
