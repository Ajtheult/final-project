import React, { useContext } from "react";
import AuthContext from "../../../../context/auth/authContext";

export const Logout = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const onLogout = () => {
    logout();
  };
  return (
    <div>
      <a onClick={onLogout} href="#!">
        <i className="fas fa-sign-out-alt"></i>{" "}
        <span className="hide-sm">Logout</span>
      </a>
    </div>
  );
};
