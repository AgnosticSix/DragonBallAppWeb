import PropTypes from "prop-types";
import "./label.css";

export const Label = ({ htmlFor, text, children }) => {
  return (
    <>
      <label className="label" htmlFor={htmlFor}>
        {text}
      </label>
      {children}
    </>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
