import propTypes from "prop-types";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const UnProtectedRoute = ({ element: Component }) => {
  const authState = useSelector((state) => state.auth);
  return !authState.user ? Component : <Navigate to="/jobHome" />;
};
UnProtectedRoute.propTypes = {
  element: propTypes.element
};

export default UnProtectedRoute;
