import { Navigation } from 'components/Navigation';
import { NavMenu } from 'components/NavMenu';
import { UserMenu } from 'components/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';
import { Container, ContentContainer, Header } from './SharedLayout.styled';

export const SharedLayout = () => {
  const { user } = useSelector(selectAuth);

  return (
    <Container>
      <Header>
        <Navigation>{!user ? <NavMenu /> : <UserMenu />}</Navigation>
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
