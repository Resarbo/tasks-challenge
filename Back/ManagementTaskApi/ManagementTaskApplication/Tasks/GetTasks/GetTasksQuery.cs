using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementTask.Application.Tasks.GetTasks
{
    public sealed record GetTasksQuery(
        int? StatusId,
        int? PriorityId
    );
}
