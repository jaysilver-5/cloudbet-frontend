import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Navigate, Link } from "react-router-dom";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../../src/firebase/auth";
import { useAuth } from "../../../src/context/authContext/index";

import IconGoogle from "../../assets/icons/social/google.webp";
import RoundedButton from "src/components/common/button/RoundedButton";

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const { userLoggedIn } = useAuth();

  const handleClickShowPassword = (): void => setShowPassword((prev) => !prev);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
      } catch (error: any) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  const onGoogleSignIn = async (e?: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    if (e) e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithGoogle();
      } catch (error: any) {
        setErrorMessage(error.message);
        setIsSigningIn(false);
      }
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/onboarding" replace={true} />;
  }

  return (
    <form className="w-full flex flex-col justify-center h-full items-center gap-2" onSubmit={onSubmit}>
      <div className="font-bold text-center text-white text-2xl leading-[150%] my-2">
        Welcome Back
      </div>

      <RoundedButton
        text="Sign in with Google"
        align="justify-start"
        className="!pl-[6px]"
        leftImg={IconGoogle}
        imgClassName="w-[35px] h-[35px]"
        disabled={isSigningIn}
        onClick={(e: any) => onGoogleSignIn(e)}
      />

      <div className="w-full flex gap-x-2 items-center py-2">
        <div className="w-full h-0.5 bg-gradient-to-r from-[#141114] to-[#2c2532]"></div>
        <span className="font-inter text-xl leading-[120%] text-on-surface-3">OR</span>
        <div className="w-full h-0.5 bg-gradient-to-l from-[#141114] to-[#2c2532]"></div>
      </div>

      <div className="w-full flex flex-col gap-4 mb-8">
        <TextField
          label="Email or username"
          size="small"
          className="w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" size="small">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            size="small"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormControl>
      </div>

      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <RoundedButton
        text={isSigningIn ? "Signing In..." : "Continue"}
        disabled={!email || !password || isSigningIn}
        sx={{
          backgroundColor: "#dffd51",
          color: "black",
          "&:hover": { backgroundColor: "#bdd741" }
        }}
        type="submit"
      />

      <Link to="/forgot-password" className="text-sm hover:text-[#8d52da] underline underline-offset-4 mt-3">
        Forgot Password
      </Link>

      <p className="text-center text-sm">
        Don't have an account? <Link to="/register" className="hover:underline font-bold">Sign up</Link>
      </p>
    </form>
  );
}