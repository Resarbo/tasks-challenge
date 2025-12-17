USE TasksChallenge
GO
-- Estados
INSERT INTO TaskStatus (Name)
VALUES ('Pending'), ('In Progress'), ('Completed');

-- Prioridades
INSERT INTO TaskPriority (Name)
VALUES ('Low'), ('Medium'), ('High');

-- Tareas de ejemplo
INSERT INTO Task (Title, Description, StatusId, PriorityId)
VALUES
('Comprar víveres', 'Comprar frutas y verduras', 1, 2),
('Preparar presentación', 'Presentación para reunión de equipo', 2, 3),
('Enviar reporte', 'Reporte semanal al jefe', 3, 1);
