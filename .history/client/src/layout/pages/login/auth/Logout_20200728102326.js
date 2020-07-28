import React, { useContext } from "react";
import background8 from "../../imagesofinstruments/background8.jpg";
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
        <img src={background8} className="bg" alt="bg" />
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
