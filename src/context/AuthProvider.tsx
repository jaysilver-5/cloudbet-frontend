import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { auth, googleProvider, githubProvider, } from "./firebase-config";
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signInWithPopup,
    signOut,
    sendEmailVerification,
    GoogleAuthProvider,
    GithubAuthProvider,
} from "firebase/auth";
import { apiCall } from 'src/utils';
import { BACKEND_URL } from 'src/utils/config';

// User type
interface User {
    user_id: string;
    email: string | null;
    username: string | null;
    nickname: string | null;
    profile_img: string | null;
    auth_provider: string | null;
    email_verified: boolean | false;
    phone_verified: boolean | false;
    id_verified: boolean | false;
    two_factor_enabled: boolean | false;
    date_of_birth: string | null;
    sports: string | null;
    esports: string | null;
    games: string | null;
    balance: number | 0;
    vip_level: string | null;
    created_at: string | null;
    last_login: string | null;
    status: string | null;
}

// Define a type for the AuthContext
interface AuthContextType {
    user: User | null;
    setUser: (userData: User) => void;
    emailLogin: (email: string, password: string) => Promise<void>;
    emailSignup: (email: string, password: string) => Promise<void>;
    googleLogin: () => Promise<void>;
    githubLogin: () => Promise<void>;
    resendVerificationEmail: () => Promise<void>;
    logout: () => Promise<void>;
    isAuthenticated: boolean;
}


// Create a Context for the authentication
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Email/Password login
    const emailLogin = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);

            // Check if email is verified
            if (userCredential.user && !userCredential.user.emailVerified) {
                await signOut(auth); // Sign out unverified user
                throw new Error("Email not verified. Please verify your email before logging in.");
            }

            let userData = await apiCall(BACKEND_URL + "/auth/login", "POST", { email });
            // Save user data to local storage
            localStorage.setItem('user', JSON.stringify(userData.user_data));
            // setUser
            setUser(userData.user_data);
        } catch (error) {
            console.error("Error during email login:", error);
            throw error; // Rethrow the error for further handling
        }
    };

    // Email/Password signup
    const emailSignup = async (email: string, password: string): Promise<void> => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            // Send email verification
            if (userCredential.user) {
                await sendEmailVerification(userCredential.user);
                // Save user data to local storage
                let userData = {
                    email: userCredential.user.email,
                    username: userCredential.user.displayName,
                    auth_provider: 'password',
                    email_verified: userCredential.user.emailVerified || false,
                }
                const response = await apiCall(BACKEND_URL + "/auth/register", "POST", userData);
                // Update user with user_id from response
                const updatedUserData: User = {
                    user_id: response.data.user_id, // Assuming response contains user_id
                    email: userData.email,
                    username: userData.username,
                    auth_provider: userData.auth_provider,
                    email_verified: userData.email_verified,
                    nickname: null,
                    profile_img: null,
                    phone_verified: false,
                    id_verified: false,
                    two_factor_enabled: false,
                    date_of_birth: null,
                    sports: null,
                    esports: null,
                    games: null,
                    balance: response.data.balance,
                    vip_level: null,
                    created_at: null,
                    last_login: null,
                    status: null
                };
                localStorage.setItem('user', JSON.stringify(updatedUserData));
                setUser(updatedUserData)
            }
        } catch (error) {
            console.error("Error during email signup:", error);
            throw error; // Rethrow the error for further handling
        }
    };

    const resendVerificationEmail = async () => {
        try {
            if (auth.currentUser) {
                await sendEmailVerification(auth.currentUser);
            } else {
                throw new Error("No authenticated user to send a verification email to.");
            }
        } catch (error) {
            console.error("Error during resending verification email:", error);
            throw error; // Rethrow the error for further handling
        }
    };

    // Google login
    const googleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);

            // Save user data to local storage
            const user = result.user;
            console.log(user)
            let userData = {
                email: user.email,
                username: user.displayName,
                auth_provider: user.providerData[0]?.providerId || null,
                email_verified: user.emailVerified || false
            }
            const response = await apiCall(BACKEND_URL + "/auth/register", "POST", userData);
            // Update user with user_id from response
            const updatedUserData: User = {
                user_id: response.data.user_id, // Assuming response contains user_id
                email: userData.email,
                username: userData.username,
                auth_provider: userData.auth_provider,
                email_verified: userData.email_verified,
                nickname: null,
                profile_img: null,
                phone_verified: false,
                id_verified: false,
                two_factor_enabled: false,
                date_of_birth: null,
                sports: null,
                esports: null,
                games: null,
                balance: response.data.balance,
                vip_level: null,
                created_at: null,
                last_login: null,
                status: null
            };
            localStorage.setItem('user', JSON.stringify(updatedUserData));
            setUser(updatedUserData);
        } catch (error) {
            console.error("Error during Google login:", error);
            throw error; // Rethrow the error for further handling
        }
    };

    // GitHub login
    const githubLogin = async () => {
        try {
            const result = await signInWithPopup(auth, githubProvider);

            // Save user data to local storage
            const user = result.user;
            let userData = {
                email: user.email,
                username: user.displayName,
                auth_provider: user.providerData[0]?.providerId || null,
                email_verified: user.emailVerified || false
            }
            const response = await apiCall(BACKEND_URL + "/auth/register", "POST", userData);
            // Update user with user_id from response
            const updatedUserData: User = {
                user_id: response.data.user_id, // Assuming response contains user_id
                email: userData.email,
                username: userData.username,
                auth_provider: userData.auth_provider,
                email_verified: userData.email_verified,
                nickname: null,
                profile_img: null,
                phone_verified: false,
                id_verified: false,
                two_factor_enabled: false,
                date_of_birth: null,
                sports: null,
                esports: null,
                games: null,
                balance: response.data.balance,
                vip_level: null,
                created_at: null,
                last_login: null,
                status: null
            };
            localStorage.setItem('user', JSON.stringify(updatedUserData));
        } catch (error) {
            console.error("Error during GitHub login:", error);
            throw error; // Rethrow the error for further handling
        }
    };

    // Logout
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error during logout:", error);
            throw error; // Rethrow the error for further handling
        }
    };

    // Sync user with Firebase Authentication
    useEffect(() => {
        // Check local storage for user data on initial load
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Set user from local storage
        }
    }, []);

    const authValue: AuthContextType = {
        user,
        setUser,
        emailLogin,
        emailSignup,
        resendVerificationEmail,
        googleLogin,
        githubLogin,
        logout,
        isAuthenticated: !!user,
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook for consuming AuthContext
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};