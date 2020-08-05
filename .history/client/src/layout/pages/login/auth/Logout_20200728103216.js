import React, { useContext } from "react";
import background2 from "../../imagesofinstruments/background2.jpg";
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
        <img src={background2} className="bg" alt="bg" />
      </div>
      <a
        onClick={onLogout}
        href="#!"
        class="btn-floating btn-large waves-effect waves-light black move_logout_btn"
      >
        <i class="material-icons">logout</i>
      </a>
    </div>
  );
};

export default Logout;
