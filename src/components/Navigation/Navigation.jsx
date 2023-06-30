import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import { Link, NavigationStyled } from './Navigation.styled';

export const Navigation = ({ children }) => {
  const { user } = useSelector(selectAuth);

  return (
    <NavigationStyled>
      <Link to="/" end>
        Home
      </Link>
      {user && (
        <Link to="/contacts" end>
          Contacts
        </Link>
      )}
      {children}
    </NavigationStyled>
  );
};
