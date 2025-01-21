import { Dropdown } from "primereact/dropdown";
import PropTypes from "prop-types";
import "./dropdown.css";

export const DropdownCustom = ({
  value,
  options,
  optionLabel,
  placeholder,
  onChange,
}) => {
  return (
    <Dropdown
      value={value}
      options={options}
      optionLabel={optionLabel}
      placeholder={placeholder}
      onChange={onChange}
      className="dropdownCustom"
    />
  );
};

DropdownCustom.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  optionLabel: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
