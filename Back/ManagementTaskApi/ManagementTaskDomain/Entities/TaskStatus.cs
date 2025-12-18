using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManagementTask.Domain.Entities
{
    public class TaskStatus
    {
        public int Id { get; }
        public string Name { get; }

        public TaskStatus(int id, string name)
        {
            Id = id;
            Name = name;
        }
    }
}
