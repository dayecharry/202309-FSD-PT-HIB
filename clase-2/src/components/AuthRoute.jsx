import { Navigate, useLocation } from "react-router-dom";

function AuthRoute({ user, component }) {
  const location = useLocation();

  console.log(location);
  if (user) return component;
  if (!user)
    return <Navigate to="/" state={{ prevRoute: location.pathname }} />;
}
export default AuthRoute;
