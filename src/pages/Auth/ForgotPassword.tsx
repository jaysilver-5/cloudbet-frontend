import { useState } from "react";
import { TextField } from "@mui/material";

import { useTranslation } from "react-i18next";
import RoundedButton from "src/components/common/button/RoundedButton";

import ImgMail from '../../assets/imgs/auth/mail.svg';

import { getAuth, sendPasswordResetEmail } from "firebase/auth"; // Import Firebase Auth

export default function ForgotPassword({ onLogin }: {
  onLogin?: any
}) {
  const t = useTranslation();

  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleResetPassword = async () => {
    const auth = getAuth(); // Initialize Firebase Auth
    try {
      await sendPasswordResetEmail(auth, email); // Send password reset email
      setEmailSent(true); // Update state to indicate email sent
    } catch (error) {
      console.error("Error sending email: ", error); // Handle error
      // Optionally, you can show an error message to the user here
    }
  }

  return (
    !emailSent ?
      <div className="w-full flex flex-col items-center gap-2">
        <div className="font-bold text-center text-white text-2xl leading-[150%] my-2">Forgot Password</div>
        <div className="w-full flex flex-col gap-4 mt-8 mb-16">
          <TextField
            label="Email"
            size="small"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <RoundedButton
          text="Send email"
          disabled={!email}
          sx={{ backgroundColor: '#dffd51', color: 'black', '&:hover': { backgroundColor: '#bdd741' } }}
          onClick={handleResetPassword}
        />
        <div className="flex flex-row gap-x-3 items-center justify-center mt-2">
          <span className="text-sm leading-[140%] font-medium">Remember your password?</span>
          <RoundedButton
            text="Sign In"
            className="!w-fit !h-8"
            textClassName="text-sm text-[#cca6ff] font-bold"
            onClick={() => onLogin && onLogin()}
          />
        </div>
      </div>
      :
      <div className="w-full flex flex-col items-center gap-2">
        <div className="font-bold text-center text-white text-2xl leading-[150%] my-2">Forgot Password</div>
        <div className="px-5 relative flex justify-center opacity-80">
          <img src={ImgMail} alt="mail" className="h-[140px]" />
          <div className="from-[#141114] absolute -bottom-1 left-0 h-[50%] w-full bg-gradient-to-t"></div>
        </div>
        <div className="px-10 py-5 flex flex-col gap-y-4 text-on-surface-3 text-center">
          <span className="text-base leading-[140%]">We have sent you an email containing a reset link to:</span>
          <span className="text-2xl text-[#e0e0e0]">{email}</span>
          <div className="flex flex-col px-5 py-3">
            <div className="w-full h-0.5 bg-gradient-to-r from-[#141114] via-[#2c2532] to-[#141114]" role="separator" data-test-id="divider"></div>
          </div>
          <span className="font-inter text-base leading-[140%]">If you do not receive this email within a few minutes, please check your spam folder.</span>
        </div>
        <RoundedButton
          text="Resend Email"
          textClassName="text-sm text-[#cca6ff] font-bold"
          onClick={() => setEmailSent(false)}
        />
        <a onClick={() => setEmailSent(false)} className="text-sm hover:text-[#8d52da] underline underline-offset-4 mt-3">Go back</a>
      </div>
  );
}
