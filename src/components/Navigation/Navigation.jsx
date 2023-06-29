import { useSelector } from 'react-redux';
import { Link, NavigationStyled } from './Navigation.styled';

export const Navigation = ({ children }) => {
  const { user } = useSelector(state => state.auth);

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
