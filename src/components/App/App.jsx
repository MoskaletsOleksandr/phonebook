import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshCurrentUserThunk } from 'redux/auth/thunks';

const Home = lazy(() => import('components/pages/HomePage'));
const Register = lazy(() => import('components/pages/RegisterPage'));
const Login = lazy(() => import('components/pages/LoginPage'));
const Contacts = lazy(() => import('components/pages/ContactsPage'));
const NotFound = lazy(() => import('components/pages/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshCurrentUserThunk());
  }, [dispatch]);

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
