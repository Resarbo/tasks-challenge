import { ITaskRepository, TaskFilters } from '../../domain/repositories/ITaskRepository';
import { Task } from '../../domain/entities/Task';
import { httpGet } from './httpClient';
import { mapPriorityToId, mapStatusToId } from './taskMappers';

type TaskApiDto = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
};

export class TaskApiRepository implements ITaskRepository {

  async getTasks(filters?: TaskFilters): Promise<Task[]> {
    const statusId = mapStatusToId(filters?.status);
    const priorityId = mapPriorityToId(filters?.priority);

    const queryParams = new URLSearchParams();

    if (statusId) queryParams.append('statusId', statusId.toString());
    if (priorityId) queryParams.append('priorityId', priorityId.toString());

    const query = queryParams.toString();
    const url = `/tasks${query ? `?${query}` : ''}`;

    const data = await httpGet<TaskApiDto[]>(url);

    return data.map(this.mapToDomain);
  }

  async getTaskById(id: string): Promise<Task | null> {
    const data = await httpGet<TaskApiDto>(`/tasks/${id}`);
    return data ? this.mapToDomain(data) : null;
  }

  private mapToDomain(dto: TaskApiDto): Task {
    return {
      id: dto.id,
      title: dto.title,
      description: dto.description,
      status: dto.status as any,
      priority: dto.priority as any,
    };
  }
}
