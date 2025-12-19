import { useEffect, useState } from 'react';
import { Task } from '../../domain/entities/Task';
import { TaskFilters } from '../../domain/repositories/ITaskRepository';
import { GetTasks } from '../../domain/usecases/GetTask';
import { TaskApiRepository } from '../../infraestructure/api/TaskApiRepository';

export function useTasks(filters?: TaskFilters) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const repository = new TaskApiRepository();
  const getTasksUseCase = new GetTasks(repository);

  const loadTasks = async () => {
    try {
      setLoading(true);
      setError(null);

      const result = await getTasksUseCase.execute(filters);
      setTasks(result);
    } catch (err) {
      setError('Error al cargar tareas');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [JSON.stringify(filters)]);

  return {
    tasks,
    loading,
    error,
    reload: loadTasks,
  };
}
