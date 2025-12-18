using ManagementTask.Application.DTO;
using ManagementTask.Application.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementTask.Application.Tasks.GetTasks
{
    public sealed class GetTasksHandler
    {
        private readonly ITaskRepository _taskRepository;

        public GetTasksHandler(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }

        public IEnumerable<TaskDto> Handle(GetTasksQuery query)
        {
            var tasks = _taskRepository.GetTasks(
                query.StatusId,
                query.PriorityId
            );

            return tasks.Select(task => new TaskDto(
                task.Id,
                task.Title,
                task.Description,
                task.Status.Name,
                task.Priority.Name,
                task.CreatedAt
            ));
        }
    }
}
