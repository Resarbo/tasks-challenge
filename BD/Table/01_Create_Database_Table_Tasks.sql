CREATE DATABASE TasksChallenge
GO
USE TasksChallenge
GO
-- Catálogo de estados
CREATE TABLE TaskStatus (
    Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    UpdatedAt DATETIME2 NULL,
)
GO
-- Catálogo de prioridades
CREATE TABLE TaskPriority (
    Id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
    Name NVARCHAR(50) NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    UpdatedAt DATETIME2 NULL,
)
GO
-- Tabla principal de tareas
CREATE TABLE Task (
    Id INT IDENTITY(1,1) NOT NULL,
    Title NVARCHAR(200) NOT NULL,
    Description NVARCHAR(1000) NULL,
    StatusId INT NOT NULL,
    PriorityId INT NOT NULL,
    CreatedAt DATETIME2 NOT NULL DEFAULT GETUTCDATE(),
    UpdatedAt DATETIME2 NULL,

    CONSTRAINT PK_Task PRIMARY KEY (Id),
    CONSTRAINT FK_Task_Status FOREIGN KEY (StatusId) REFERENCES TaskStatus(Id),
    CONSTRAINT FK_Task_Priority FOREIGN KEY (PriorityId) REFERENCES TaskPriority(Id)
)
