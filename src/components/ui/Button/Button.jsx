import PropTypes from "prop-types";

export function Button({ onClick }) {
  return (
    <button className="btn" onClick={onClick}>Button</button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func
};
