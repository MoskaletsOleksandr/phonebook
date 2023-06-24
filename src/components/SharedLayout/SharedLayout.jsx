import { Button } from 'components/common/Button';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import {
  Container,
  ContentContainer,
  Header,
  Link,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const { token: isAuth, user } = useSelector(state => state.auth);
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/register" end>
            Register
          </Link>
          {!isAuth ? (
            <Link to="/login" end>
              Login
            </Link>
          ) : (
            <h3>{user.name}</h3>
          )}
          <Link to="/contacts" end>
            Contacts
          </Link>
        </nav>
        <Button>button</Button>
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
