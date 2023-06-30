import { SectionTitle } from 'components/common/SectionTitle';
import { LoginForm } from 'components/LoginForm.jsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

const LoginPage = () => {
  const { user } = useSelector(selectAuth);
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate('/contacts');
  }, [user, navigate]);
  return (
    <>
      <SectionTitle title="LoginPage"></SectionTitle>
      <LoginForm />
    </>
  );
};

export default LoginPage;
