import PropTypes from "prop-types";
import "./label.css";

export const Label = ({ htmlFor, name, children }) => {
  return (
    <>
      <label className="label" htmlFor={htmlFor}>
        {name}
      </label>
      {children}
    </>
  );
};

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
