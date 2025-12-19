import { TaskStatus } from '../../domain/entities/TaskStatus';
import { TaskPriority } from '../../domain/entities/TaskPriority';

export function mapStatusToId(status?: TaskStatus): number | undefined {
  switch (status) {
    case TaskStatus.PENDING:
      return 1;
    case TaskStatus.IN_PROGRESS:
      return 2;
    case TaskStatus.DONE:
      return 3;
    default:
      return undefined;
  }
}

export function mapPriorityToId(priority?: TaskPriority): number | undefined {
  switch (priority) {
    case TaskPriority.LOW:
      return 1;
    case TaskPriority.MEDIUM:
      return 2;
    case TaskPriority.HIGH:
      return 3;
    default:
      return undefined;
  }
}
