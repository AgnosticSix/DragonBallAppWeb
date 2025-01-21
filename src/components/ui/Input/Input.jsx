import PropTypes from "prop-types";
import { InputText } from "primereact/inputtext";
import "./input.css";

export const Input = ({ id, name, value, placeholder, onChange, isReadOnly }) => {
  return (
    <InputText
      id={id}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='inputCustom'
      readOnly={isReadOnly || false}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  isReadOnly: PropTypes.bool,
};
