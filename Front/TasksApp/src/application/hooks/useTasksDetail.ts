import { useEffect, useState } from 'react';
import { Task } from '../../domain/entities/Task';
import { GetTaskDetail } from '../../domain/usecases/GetTaskDetail';
import { TaskApiRepository } from '../../infraestructure/api/TaskApiRepository';

export function useTaskDetail(taskId: string) {
  const [task, setTask] = useState<Task | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const repository = new TaskApiRepository();
  const getTaskDetailUseCase = new GetTaskDetail(repository);

  useEffect(() => {
    async function loadTask() {
      try {
        setLoading(true);
        setError(null);

        const result = await getTaskDetailUseCase.execute(taskId);
        setTask(result);
      } catch {
        setError('Error al cargar la tarea');
      } finally {
        setLoading(false);
      }
    }

    loadTask();
  }, [taskId]);

  return {
    task,
    loading,
    error,
  };
}
