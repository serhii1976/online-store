import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
