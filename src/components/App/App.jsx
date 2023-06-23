import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const Home = lazy(() => import('components/pages/HomePage'));
const Register = lazy(() => import('components/pages/RegisterPage'));
const Login = lazy(() => import('components/pages/LoginPage'));
const Contacts = lazy(() => import('components/pages/ContactsPage'));
const NotFound = lazy(() => import('components/pages/NotFoundPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
