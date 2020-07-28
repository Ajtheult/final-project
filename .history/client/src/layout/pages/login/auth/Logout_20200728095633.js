import React, { useContext } from "react";
import AuthContext from "../../../../context/auth/authContext";

const Logout = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const onLogout = () => {
    logout();
  };
  return (
    <div>
      <a
        onClick={onLogout}
        href="#!"
        class="btn-floating btn-large waves-effect waves-light black"
      >
        <i class="material-icons">logout</i>
      </a>
    </div>
  );
};

export default Logout;
