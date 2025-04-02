
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Step2({
  birthday,
  onChangeBirthday,
  valid,
  errorMsg
}: {
  birthday: number[];
  onChangeBirthday: any;
  valid: boolean;
  errorMsg: string
}) {
  const t = useTranslation();

  const [isValid1, setIsValid1] = useState(true);
  const [isValid2, setIsValid2] = useState(true);
  const [isValid3, setIsValid3] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsValid1(valid);
    setIsValid2(valid);
    setIsValid3(valid);
  }, [valid]);

  useEffect(() => {
    setErrorMessage(errorMsg)
  }, [errorMsg])

  const handleChange = (value: any, index: number) => {
    const newBirth = [...birthday];
    newBirth[index] = Number(value) || 0;
    onChangeBirthday(newBirth);
  }

  return (
    <div className="absolute h-full top-0 left-0 w-full">
      <section className="flex flex-col h-full pb-40">
        <header className=" text-center px-10 lg:mt-3 lg:mb-6 ">
          <div className=" text-on-surface text-lg font-bold mb-3 sm:text-2xl ">
            Enter your birth date so you can make deposits
          </div>
          <div className="text-base sm:text-xl text-on-surface-2">
            Cloudbet is not available to minors
          </div>
        </header>
        <div className=" my-auto lg:flex lg:justify-center xl:px-10 ">
          <div className=" mx-auto w-full relative lg:w-1/2 ">
            <div className="relative flex justify-center ">
              <div className="w-[5rem] mx-2 lg:w-[6rem] ">
                <input
                  type="number"
                  placeholder="DD"
                  maxLength={2}
                  min={1}
                  max={31}
                  className={`block text-center font-mono w-full min-w-0 flex-grow p-3 border-surface-2 border-2 bg-transparent text-4xl rounded-xl transition-all duration-200 lg:p-4 focus:border-primary focus:!ring-transparent text-on-surface-1 ${!isValid1 && '!border-red-500'}`}
                  value={birthday[0]}
                  onChange={e => handleChange(e.target.value, 0)}
                />
              </div>
              <div className="w-[5rem] mx-2 lg:w-[6rem] ">
                <input
                  type="number"
                  placeholder="MM"
                  maxLength={2}
                  min={1}
                  max={12}
                  className={`block text-center font-mono w-full min-w-0 flex-grow p-3 border-surface-2 border-2 bg-transparent text-4xl rounded-xl transition-all duration-200 lg:p-4 focus:border-primary focus:!ring-transparent text-on-surface-1 ${!isValid2 && '!border-red-500'}`}
                  value={birthday[1]}
                  onChange={e => handleChange(e.target.value, 1)}
                />
              </div>
              <div className="w-[8rem] mx-2 lg:w-[9rem] ">
                <input
                  type="number"
                  placeholder="YYYY"
                  maxLength={4}
                  min={1900}
                  max={new Date().getFullYear() - 18}
                  className={`block text-center font-mono w-full min-w-0 flex-grow p-3 border-surface-2 border-2 bg-transparent text-4xl rounded-xl transition-all duration-200 lg:p-4 focus:border-primary focus:!ring-transparent text-on-surface-1 ${!isValid3 && '!border-red-500'}`}
                  value={birthday[2]}
                  onChange={e => handleChange(e.target.value, 2)}
                />
              </div>
            </div>
            <div className="w-full absolute top-full">
              {(!isValid1 || !isValid2 || !isValid3) &&
                < div className="opacity: 1; transform: none;">
                  <div className="text-red-500 py-3 text-center px-4">Please enter a valid date of birth. {errorMessage}</div>
                </div>
              }
            </div>
          </div>
        </div>
      </section >
    </div >
  );
}
