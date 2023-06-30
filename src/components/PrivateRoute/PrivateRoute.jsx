import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const { token } = useSelector(selectAuth);
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
