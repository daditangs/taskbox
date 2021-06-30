import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { InboxScreenComponent } from './components/inbox-screen.component';
import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { PureTaskListComponent } from './components/pure-task-list.component';
import { TaskListComponent } from './components/task-list.component';
import { TaskComponent } from './components/task.component';

describe('App', () => {
  test('should render the App component', async () => {
    const { getByText } = await render(AppComponent, {
      declarations: [PureInboxScreenComponent, TaskListComponent, PureTaskListComponent, TaskComponent, InboxScreenComponent],
    });
    expect(getByText('taskbox'));
  });
})