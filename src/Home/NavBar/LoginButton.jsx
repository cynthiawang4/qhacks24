import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({ className }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <button className={`${className}`} onClick={() => loginWithRedirect()}>Sign Up</button>
    </div>    
  );
};

export default LoginButton;