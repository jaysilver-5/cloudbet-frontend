import { useTranslation } from "react-i18next";

import ImgCoins from '../../assets/imgs/coins-accepted.webp';
import CasinoIcon from '../../assets/icons/nav/casino-active.svg';
import EsportsIcon from '../../assets/icons/nav/esports-active.svg';

export default function Step5({
  nickname,
  onDeposit,
  onSkip
}: {
  nickname: string;
  onDeposit: any;
  onSkip: any
}) {
  const t = useTranslation();

  return (
    <div className="absolute h-full top-0 left-0 w-full">
      <section className="flex flex-col items-center h-full sm:mt-[-2.5rem] -mx-2">
        <div className="px-2 sm:px-0 md:my-auto lg:my-0 lg:px-4">
          <ul className="gap-1 grid place-items-center">
            <ul className="relative order-2 px-6 sm:px-10 md:mt-0 md:px-0">
              <div className="flex flex-col justify-center items-center p-4 pb-16 relative">
                <div className="text-sm sm:text-2xl text-on-surface-2 mt-5 text-balance max-w-[25ch] font-bold">
                  Add funds to start playing, <span className="text-on-tertiary-1">{nickname}</span>
                </div>
              </div>
              <div className="mt-10">
                <div className="flex flex-col relative order-2 max-w-lg flex-none">
                  <div className="h-10 w-full z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 376 30"><g clipPath="url(#clip0_5367_47864)"><path fill="#141114" d="M-1.177 87.659V2.116c121.175 17.837 257.981 18.494 380.068.527v85.016H-1.177z"></path><path stroke="url(#text-primaryGradient)" strokeWidth="3.5" d="M-225.222-46.015V-188.992l2.445 1.058c276.015 119.467 549.465 118.145 820.636.002l2.449-1.067v146.624l-1.27.362c-274.268 78.265-548.722 78.265-822.99 0l.457-1.6h-1.727V-46.015z"></path></g><defs><radialGradient id="text-primaryGradient" cx="0" cy="0" r="1" gradientTransform="matrix(0 -69.3321 185.602 0 185.46 17.562)" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="#141114"></stop></radialGradient><clipPath id="clip0_5367_47864"><path fill="#fff" d="M0 0H375V30H0z" transform="matrix(1 0 0 -1 .043 30.5)"></path></clipPath></defs></svg>
                  </div>
                  <div className="bg-background w-full text-center flex items-center flex-col pt-3 relative z-10 pb-3.5">
                    <div className="flex flex-col items-center">
                      <span className="text-display text-primary !text-8xl font-Midnight text-center leading-[140%]">$2500</span>
                      <span className="text-4xl leading-[120%] text-on-surface-1 font-Midnight uppercase">Welcome Package</span>
                    </div>
                  </div>
                  <div className="h-10 w-full relative z-10 mt-6">
                    <div className="w-full h-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 376 30"><g clipPath="url(#clip0_5373_47880)"><path fill="#141114" d="M376.263-57.159l-.001 85.543C255.088 10.547 118.282 9.89-3.805 27.857v-85.016h380.068z"></path><path stroke="url(#text-primaryGradient)" strokeWidth="3.5" d="M600.308 76.515V219.492l-2.446-1.058c-276.014-119.467-549.464-118.145-820.635-.002l-2.449 1.067V72.875l1.27-.362c274.268-78.265 548.722-78.265 822.99 0l-.457 1.6h1.727V76.515z"></path></g><defs><radialGradient id="text-primaryGradient" cx="0" cy="0" r="1" gradientTransform="matrix(0 69.3321 -185.602 0 189.626 12.938)" gradientUnits="userSpaceOnUse"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="#141114"></stop></radialGradient><clipPath id="clip0_5373_47880"><path fill="#fff" d="M0 0H375V30H0z" transform="matrix(-1 0 0 1 375.043 0)"></path></clipPath></defs></svg>
                    </div>
                    <div className="absolute w-full h-full flex items-center justify-center inset-0">
                      <div className="relative flex justify-center items-center">
                        <div className="absolute h-full w-full ">
                          <div className="absolute w-full h-full bg-primary/20 rounded-full animate-[ping_2s_ease-in-out_infinite]"></div>
                        </div>
                        <a onClick={onDeposit}>
                          <div className="relative after:w-full after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 outline outline-offset-1 outline-2 outline-transparent focus:outline-on-surface-1 flex items-center justify-center rounded-full transition-all ease-out duration-300 border-2 group/button active:outline-none active:scale-95 min-h-14 px-5 bg-primary border-primary text-on-primary disabled:text-surface-disabled disabled:border-transparent disabled:bg-surface-disabled/[0.12] disabled:pointer-events-none py-4">
                            <div className="absolute w-[calc(100%+4px)] h-[calc(100%+4px)] rounded-full left-[-2px] top-[-2px] transition-all ease-out duration-300 bg-on-primary opacity-0 group-hover/button:opacity-[0.08] group-active/button:opacity-0 group-focus/button:opacity-0 min-h-14 px-5"></div>
                            <div className="absolute inset-center opacity-0 transition-opacity ease-out duration-200">
                              <div className="text-on-primary">
                                <svg width="24" height="24" stroke="#000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g className="spinner_custom"><circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" stroke="currentColor"></circle></g></svg>
                              </div>
                            </div>
                            <p className="flex flex-col relative text-center transition-opacity ease-out duration-200"><span className="font-inter text-xl leading-[120%] font-bold">Deposit to unlock</span></p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-8">
                <a onClick={onSkip}>
                  <div className="relative after:w-full after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 outline outline-offset-1 outline-2 outline-transparent focus:outline-on-surface-1 flex items-center justify-center rounded-full transition-all ease-out duration-300 border-2 group/button active:outline-none active:scale-95 min-h-14 px-5 bg-tertiary-1 border-transparent text-on-tertiary disabled:text-surface-disabled disabled:border-transparent disabled:bg-surface-disabled/[0.12] disabled:pointer-events-none w-fit py-2">
                    <div className="absolute w-[calc(100%+4px)] h-[calc(100%+4px)] rounded-full left-[-2px] top-[-2px] transition-all ease-out duration-300 bg-on-tertiary-1 opacity-0 group-hover/button:opacity-[0.08] group-active/button:opacity-0 group-focus/button:opacity-0 min-h-14 px-5"></div>
                    <div className="absolute inset-center opacity-0 transition-opacity ease-out duration-200"></div>
                    <p className="flex flex-col relative text-center transition-opacity ease-out duration-200">
                      <span className="font-inter text-xl leading-[120%] font-bold">Skip for now</span>
                    </p>
                  </div>
                </a>
              </div>
            </ul>
          </ul>
        </div>
        <div className="flex items-center justify-center py-6 relative z-20 px-6">
          <div className="opacity: 1; transform: none;">
            <img className="w-full max-w-sm mx-auto" src={ImgCoins} alt="Payment Methods"></img>
            <div className="text-sm sm:text-base text-on-surface-2 mt-5 text-balance max-w-[45ch]">
              We accept most major payment providers and over 30 different cryptocurrencies.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
