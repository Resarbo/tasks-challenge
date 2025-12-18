using ManagementTask.Application.Interfaces;
using ManagementTask.Application.Tasks.GetTasks;
using ManagementTask.Domain.Entities;
using Moq;
using Task = ManagementTask.Domain.Entities.Task;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TaskStatus = ManagementTask.Domain.Entities.TaskStatus;
using FluentAssertions;

namespace ManagementTask.Tests.Application.Tasks
{
    public sealed class GetTasksHandlerTests
    {
        [Fact]
        public void Handle_Should_Return_Tasks_When_Repository_Returns_Data()
        {
            // Arrange
            var repositoryMock = new Mock<ITaskRepository>();

            var domainTasks = new List<Task>
            {
                new(
                    id: 1,
                    title: "Task 1",
                    description: "Desc",
                    status: new TaskStatus(1, "Open"),
                    priority: new TaskPriority(1, "High"),
                    createdAt: DateTime.UtcNow
                )
            };

            repositoryMock
                .Setup(r => r.GetTasks(null, null))
                .Returns(domainTasks);

            var handler = new GetTasksHandler(repositoryMock.Object);

            var query = new GetTasksQuery(null, null);

            // Act
            var result = handler.Handle(query);

            // Assert
            result.Should().HaveCount(1);
            result.First().Title.Should().Be("Task 1");
            result.First().Status.Should().Be("Open");
            result.First().Priority.Should().Be("High");
        }
    }
}
