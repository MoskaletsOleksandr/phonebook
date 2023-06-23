import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ children, onClick, disabled }) => {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
