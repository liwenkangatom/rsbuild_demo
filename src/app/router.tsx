import { TodosPage } from '@/features/todos/containers/todos-page/TodosPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <TodosPage />,
  },
]);
