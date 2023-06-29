import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/thunks';
import { UserEmail, UserMenuButton, UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
  };

  return (
    <UserMenuWrapper>
      <UserEmail>{user.email}</UserEmail>
      <UserMenuButton
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </UserMenuButton>
    </UserMenuWrapper>
  );
};
