using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ManagementTask.Domain.Entities
{
    public class Task
    {
        public int Id { get; }
        public string Title { get; }
        public string? Description { get; }
        public TaskStatus Status { get; }
        public TaskPriority Priority { get; }
        public DateTime CreatedAt { get; }

        public Task(
            int id,
            string title,
            string? description,
            TaskStatus status,
            TaskPriority priority,
            DateTime createdAt)
        {
            Id = id;
            Title = title;
            Description = description;
            Status = status;
            Priority = priority;
            CreatedAt = createdAt;
        }
    }
}
