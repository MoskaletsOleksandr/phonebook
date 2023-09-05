import { SectionTitle } from 'components/common/SectionTitle';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

const ProfilePage = () => {
  const { user } = useSelector(selectAuth);
  return (
    <>
      <SectionTitle title="Profile" />
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <img
        src={
          user.avatarURL.includes('gravatar')
            ? user.avatarURL
            : `http://localhost:8000/${user.avatarURL}`
        }
        alt="User avatar"
        width="250"
        height="250"
      />
      <Link to="update">Update profile</Link>
    </>
  );
};

export default ProfilePage;
