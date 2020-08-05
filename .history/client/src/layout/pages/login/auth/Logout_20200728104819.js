import React, { useContext } from "react";
import background3 from "../../imagesofinstruments/background3.jpg";
import AuthContext from "../../../../context/auth/authContext";

const Logout = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const onLogout = () => {
    logout();
  };

  const LoggedOut = () => {
    alert("You have just logged out from your account.");
  };

  return (
    <div>
      <div className="bg-color">
        <img src={background3} className="bg" alt="bg" />
      </div>
      <button
        onClick={onLogout}
        className="btn-floating btn-large waves-effect waves-light black move_logout_btn"
        onClick={() => LoggedOut()}
      >
        <i className="material-icons">logout</i>
      </button>
    </div>
  );
};

export default Logout;
