import React, { useContext } from "react";
import background3 from "../../imagesofinstruments/background3.jpg";
import AuthContext from "../../../../context/auth/authContext";

const Logout = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const onLogout = () => {
    logout();
  };
  return (
    <div>
      <div className="bg-color">
        <img src={background3} className="bg" alt="bg" />
      </div>
      <button
        onClick={onLogout}
        href="#!"
        class="btn-floating btn-large waves-effect waves-light black move_logout_btn"
      >
        <i class="material-icons">logout</i>
      </button>
    </div>
  );
};

export default Logout;
