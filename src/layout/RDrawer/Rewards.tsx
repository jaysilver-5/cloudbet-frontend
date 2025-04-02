import { Close } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import { showModal } from "src/redux/actions/uiAction";
import { MODAL_DEPOSIT } from "src/redux/types";

export default function Rewards({
  onClose
}: {
  onClose?: any;
}) {
  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(showModal(MODAL_DEPOSIT));
  }
 
  return (
    <div className="md:select-auto select-none flex flex-col animate-slideFromRight h-full">
      <div className="flex flex-row w-full items-center justify-between pt-3 pb-3 pl-5 pr-5 sticky top-0 bg-background z-20">
        <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1">Rewards</span>
        <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={() => onClose && onClose()} />
      </div>
      <div className="my-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center w-full my-auto">
            <div className="flex items-center justify-center gap-5 w-full">
              <div className="flex flex-col relative order-2 max-w-lg flex-none">
                <div className="h-10 w-full z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 376 30"><g clip-path="url(#clip0_5367_47864)"><path fill="#141114" d="M-1.177 87.659V2.116c121.175 17.837 257.981 18.494 380.068.527v85.016H-1.177z"></path><path stroke="url(#text-primaryGradient)" stroke-width="3.5" d="M-225.222-46.015V-188.992l2.445 1.058c276.015 119.467 549.465 118.145 820.636.002l2.449-1.067v146.624l-1.27.362c-274.268 78.265-548.722 78.265-822.99 0l.457-1.6h-1.727V-46.015z"></path></g><defs><radialGradient id="text-primaryGradient" cx="0" cy="0" r="1" gradientTransform="matrix(0 -69.3321 185.602 0 185.46 17.562)" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="#141114"></stop></radialGradient><clipPath id="clip0_5367_47864"><path fill="#fff" d="M0 0H375V30H0z" transform="matrix(1 0 0 -1 .043 30.5)"></path></clipPath></defs></svg>
                </div>
                <div className="bg-background w-full text-center flex items-center flex-col pt-3 relative z-10 pb-3.5">
                  <div className="flex flex-col items-center">
                    <span className="font-inter text-display text-primary !text-[5rem] font-Midnight text-center leading-[110%]">$2500</span>
                    <span className="font-inter text-2xl leading-[120%] text-on-surface-1 font-Midnight uppercase">Welcome Package</span>
                  </div>
                  <span className="font-inter text-base leading-[140%] font-bold text-on-surface-3 mt-3">Deposit any amount to unlock</span>
                </div>
                <div className="h-10 w-full relative z-10">
                  <div className="w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary" fill="none" preserveAspectRatio="none" viewBox="0 0 376 30"><g clip-path="url(#clip0_5373_47880)"><path fill="#141114" d="M376.263-57.159l-.001 85.543C255.088 10.547 118.282 9.89-3.805 27.857v-85.016h380.068z"></path><path stroke="url(#text-primaryGradient)" stroke-width="3.5" d="M600.308 76.515V219.492l-2.446-1.058c-276.014-119.467-549.464-118.145-820.635-.002l-2.449 1.067V72.875l1.27-.362c274.268-78.265 548.722-78.265 822.99 0l-.457 1.6h1.727V76.515z"></path></g><defs><radialGradient id="text-primaryGradient" cx="0" cy="0" r="1" gradientTransform="matrix(0 69.3321 -185.602 0 189.626 12.938)" gradientUnits="userSpaceOnUse"><stop stop-color="currentColor"></stop><stop offset="1" stop-color="#141114"></stop></radialGradient><clipPath id="clip0_5373_47880"><path fill="#fff" d="M0 0H375V30H0z" transform="matrix(-1 0 0 1 375.043 0)"></path></clipPath></defs></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center text-center pt-11 gap-2 px-5">
            <span className="font-inter text-2xl leading-[120%] font-Midnight uppercase text-on-surface-2">Earn as you play</span>
            <span className="font-inter text-sm leading-[140%] text-on-surface-3">Earn cash back on every bet as well as daily cash drops</span>
          </div>
          <div className="flex items-center w-full justify-center mt-14 ">
            <div className="overflow-hidden relative pointer-events-none no-select"></div>
            <div className="flex-none relative z-10">
              <div className="relative flex justify-center items-center">
                <div className="absolute h-full w-[80%] ">
                  <div className="absolute w-full h-full bg-primary/20 rounded-full animate-[ping_2s_ease-in-out_infinite]"></div>
                </div>
                <button
                  onClick={handleDeposit}
                  className="after:w-full after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 outline outline-offset-1 outline-2 outline-transparent focus:outline-on-surface-1 flex items-center justify-center rounded-full transition-all ease-out duration-300 border-2 group/button relative active:outline-none active:scale-95 min-h-14 px-5 bg-primary border-primary text-on-primary disabled:text-surface-disabled disabled:border-transparent disabled:bg-surface-disabled/[0.12] disabled:pointer-events-none"
                >
                  <div className="absolute w-[calc(100%+4px)] h-[calc(100%+4px)] rounded-full left-[-2px] top-[-2px] transition-all ease-out duration-300 bg-on-primary opacity-0 group-hover/button:opacity-[0.08] group-active/button:opacity-0 group-focus/button:opacity-0 min-h-14 px-5"></div>
                  <div className="absolute inset-center opacity-0 transition-opacity ease-out duration-200"></div>
                  <p className="flex flex-col relative text-center transition-opacity ease-out duration-200">
                    <span className="font-inter text-xl leading-[120%] font-bold">Deposit to unlock</span>
                  </p>
                </button>
              </div>
            </div>
            <div className="overflow-hidden relative pointer-events-none no-select"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
