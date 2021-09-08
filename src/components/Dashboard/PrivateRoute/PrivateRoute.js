import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { LoginContext } from '../../../App';

//   =====================================================================================
const PrivateRoute = ({ children, ...rest }) => {
  // Context from app.js
  const [loggedInUser, setLoggedInUser] = useContext(LoginContext);
  const [sessionUser, setSessionUser] = useContext(LoginContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email  || sessionUser.email ?(
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;