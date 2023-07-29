import { NavigationWrapper } from 'components/Navigation/Navigation.styled';
import { Link, NavMenuStyled } from './NavMenu.styled';

export const NavMenu = () => {
  return (
    <NavMenuStyled>
      <NavigationWrapper>
        <Link to="/register" end>
          Register
        </Link>
        <Link to="/login" end>
          Login
        </Link>
      </NavigationWrapper>
    </NavMenuStyled>
  );
};
