using ManagementTask.Application.Tasks.GetTasks;
using Microsoft.AspNetCore.Mvc;

namespace ManagementTask.Api.Controllers
{
    [ApiController]
    [Route("api/tasks")]
    public sealed class TasksController : ControllerBase
    {
        private readonly GetTasksHandler _handler;

        public TasksController(GetTasksHandler handler)
        {
            _handler = handler;
        }

        [HttpGet]
        public IActionResult Get(
            [FromQuery] int? statusId,
            [FromQuery] int? priorityId)
        {
            var query = new GetTasksQuery(statusId, priorityId);
            var result = _handler.Handle(query);

            return Ok(result);
        }
    }
}
