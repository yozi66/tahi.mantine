import App from './App';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { TechnologyPage } from './pages/Technology.page';
import { TodolistPage } from './pages/Todolist.page';
import { Error404Page } from './pages/Error.404.page';

export function TahiRouter() {
  return (
    <HashRouter>
      <App/>
    </HashRouter>
  );  
}
export function TahiRoutes() {
  return (
    <Routes>
      <Route path="/technology" element={<TechnologyPage />} />
      <Route path="/" element={<TodolistPage />} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  );
}
