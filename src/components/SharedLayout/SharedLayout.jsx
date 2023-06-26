import { Button } from 'components/common/Button';
import { Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logoutThunk } from 'redux/auth/thunks';
import {
  Container,
  ContentContainer,
  Header,
  Link,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log('click');
    dispatch(logoutThunk());
  };

  return (
    <Container>
      <Header>
        <nav>
          {/* <Link to="/" end>
            Home
          </Link> */}
          <Link to="/register" end>
            Register
          </Link>
          {!user ? (
            <Link to="/login" end>
              Login
            </Link>
          ) : (
            <>
              <h3>{user.name}</h3>
              <Button
                onClick={() => {
                  handleLogout();
                }}
              >
                Logout
              </Button>
            </>
          )}
          <Link to="/contacts" end>
            Contacts
          </Link>
        </nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </Suspense>
      </main>
    </Container>
  );
};
