import { ITaskRepository } from '../repositories/ITaskRepository';
import { Task } from '../entities/Task';

export class GetTaskDetail {
  constructor(private readonly taskRepository: ITaskRepository) {}

  async execute(id: string): Promise<Task | null> {
    return await this.taskRepository.getTaskById(id);
  }
}