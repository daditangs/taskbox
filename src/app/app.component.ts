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
    console.log('id: ', id);
    this.tasks = this.tasks.map(task => ({...task, state: id === task.id ? 'TASK_PINNED' : task.state}));
  }

  onArchiveTask(id) {
    console.log('id: ', id);
    this.tasks = this.tasks.map(task => ({...task, state: id === task.id ? 'TASK_ARCHIVED' : task.state}));
  }
}
