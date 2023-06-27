import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ path, element: Element }) => {
  // Replace this with your authentication check logic
  const isAuthenticated = /* Your authentication check logic here */ true;

  return (
    <Route
      path={path}
      element={isAuthenticated ? (
        <Element />
      ) : (
        <Navigate to="/" replace />
      )}
    />
  );
};

export default PrivateRoute;
