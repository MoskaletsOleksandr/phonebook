import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { Link, NavigationStyled, NavigationWrapper } from './Navigation.styled';

export const Navigation = ({ children }) => {
  const { user } = useSelector(selectAuth);

  return (
    <NavigationStyled>
      <NavigationWrapper>
        <Link to="/" end>
          Home
        </Link>
        {user && (
          <Link to="/contacts" end>
            Contacts
          </Link>
        )}
      </NavigationWrapper>
      {children}
    </NavigationStyled>
  );
};
