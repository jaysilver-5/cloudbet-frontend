import React, { createContext, useState, useEffect } from "react";
import NotificationHandler from "../utils/notificationHandler";
import { useAuth } from "../../src/context/authContext/index";

// Define the shape of the notification context
interface NotificationContextType {
    notifications: string[];
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<string[]>([]);
    const { user: authUser } = useAuth();

    useEffect(() => {
        const handleNewNotification = (message: any) => {
            setNotifications((prev) => [...prev, message]);
        };

        const socket = NotificationHandler(handleNewNotification, authUser);
    }, [authUser]);

    return (
        <NotificationContext.Provider value={{ notifications }}>
            {children}
        </NotificationContext.Provider>
    );
};
