import { MODAL_CURRENCY, MODAL_DEPOSIT, RDRAWER_MYBETS, RDRAWER_PROFILE, RDRAWER_REWARDS } from "src/redux/types";
import { useDispatch } from "react-redux";
import { hideRightDrawer, showModal, showRightDrawer } from "src/redux/actions/uiAction";
import { useRDrawer } from "src/hooks/useRDrawer";

import IconMenu from "../assets/imgs/main/icon-menu.svg";
import IconRewards from "../assets/imgs/main/icon-rewards.svg";
import IconBet from "../assets/imgs/main/icon-bet.svg";
import IconDeposit from "../assets/imgs/main/icon-deposit.svg";
import IconCasino from "../assets/icons/nav/casino-active.svg";
import IconSports from "../assets/icons/nav/sports-active.svg";
import { useLocation, useNavigate } from "react-router-dom";

export default function BottomBar({
  onShowMobileSidebar
}: {
  onShowMobileSidebar: any
}) {

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const rdrawer = useRDrawer();

  const handleShowRDrawer = (type: any) => {
    if (rdrawer.isShow && rdrawer.type == type) {
      dispatch(hideRightDrawer());
    } else {
      dispatch(showRightDrawer(type));
    }
  }

  const handleDeposit = () => {
    dispatch(showModal(MODAL_DEPOSIT));
  }


  return (
    <div className="fixed z-[37] pr-0 pl-0 bottom-0 w-full left-1/2 -translate-x-1/2 sm:bottom-2 sm:p-5 sm:w-auto transition-all ease-in-out duration-500 opacity-100">
      <div className=" flex w-full items-center bg-surface-2 justify-between shadow px-5 pt-0.5  rounded-t-4xl sm:rounded-full sm:!w-fit ">

        <button
          onClick={onShowMobileSidebar}
          className=" flex flex-col items-center justify-center group transition-all duration-200 ease-out relative active:scale-95 h-20 w-28 "
        >
          <div className=" absolute inset-0 transition-all rounded-2xl duration-300 ease-out bg-on-surface-1 opacity-0 group-active:opacity-[0.12] "></div>
          <div className="flex flex-col items-center gap-2 relative">
            <img src={IconMenu} className="icon-container size-icon-xl default-icon" />
            <span className="font-inter text-sm leading-[140%] font-medium text-on-tertiary-3">Menu</span>
          </div>
        </button>

        <button
          onClick={() => handleShowRDrawer(RDRAWER_REWARDS)}
          className=" flex flex-col items-center justify-center group transition-all duration-200 ease-out relative active:scale-95 h-20 w-28 "
        >
          <div className=" absolute inset-0 transition-all rounded-2xl duration-300 ease-out bg-on-surface-1 opacity-0 group-active:opacity-[0.12] "></div>
          <div className="flex flex-col items-center gap-2 relative">
            <img src={IconRewards} className="icon-container size-icon-xl default-icon" />
            <span className="font-inter text-sm leading-[140%] font-medium text-on-tertiary-3">Unlock now</span>
          </div>
        </button>

        {!pathname.startsWith("/casino") &&
          <button
            onClick={() => handleShowRDrawer(RDRAWER_MYBETS)}
            className=" flex flex-col items-center justify-center group transition-all duration-200 ease-out relative active:scale-95 h-20 w-28 "
          >
            <div className=" absolute inset-0 transition-all rounded-2xl duration-300 ease-out bg-on-surface-1 opacity-0 group-active:opacity-[0.12] "></div>
            <div className="flex flex-col items-center gap-2 relative">
              <img src={IconBet} className="icon-container size-icon-xl default-icon" />
              <span className="font-inter text-sm leading-[140%] font-medium text-on-tertiary-3">My bets</span>
            </div>
          </button>
        }

        <button
          onClick={handleDeposit}
          className=" flex flex-col items-center justify-center group transition-all duration-200 ease-out relative active:scale-95 h-20 w-28 "
        >
          <div className=" absolute inset-0 transition-all rounded-2xl duration-300 ease-out bg-on-surface-1 opacity-0 group-active:opacity-[0.12] "></div>
          <div className="flex flex-col items-center gap-2 relative">
            <img src={IconDeposit} className="icon-container size-icon-xl default-icon" />
            <span className="font-inter text-sm leading-[140%] font-medium text-on-tertiary-3">Deposit</span>
          </div>
        </button>

        {pathname.startsWith("/casino") ?
          <button
            onClick={() => navigate("/sports")}
            className=" flex flex-col items-center justify-center group transition-all duration-200 ease-out relative active:scale-95 h-20 w-28 "
          >
            <div className=" absolute inset-0 transition-all rounded-2xl duration-300 ease-out bg-on-surface-1 opacity-0 group-active:opacity-[0.12] "></div>
            <div className="flex flex-col items-center gap-2 relative">
              <img src={IconSports} className="icon-container size-icon-xl default-icon" />
              <span className="font-inter text-sm leading-[140%] font-medium text-on-tertiary-3">Sports</span>
            </div>
          </button>
          :
          <button
            onClick={() => navigate("/casino")}
            className=" flex flex-col items-center justify-center group transition-all duration-200 ease-out relative active:scale-95 h-20 w-28 "
          >
            <div className=" absolute inset-0 transition-all rounded-2xl duration-300 ease-out bg-on-surface-1 opacity-0 group-active:opacity-[0.12] "></div>
            <div className="flex flex-col items-center gap-2 relative">
              <img src={IconCasino} className="icon-container size-icon-xl default-icon" />
              <span className="font-inter text-sm leading-[140%] font-medium text-on-tertiary-3">Casino</span>
            </div>
          </button>
        }

      </div>
    </div>
  );
}
