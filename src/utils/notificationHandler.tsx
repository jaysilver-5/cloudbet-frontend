import { toast } from "react-toastify";
import { io } from "socket.io-client";
import { BACKEND_URL } from "./config";

// Connect to the backend socket server
const socket = io(BACKEND_URL);

// Notification handler function
const NotificationHandler = (onNewNotification: (data: any) => void, authUser: any) => {
    socket.on("receive_notification", (data) => {
        console.log("New Notification:", data);

        // Show toast notification
        if (data.user_id === authUser?.user_id) {
            let message = `You deposited ${data.amount}${data.symbol}.`;
            toast.info(message);
        }

        // Update UI using a callback function
        if (onNewNotification) {
            onNewNotification(data.message);
        }
    });

    return socket;
};

export default NotificationHandler;
