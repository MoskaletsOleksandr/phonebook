import { Loader } from 'components/common/Loader';
import { Navigation } from 'components/Navigation';
import { NavMenu } from 'components/NavMenu';
import { UserMenu } from 'components/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';
import {
  Container,
  ContentContainer,
  Header,
  Main,
} from './SharedLayout.styled';

export const SharedLayout = () => {
  const { user } = useSelector(selectAuth);

  return (
    <Container>
      <Header>
        <Navigation>{!user ? <NavMenu /> : <UserMenu />}</Navigation>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </Suspense>
      </Main>
    </Container>
  );
};
