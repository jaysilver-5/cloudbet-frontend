import { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

import { useTranslation } from "react-i18next";
import { useNavigate, useSearchParams } from "react-router-dom";
import RoundedButton from "src/components/common/button/RoundedButton";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";

import ImgLogo from '../../assets/logo3.svg';
import IconEN from '../../assets/icons/locale/en.svg';

enum AuthType {
  LOGIN = 'login',
  REGISTER = 'register',
  PWD_RESET = 'pwdreset',
}

export default function Auth() {
  const t = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [type, setType] = useState<AuthType>(searchParams.get("type") as AuthType || AuthType.LOGIN);

  const handleLoginSuccess = () => {
    navigate("/sports");
  }

  const handleRegisterSuccess = () => {
    navigate("/onboarding"); // Navigate after successful registration
  };
  

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[450px] max-w-full h-[780px] max-h-dvh md:border-2 border-[#211c25] rounded-2xl p-4 pb-0 flex flex-col items-center justify-between gap-2 text-[#a6a6a6]">
        <img src={ImgLogo} alt="logo" className="w-60 h-auto" />

        {
          (type == AuthType.LOGIN) &&
          <Login
            // onLoginSuccess={handleLoginSuccess}
            // onForgotPassword={() => setType(AuthType.PWD_RESET)}
          />
        }

        {
          (type == AuthType.REGISTER) &&
          <Register />
        }


        {
          (type == AuthType.PWD_RESET) &&
          <ForgotPassword
            onLogin={() => setType(AuthType.LOGIN)}
          />
        }

        <div className="w-full flex-1 flex flex-col justify-end items-center">
          {
            (type == AuthType.LOGIN) &&
            <div className="flex flex-row gap-x-3 items-center justify-center">
              <span className="text-sm leading-[140%] font-medium">Don't have an account?</span>
              <RoundedButton
                text="Join Now"
                className="!w-fit !h-8"
                textClassName="text-sm text-[#cca6ff] font-bold"
                onClick={() => setType(AuthType.REGISTER)}
              />
            </div>
          }

          {
            (type == AuthType.REGISTER) &&
            <div className="flex flex-row gap-x-3 items-center justify-center">
              <span className="text-sm leading-[140%] font-medium">Already have an account?</span>
              <RoundedButton
                text="Sign In"
                className="!w-fit !h-8"
                textClassName="text-sm text-[#cca6ff] font-bold"
                onClick={() => setType(AuthType.LOGIN)}
              />
            </div>
          }

          <div className="py-5 flex justify-center">
            <RoundedButton
              text="English"
              className="!w-fit !h-8"
              textClassName="text-sm text-[#cca6ff] font-bold"
              leftImg={IconEN} imgClassName="w-[18px] h-[18px]"
              sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}
              endIcon={<KeyboardArrowDown />}
            />
          </div>
          <div className="py-3 px-8 rounded-t-3xl bg-[#211c25] overflow-clip">
            <a href="#" target="_blank" className="text-sm hover:text-[#8d52da] underline underline-offset-4">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
