USE TasksChallenge
GO
CREATE PROCEDURE SP_Task_Get_Info
    @StatusId INT = NULL,
    @PriorityId INT = NULL
AS
BEGIN
    SELECT 
        t.Id,
        t.Title,
        t.Description,
        s.Name AS Status,
        p.Name AS Priority,
        t.CreatedAt
    FROM Task t
    INNER JOIN TaskStatus s ON t.StatusId = s.Id
    INNER JOIN TaskPriority p ON t.PriorityId = p.Id
    WHERE
        (@StatusId IS NULL OR t.StatusId = @StatusId)
        AND (@PriorityId IS NULL OR t.PriorityId = @PriorityId)
    ORDER BY t.CreatedAt DESC
END