import { SectionTitle } from 'components/common/SectionTitle';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/">Go to Home</Link>
      <SectionTitle title="NotFound" />
    </div>
  );
};

export default NotFoundPage;
