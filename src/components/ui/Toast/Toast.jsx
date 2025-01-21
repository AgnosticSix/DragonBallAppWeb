import { forwardRef } from "react";
import { Toast } from "primereact/toast";
import PropTypes from "prop-types";
import "./toast.css";

export const ToastCustom = forwardRef(({ position }, ref) => {
  return (
    <Toast
      ref={ref}
      position={position || "top-right"}
      className="toastCustom"
    />
  );
});

ToastCustom.propTypes = {
  position: PropTypes.string,
};
