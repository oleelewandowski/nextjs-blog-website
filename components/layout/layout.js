import { Fragment, useContext } from "react";
import NavigationBar from "./navigation-bar";
import NotificationContext from "@/store/notification-context";
import DynamicNotification from "../ui/dynamic-notification";

const Layout = ({ children }) => {
  const notificationContext = useContext(NotificationContext);
  const { notification } = notificationContext;

  return (
    <Fragment>
      <NavigationBar />
      {children}
      <DynamicNotification
        title={notification?.title}
        message={notification?.message}
        status={notification?.status}
      />
    </Fragment>
  );
};

export default Layout;
