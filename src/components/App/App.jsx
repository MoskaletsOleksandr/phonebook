import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { refreshCurrentUserThunk } from 'redux/auth/thunks';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import { AppContainer } from './App.styled';

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
    <AppContainer>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AppContainer>
  );
};

export default App;
