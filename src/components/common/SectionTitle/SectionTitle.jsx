import PropTypes from 'prop-types';
import { Title } from './SectionTitle.styled';

export const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
