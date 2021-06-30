export interface Task {
    id: string;
    title: string;
    state: 'TASK_PINNED' | 'TASK_ARCHIVED' | 'TASK_INBOX';
  }