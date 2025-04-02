import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

export default function Step1({
  nickname,
  onChangeNickname,
  valid,
  errorMsg
}: {
  nickname?: string;
  onChangeNickname?: any;
  valid: boolean;
  errorMsg: string;
}) {
  const t = useTranslation();

  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setIsValid(valid);
  }, [valid]);

  useEffect(() => {
    setErrorMessage(errorMsg)
  }, [errorMsg])

  const handleRandomNickname = () => {
    const name = uniqueNamesGenerator({
      dictionaries: [adjectives, animals, colors],
      length: 2
    });
    onChangeNickname(name);
  }

  return (
    <div className="absolute h-full top-0 left-0 w-full">
      <section className="flex flex-col h-full pb-40">
        <header className=" text-center px-6 lg:px-12 lg:mt-3 lg:mb-6 ">
          <div className=" text-on-surface text-lg font-bold mb-3 sm:text-2xl ">
            What would you like us to call you?
          </div>
          <div className="text-base sm:text-xl text-on-surface-2">
            Please choose carefully, as others can see your nickname, and it cannot be changed
          </div>
        </header>
        <div className=" my-auto px-5 lg:flex lg:justify-center xl:px-10 ">
          <div className=" mx-auto w-full relative lg:w-1/2 ">
            <div className="flex relative ">
              <input
                placeholder="Nickname" type="text"
                className={`block w-full min-w-0 flex-grow p-3 border-surface-2 border-2 bg-transparent text-lg rounded-xl transition-all duration-200 !pr-5 lg:p-4 focus:border-primary focus:!ring-transparent text-on-surface-1 cursor-not-allowed  ${!isValid && '!border-red-500'}`}
                value={nickname}
                onChange={e => onChangeNickname(e.target.value)}
              />
              <button type="button" className="  h-full absolute right-0 top-0 px-4 group  cursor-not-allowed " title="Randomize" onClick={handleRandomNickname}>
                <svg className=" w-5 h-5 text-on-surface group-hover:text-[#fff] transform group-hover:scale-110 transition-all ease-out active:rotate-180 duration-300 active:scale-120 " height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m440.890625 0h-369.78125c-39.253906.046875-71.0625 31.855469-71.109375 71.109375v369.78125c.046875 39.253906 31.855469 71.0625 71.109375 71.109375h369.78125c39.253906-.046875 71.0625-31.855469 71.109375-71.109375v-369.78125c-.046875-39.253906-31.855469-71.0625-71.109375-71.109375zm42.664063 440.890625c-.023438 23.550781-19.113282 42.640625-42.664063 42.664063h-369.78125c-23.550781-.023438-42.640625-19.113282-42.664063-42.664063v-369.78125c.023438-23.550781 19.113282-42.640625 42.664063-42.664063h369.78125c23.550781.023438 42.640625 19.113282 42.664063 42.664063zm0 0"></path><path fill="currentColor" d="m298.667969 256c0 23.5625-19.105469 42.667969-42.667969 42.667969s-42.667969-19.105469-42.667969-42.667969 19.105469-42.667969 42.667969-42.667969 42.667969 19.105469 42.667969 42.667969zm0 0"></path><path fill="currentColor" d="m426.667969 384c0 23.5625-19.105469 42.667969-42.667969 42.667969s-42.667969-19.105469-42.667969-42.667969 19.105469-42.667969 42.667969-42.667969 42.667969 19.105469 42.667969 42.667969zm0 0"></path><path fill="currentColor" d="m170.667969 384c0 23.5625-19.105469 42.667969-42.667969 42.667969s-42.667969-19.105469-42.667969-42.667969 19.105469-42.667969 42.667969-42.667969 42.667969 19.105469 42.667969 42.667969zm0 0"></path><path fill="currentColor" d="m426.667969 128c0 23.5625-19.105469 42.667969-42.667969 42.667969s-42.667969-19.105469-42.667969-42.667969 19.105469-42.667969 42.667969-42.667969 42.667969 19.105469 42.667969 42.667969zm0 0"></path><path fill="currentColor" d="m170.667969 128c0 23.5625-19.105469 42.667969-42.667969 42.667969s-42.667969-19.105469-42.667969-42.667969 19.105469-42.667969 42.667969-42.667969 42.667969 19.105469 42.667969 42.667969zm0 0"></path></svg>
              </button>
            </div>
            <div className="w-full absolute top-full">
              {(!isValid) &&
                < div className="opacity: 1; transform: none;">
                  <div className="text-red-500 py-3 text-center px-4">{errorMessage}</div>
                </div>
              }
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
