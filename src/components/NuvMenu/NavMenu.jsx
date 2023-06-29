import { Link, NavMenuStyled } from './NavMenu.styled';

export const NavMenu = () => {
  return (
    <NavMenuStyled>
      <Link to="/register" end>
        Register
      </Link>
      <Link to="/login" end>
        Login
      </Link>
    </NavMenuStyled>
  );
};
