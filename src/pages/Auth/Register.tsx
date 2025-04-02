import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Navigate, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../src/context/authContext/index';
import { doCreateUserWithEmailAndPassword } from '../../../src/firebase/auth';
import { Checkbox, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import IconGoogle from '../../assets/icons/social/google.webp';
import RoundedButton from 'src/components/common/button/RoundedButton';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../../src/firebase/auth";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [isLegal, setIsLegal] = useState<boolean>(false);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const { userLoggedIn } = useAuth();

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

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // Simple email validation function
  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    if (!isRegistering) {
      setIsRegistering(true);
      try {
        await doCreateUserWithEmailAndPassword(email, password);
        setMessage(`A verification email has been sent to ${email}. Please check your inbox.`);
      } catch (error: any) {
        setErrorMessage(error.message);
      } finally {
        setIsRegistering(false);
      }
    }
  };

  const handleGoogleRegister = async () => {
    try {
      await doCreateUserWithEmailAndPassword(email, password); // Implement Google login logic here
      navigate('/onboarding');
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  if (userLoggedIn) {
    return <Navigate to={'/onboarding'} replace={true} />;
  }

  return (
    <div className="w-full flex flex-col items-center h-full justify-center gap-2">
      <div className="font-bold text-center text-white text-2xl leading-[150%] my-2">Sign up in seconds</div>

      <RoundedButton
        text="Sign up with Google"
        align="justify-start"
        className="!pl-[6px]"
        leftImg={IconGoogle}
        imgClassName="w-[35px] h-[35px]"
        onClick={onGoogleSignIn}
      />

      <div className="w-full flex gap-x-2 items-center py-2">
        <div className="w-full h-0.5 bg-gradient-to-r from-[#141114] to-[#2c2532]"></div>
        <span className="font-inter text-xl leading-[120%] text-on-surface-3">OR</span>
        <div className="w-full h-0.5 bg-gradient-to-l from-[#141114] to-[#2c2532]"></div>
      </div>

      <form onSubmit={onSubmit} className="w-full flex flex-col gap-4 mb-8">
        <TextField
          label="Email or username"
          size="small"
          className="w-full"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          error={!isValidEmail(email) && email !== ''}
          helperText={!isValidEmail(email) && email !== '' ? 'Please enter a valid email address' : ''}
        />
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" size="small">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-weight"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                {password &&
                  <IconButton
                    aria-label={showPassword ? 'hide the password' : 'display the password'}
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              </InputAdornment>
            }
            label="Password"
            size="small"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-confirm-password" size="small">Confirm Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-confirm-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                {confirmPassword &&
                  <IconButton
                    aria-label={showPassword ? 'hide the password' : 'display the password'}
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              </InputAdornment>
            }
            label="Confirm Password"
            size="small"
            value={confirmPassword}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
          />
        </FormControl>

        <div className="w-full flex flex-row justify-start items-center gap-2 mb-8">
          <Checkbox color="secondary" checked={isLegal} onChange={(e: ChangeEvent<HTMLInputElement>) => setIsLegal(e.target.checked)} />
          <div className="text-sm font-medium cursor-pointer">
            I am at least 18 years old and have read the<br />
            <a href="#" target="_blank" className="hover:text-[#8d52da] underline underline-offset-4">Terms & Conditions</a>
          </div>
        </div>

        {/* Display the message if it exists */}
        {message && <div className="text-green-500">{message}</div>}
        {errorMessage && <div className="text-red-500">{errorMessage}</div>}

        <button
          type="submit"
          disabled={isRegistering || !email || !password || !isLegal || !isValidEmail(email)}
          className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isRegistering ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
        >
          {isRegistering ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>

      <div className="text-sm text-center">
        Already have an account? {' '}
        <Link to={'/login'} className="text-center text-sm hover:underline font-bold">Continue</Link>
      </div>
    </div>
  );
};

export default Register;
