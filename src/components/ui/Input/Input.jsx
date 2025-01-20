import PropTypes from "prop-types";

export const Input = ({ name, type, placeholder, value, onChange }) => {
  return (
    <input
      className="input"
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
    ></input>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
