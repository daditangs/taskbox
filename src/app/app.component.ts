import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-storybook-angular-template';
  tasks = [
    {
      id: '1',
      title: 'Task 1',
      state: 'TASK_PINNED'
    },
    {
      id: '2',
      title: 'Task 2',
      state: 'TASK_ARCHIVED'
    }
  ];

  onPin(id) {
    this.tasks = this.tasks.map(task => {
      if (task.id === id && task.state === 'TASK_PINNED') {
        return { ...task, state: 'TASK_INBOX'}
      }
      if (task.id === id && task.state === 'TASK_INBOX') {
        return { ...task, state: 'TASK_PINNED'}
      }
      return { ...task }
    });
  }

  onArchive(id) {
    this.tasks = this.tasks.map(task => {
      if (task.id === id && (task.state === 'TASK_ARCHIVED')) {
        return { ...task, state: 'TASK_INBOX'}
      }
      if (task.id === id && task.state === 'TASK_PINNED') {
        return { ...task, state: 'TASK_ARCHIVED'}
      }
      return { ...task }
    });
  }
}
