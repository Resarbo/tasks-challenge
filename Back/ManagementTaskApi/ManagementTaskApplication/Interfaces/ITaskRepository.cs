using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Task = ManagementTask.Domain.Entities.Task;

namespace ManagementTask.Application.Interfaces
{
    public interface ITaskRepository
    {
        IEnumerable<Task> GetTasks(int? statusId, int? priorityId);
    }
}
