import PropTypes from 'prop-types';
import { FormStyled } from './Form.styled';

export const Form = ({ children, onSubmit }) => {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
};

Form.propTypes = {
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
