using ManagementTask.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Task = ManagementTask.Domain.Entities.Task;
using TaskStatus = ManagementTask.Domain.Entities.TaskStatus;

namespace ManagementTask.Infrastructure.Data.Mappings
{
    internal static class TaskDapperMapper
    {
        public static Task ToDomain(TaskDbRow row)
        {
            var status = new TaskStatus(0, row.Status);
            var priority = new TaskPriority(0, row.Priority);

            return new Task(
                row.Id,
                row.Title,
                row.Description,
                status,
                priority,
                row.CreatedAt
            );
        }
    }
}
