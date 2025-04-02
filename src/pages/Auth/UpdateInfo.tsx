import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { applyActionCode, checkActionCode, confirmPasswordReset } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { useAuth } from "../../../src/context/authContext/index";
import TextField from "@mui/material/TextField";
import RoundedButton from "src/components/common/button/RoundedButton";
import { BACKEND_URL } from "src/utils/config";
import { apiCall } from "src/utils";

const UpdateInfo: React.FC = () => {
    const { user } = useAuth();
    const [message, setMessage] = useState<string>("Verifying email...");
    const [error, setError] = useState<string | null>(null);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [mode, setMode] = useState<string>("verifyEmail");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        const oobCode = searchParams.get("oobCode"); // Get the verification code from the URL
        const modeParam = searchParams.get("mode"); // Get the mode from the URL

        if (modeParam) {
            setMode(modeParam); // Set mode based on URL parameter
        }

        const handleVerification = async () => {
            if (!oobCode) {
                setError("Invalid verification link.");
                return;
            }

            try {
                // Verify the action code and apply it
                await checkActionCode(auth, oobCode); // Ensure the code is valid
                await applyActionCode(auth, oobCode); // Apply the action code (mark email as verified)
                await apiCall(BACKEND_URL + "/auth/verify-email", "POST", user?.email)

                setMessage("Email verified successfully! Redirecting...");
                setTimeout(() => {
                    navigate("/onboarding"); // Redirect to onboarding after verification
                }, 1000);
            } catch (err) {
                console.error(err);
                setError("Failed to verify email. The link might be expired or invalid.");
            }
        };



        if (modeParam === 'verifyEmail') handleVerification();
    }, [searchParams, navigate]);

    const handleResetPassword = async () => {
        const oobCode = searchParams.get("oobCode"); // Get the verification code from the URL
        if (!oobCode) {
            setError("Invalid verification link.");
            return;
        }

        try {
            // Verify the action code and apply it
            await checkActionCode(auth, oobCode); // Ensure the code is valid
            await confirmPasswordReset(auth, oobCode, password);
            setMessage("Password reset successful! Redirecting to login...");
            setTimeout(() => {
                navigate("/auth"); // Redirect to onboarding after verification
            }, 1000);
        } catch (err) {
            console.error(err);
            setError("Failed to verify email. The link might be expired or invalid.");
        }
    };

    return (
        <div>
            {mode === "resetPassword" ? (
                <div className="w-full min-h-screen flex justify-center items-center">
                    <div className="w-[450px] max-w-full max-h-dvh md:border-2 border-[#211c25] rounded-2xl p-4 pb-0 flex flex-col items-center justify-between gap-2 text-[#a6a6a6]">
                        <div className="w-full flex flex-col items-center gap-2">
                            <div className="font-bold text-center text-white text-2xl leading-[150%] my-2">Reset Password</div>
                            <div className="w-full flex flex-col gap-4 mt-8 mb-16">
                                <TextField
                                    label="Password"
                                    type="password"
                                    size="small"
                                    className="w-full"
                                    value={password}
                                    onChange={(e: any) => setPassword(e.target.value)}
                                />
                            </div>
                            <RoundedButton
                                text="Reset Password"
                                disabled={!password}
                                sx={{ backgroundColor: '#dffd51', color: 'black', '&:hover': { backgroundColor: '#bdd741' } }}
                                onClick={handleResetPassword}
                            />
                        </div>
                    </div>
                </div>
            ) : error ? (
                <div className="w-full flex flex-col items-center gap-2">
                    <div className="font-bold text-center text-white text-2xl leading-[150%] my-2">Error</div>
                    <p>{error}</p>
                </div>
            ) : (
                <div className="w-full flex flex-col items-center gap-2">
                    <div className="font-bold text-center text-white text-2xl leading-[150%] my-2">{message}</div>
                </div>
            )}
        </div>
    );
};

export default UpdateInfo;
