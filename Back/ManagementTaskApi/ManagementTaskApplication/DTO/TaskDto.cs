using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementTask.Application.DTO
{
    public sealed record TaskDto(
        int Id,
        string Title,
        string? Description,
        string Status,
        string Priority,
        DateTime CreatedAt
    );
}
