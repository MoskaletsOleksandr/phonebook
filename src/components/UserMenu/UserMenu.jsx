import { NavigationWrapper } from 'components/Navigation/Navigation.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/thunks';
import { selectAuth } from 'redux/selectors';
import { UserEmail, UserMenuButton, UserMenuWrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      Notify.success('You have successfully logged out');
    } catch (error) {
      Notify.failure('Logout failed. Please try again.');
    }
  };

  return (
    <UserMenuWrapper>
      <NavigationWrapper>
        <UserEmail>{user.email}</UserEmail>
        <UserMenuButton
          onClick={() => {
            handleLogout();
          }}
        >
          Logout
        </UserMenuButton>
      </NavigationWrapper>
    </UserMenuWrapper>
  );
};
