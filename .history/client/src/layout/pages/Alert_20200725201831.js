import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`red alert-${alert.type}`}>
        <i className="material-icons">info</i> <br /> {alert.msg} <br />{" "}
        <i className="material-icons">info</i>
      </div>
    ))
  );
};

export default Alert;
