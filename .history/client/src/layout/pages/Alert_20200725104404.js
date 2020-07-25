import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert red alert-${alert.type}`}>
        <i class="material-icons move_this_icon_down">info</i> {alert.msg}
      </div>
    ))
  );
};

export default Alert;
