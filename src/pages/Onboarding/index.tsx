import { useState, useEffect } from "react";
import { ArrowBack } from "@mui/icons-material";
import { getAuth, signOut } from "firebase/auth";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import ImgBrandmark from '../../assets/imgs/brandmark.svg';
import ImgLogo from '../../assets/logo.svg';
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4_Sports from "./Step4_Sports";
import Step4_Esports from "./Step4_Esports";
import Step4_Casino from "./Step4_Casino";
import Step5 from "./Step5";
import { apiCall } from "src/utils";
import { BACKEND_URL } from "src/utils/config";
import { useAuth } from "../../../src/context/authContext/index";

export default function Onboarding() {
  const t = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(0);
  const [subStep, setSubStep] = useState(0);
  const [valid, setValid] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [nickname, setNickname] = useState("");
  const [birthday, setBirthday] = useState([0, 0, 0]);
  const [selectedKinds, setSelectedKinds] = useState<string[]>([]);
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedCasino, setSelectedCasino] = useState<string[]>([]);
  const [selectedEsports, setSelectedEsports] = useState<string[]>([]);

  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/auth')
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    if (step === 5) {
      // Call the /onboarding API
      apiCall(BACKEND_URL + '/auth/update-types', "POST", { email: user?.email, sports: selectedSports, esports: selectedEsports, games: selectedCasino })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          // Handle success response if needed
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error response if needed
        });
    }
  }, [step]);

  const handleNext = async () => {
    if (step == 0) {
      setStep(1);
    }

    if (step == 1) {
      if (!nickname) {
        setValid(false);
      } else {
        try {
          await apiCall(BACKEND_URL + "/auth/update-nickname", "POST", {
            email: user?.email,
            nickname
          });
          setValid(true);
          setStep(step + 1);
        } catch (error: any) {
          console.error('Error: ', error)
          setValid(false);
          setErrorMsg(error.response.data)
        }

      }
    }

    if (step == 2) {
      if (
        !birthday[0] || birthday[0] > 31 ||
        !birthday[1] || birthday[1] > 12 ||
        birthday[2] < 1900 || birthday[2] > (new Date().getFullYear() - 18)
      ) {
        setValid(false);
      } else {
        try {
          await apiCall(BACKEND_URL + "/auth/update-dob", "POST", {
            email: user?.email,
            dob: birthday
          });
          setValid(true);
          setStep(step + 1);
        } catch (error: any) {
          console.error('Error: ', error)
          setValid(false);
          setErrorMsg(error.response.data)
        }
      }
    }

    if (step == 3) {
      setStep(step + 1);
      setSubStep(0);
    }

    if (step == 4) {
      if (selectedKinds.length > subStep + 1) {
        setSubStep(subStep + 1);
      } else {
        setStep(step + 1);
      }
    }
  }

  const handlePrev = () => {
    if (step == 4 && subStep > 0) {
      setSubStep(subStep - 1);
    } else {
      setStep(step - 1);
    }
  }

  const getProgress = () => {
    let progress = step * 20;
    if (step == 4) {
      progress += subStep * (20 / selectedKinds.length);
    }
    return progress;
  }

  const handleSkip = () => {
    setStep(5);
    setSubStep(selectedKinds.length - 1);
  }

  const handleDeposit = () => {

  }

  return (
    <div className="w-full h-full min-h-screen ">
      <div className="fixed w-full h-full overflow-hidden hidden lg:block top-0">
        <img className="w-full h-full object-cover" role="presentation" src={ImgBrandmark} style={{ transform: 'scale(1.1) translateZ(0px)' }} />
        <div className="absolute w-full h-full left-0 bottom-0 bg-gradient-to-t from-background via-background"></div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center py-10 relative z-10">
        <img className="h-9 w-auto" role="presentation" src={ImgLogo} />
      </div>
      <div className=" relative z-10 mx-auto text-center h-full sm:w-full sm:min-h-screen lg:px-8 lg:pt-0 lg:py-4 lg:min-h-0 ">
        <div className="text-white overflow-hidden sm:my-auto lg:max-w-4xl lg:mx-auto bg-background xl:max-w-5xl xl:rounded-[2.5rem]">
          <div className="w-full mx-auto py-2 px-2 h-full min-h-screen flex flex-col relative sm:px-6 sm:pt-4 sm:pb-0 lg:min-h-0 lg:block">
            {/* header */}
            <div className="flex h-12 items-center relative">
              <div className="absolute left-0 top-auto">
                {(step > 0 && step < 5) &&
                  <ArrowBack
                    fontSize="large"
                    className="opacity-50 hover:opacity-75 cursor-pointer"
                    onClick={handlePrev}
                  />
                }
              </div>
              <div className="w-full text-center flex justify-center">
                {(step > 0 && step < 5) &&
                  <div>
                    <div className=" bg-surface-5 rounded-full h-2.5 w-40 sm:w-52 xl:w-80 ">
                      <div className="bg-secondary h-2.5 rounded-full transition-width duration-500 ease-in-out" style={{ width: `${getProgress()}%` }}></div>
                    </div>
                  </div>
                }
              </div>
              <div className="absolute right-0 top-auto z-[100]">
                {(step > 3 && step < 5) &&
                  <div>
                    <button className="transition-all duration-250 hover:opacity-80 underline text-on-tertiary-3" onClick={handleSkip}>Skip</button>
                  </div>
                }
              </div>
            </div>

            {/* step content */}
            <div className="relative flex-1 mt-2 lg:h-[40rem] xl:h-[42rem]">
              {step === 0 && <Step0 />}
              {step === 1 && <Step1 nickname={nickname} onChangeNickname={setNickname} valid={valid} errorMsg={errorMsg} />}
              {step === 2 && <Step2 birthday={birthday} onChangeBirthday={setBirthday} valid={valid} errorMsg={errorMsg} />}
              {step === 3 && <Step3 selectedKinds={selectedKinds} onSelectKinds={setSelectedKinds} />}
              {(step === 4 && subStep == 0) &&
                (selectedKinds.includes('sports') ?
                  <Step4_Sports selectedItems={selectedSports} onSelectItems={setSelectedSports} /> :
                  selectedKinds.includes('esports') ?
                    <Step4_Esports selectedItems={selectedEsports} onSelectItems={setSelectedEsports} /> :
                    <Step4_Casino selectedItems={selectedCasino} onSelectItems={setSelectedCasino} />)
              }
              {(step === 4 && subStep == 1) &&
                (selectedKinds.includes('esports') ?
                  <Step4_Esports selectedItems={selectedEsports} onSelectItems={setSelectedEsports} /> :
                  <Step4_Casino selectedItems={selectedCasino} onSelectItems={setSelectedCasino} />)
              }
              {(step === 4 && subStep == 2) &&
                <Step4_Casino selectedItems={selectedCasino} onSelectItems={setSelectedCasino} />
              }
              {step === 5 && <Step5 nickname={nickname} onDeposit={handleDeposit} onSkip={() => navigate("/sports")} />}
            </div>

            {/* footer */}
            {step < 5 &&
              <div className="fixed bottom-2 z-40 sm:absolute pb-6 m-auto left-0 right-0 sm:bottom-0 w-fit inline-block lg:pb-8 ">
                {(step != 3 || selectedKinds.length > 0) &&
                  <button
                    className="relative z-20 group inline-flex items-center justify-center rounded-full py-4 px-10 text-xl font-bold bg-primary text-on-primary  transition-all ease-out duration-300 no-highlight  hover:bg-primary-lighter  focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2  lg:w-52 active:scale-95 "
                    onClick={handleNext}
                  >
                    Continue
                  </button>
                }
                {step === 0 &&
                  <>
                    <br /><br />
                    <div
                      className="inline-flex py-1 text-on-surface/[0.6] cursor-pointer hover:text-on-surface underline transition-all duration-200 "
                      onClick={handleLogout}
                    >
                      Back to Sign In
                    </div>
                  </>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
