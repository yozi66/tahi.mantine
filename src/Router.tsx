import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { TechnologyPage } from './pages/Technology.page';
import { TodolistPage } from './pages/Todolist.page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TechnologyPage />,
  },
  {
    path: '/list',
    element: <TodolistPage />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
