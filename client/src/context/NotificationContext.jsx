import React, { createContext, useState } from "react";

export const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (notif) => {
    setNotifications((prev) => [...prev, notif]);
  };

  return (
    <NotificationContext.Provider value={{ notifications, addNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}
