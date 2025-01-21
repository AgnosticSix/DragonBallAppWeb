import { Checkbox } from "primereact/checkbox";
import PropTypes from "prop-types";
import './checkbox.css';

export const CheckboxCustom = ({ onChange, isChecked }) => {
  return <Checkbox checked={isChecked} onChange={onChange} />;
};

CheckboxCustom.propTypes = {
  onChange: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired,
};
