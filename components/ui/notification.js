import React, { useContext } from "react";
import styles from "./notification.module.css";
import NotificationContext from "@/store/notification-context";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Notification = ({ title, message, status }) => {
  const notificationCtx = useContext(NotificationContext);
  const { hideNotification } = notificationCtx;

  let statusStyles = "";

  switch (status) {
    case "success":
      statusStyles = styles.success;
      break;
    case "error":
      statusStyles = styles.error;
      break;
    case "pending":
      statusStyles = styles.pending;
      break;
  }

  const activeStyles = `${styles.notification} ${statusStyles}`;

  const root = (
    <Fragment>
      <div className={activeStyles} onClick={hideNotification}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </Fragment>
  );

  if (typeof window === "object") {
    const notificationRoot = document.getElementById("notifications");
    return ReactDOM.createPortal(root, notificationRoot);
  }
};

export default Notification;
