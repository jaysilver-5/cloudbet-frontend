import { useEffect } from "react";
import { messaging, getToken, onMessage } from "../context/firebase-config";
import { toast } from "react-toastify";

const useFirebaseNotifications = () => {
    useEffect(() => {
        // Request Notification Permission
        Notification.requestPermission().then((permission) => {
            if (permission === "granted") {
                getToken(messaging, { vapidKey: "BCEx8En-dyLzo_PDb8LAlNNAn2eS4w1KAI3xL9i2iMlOLzbm4I0ZljIBH8iwxPsJJV9PbeVq0wu1hysj-1zyqts" })
                    .then((currentToken) => {
                        if (currentToken) {
                            console.log("FCM Token:", currentToken);
                            // Send this token to your backend to associate it with the user
                        } else {
                            console.log("No registration token available.");
                        }
                    })
                    .catch((err) => {
                        console.log("Error getting token:", err);
                    });
            }
        });

        // Listen for foreground notifications
        onMessage(messaging, (payload) => {
            console.log("Message received:", payload);
            toast.info(payload.notification?.title || "New Notification");
        });
    }, []);
};

export default useFirebaseNotifications;
