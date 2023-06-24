import PropTypes from 'prop-types';
import { LabelStyled } from './Label.styled';

export const Label = ({ children }) => {
  return <LabelStyled>{children}</LabelStyled>;
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
};
