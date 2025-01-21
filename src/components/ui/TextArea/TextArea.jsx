import PropTypes from "prop-types";
import "./textArea.css";

export const TextArea = ({ name, value, onChange, rows, cols, isReadOnly }) => {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      cols={cols}
      readOnly={isReadOnly}
      className="textAreaCustom"
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  rows: PropTypes.number,
  cols: PropTypes.number,
  isReadOnly: PropTypes.bool,
};
