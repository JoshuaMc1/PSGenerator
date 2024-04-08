import PropTypes from "prop-types";

const Alert = ({ type, children }) => {
  switch (type) {
    case "error":
      return (
        <div role="alert" className="alert alert-error mt-4 shadow-lg">
          <span>{children}</span>
        </div>
      );

    case "success":
      return (
        <div role="alert" className="alert alert-success mt-4 shadow-lg">
          <span>{children}</span>
        </div>
      );

    case "warning":
      return (
        <div role="alert" className="alert alert-warning mt-4 shadow-lg">
          <span>{children}</span>
        </div>
      );

    case "info":
    default:
      return (
        <div role="alert" className="alert alert-info mt-4 shadow-lg">
          <span>{children}</span>
        </div>
      );
  }
};

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Alert;
