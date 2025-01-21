import PropTypes from "prop-types";
import { InputText } from "primereact/inputtext";
import "./input.css";

export const Input = ({ id, value, placeholder, onChange }) => {
  return (
    <InputText
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className='inputCustom'
    />
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
