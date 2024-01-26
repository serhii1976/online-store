import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignUp from 'pages/SignUp/SignUp';
import SignIn from 'pages/SignIn/SignIn';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};
