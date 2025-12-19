import { ITaskRepository, TaskFilters } from '../repositories/ITaskRepository';
import { Task } from '../entities/Task';

export class GetTasks {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async execute(filters?: TaskFilters): Promise<Task[]> {
    return await this.taskRepository.getTasks(filters);
  }
}