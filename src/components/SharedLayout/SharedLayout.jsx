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
  Navigation,
  NavWrap,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <Container>
      <Header>
        <Navigation>
          <NavWrap>
            <Link to="/" end>
              Home
            </Link>
            {user && (
              <Link to="/contacts" end>
                Contacts
              </Link>
            )}
          </NavWrap>
          <NavWrap>
            {!user ? (
              <>
                <Link to="/register" end>
                  Register
                </Link>
                <Link to="/login" end>
                  Login
                </Link>
              </>
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
          </NavWrap>
        </Navigation>
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
