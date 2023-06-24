import { SectionTitle } from 'components/common/SectionTitle';
import { LoginForm } from 'components/LoginForm.jsx';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const isAuth = useSelector(state => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    isAuth && navigate('/contacts');
    // isAuth && Notification
  }, [isAuth, navigate]);
  return (
    <>
      <SectionTitle title="LoginPage"></SectionTitle>
      <LoginForm />
    </>
  );
};

export default LoginPage;
