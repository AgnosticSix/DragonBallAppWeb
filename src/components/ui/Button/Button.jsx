import PropTypes from "prop-types";
import { Button } from "primereact/button";
import "./button.css";

export function ButtonCustom({ onClick, text, label, type }) {
  return (
    <Button className="btnCustom" onClick={onClick} label={label} type={type}>
      {text}
    </Button>
  );
}

ButtonCustom.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
};
