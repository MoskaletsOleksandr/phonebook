import PropTypes from 'prop-types';
import { InputStyled } from './Input.styled';

export const Input = ({
  value,
  onChange,
  type,
  name,
  pattern,
  title,
  required,
}) => {
  return (
    <InputStyled
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      pattern={pattern}
      title={title}
      required={required}
    ></InputStyled>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
};
