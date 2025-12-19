import { Task } from '../entities/Task';
import { TaskStatus } from '../entities/TaskStatus';
import { TaskPriority } from '../entities/TaskPriority';

export interface TaskFilters {
  status?: TaskStatus;
  priority?: TaskPriority;
}

export interface ITaskRepository {
  getTasks(filters?: TaskFilters): Promise<Task[]>;
  getTaskById(id: string): Promise<Task | null>;
}