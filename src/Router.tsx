import { createHashRouter, RouterProvider } from 'react-router-dom';
import { TechnologyPage } from './pages/Technology.page';
import { TodolistPage } from './pages/Todolist.page';
import { Error404Page } from './pages/Error.404.page';

const router = createHashRouter([
  {
    path: '/technology',
    element: <TechnologyPage />,
  },
  {
    path: '/',
    element: <TodolistPage />,
  },
  {
    path: '*',
    element: <Error404Page />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
