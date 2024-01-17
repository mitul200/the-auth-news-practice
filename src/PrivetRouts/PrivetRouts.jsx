import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivetRouts = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const location = useLocation()

  if (loding) {
    <span className="loading loading-dots loading-lg"></span>;
  }

  if (user) {
    return children;
  } else {
    return <Navigate to="/login"  state={{ from: location }} replace ></Navigate>;
  }
};

export default PrivetRouts;
