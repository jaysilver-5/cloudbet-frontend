import { useDispatch } from "react-redux";
import { showRightDrawer } from "src/redux/actions/uiAction";
import { RDRAWER_BETSLIP, RDRAWER_MYBETS } from "src/redux/types";
import { Close, EditNote, History } from "@mui/icons-material";
import Betslip from "./Betslip";
import Mybets from "./Mybets";
import { useNavigate } from "react-router-dom";

export default function Betpane({
  type,
  onClose,
  data,
}: {
  type: any;
  onClose?: any;
  data?: any;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelect = (type: any) => {
    dispatch(showRightDrawer(type));
  }

  return (
    <div className="flex flex-col overflow-y-clip translate-x-0 translate-y-0 transition-colors duration-500 ease-in-out h-[100dvh] sm:h-full bg-background">
      <div className="opacity-100">
        <div className="flex flex-row justify-between pl-5 pr-3 min-h-[var(--betslip-header-height)] h-[var(--betslip-header-height)] bg-background">
          <nav className="flex gap-x-6 h-[var(--betslip-header-height)]">
            <div
              onClick={() => handleSelect(RDRAWER_BETSLIP)}
              className={`flex flex-row gap-x-2 items-center justify-center cursor-pointer ${type == RDRAWER_BETSLIP ? 'text-on-surface' : 'text-on-surface/70 hover:text-on-surface/80'}`}
            >
              <span className="font-inter text-2xl leading-[120%] font-bold">Betslip</span>
            </div>
            <div
              onClick={() => handleSelect(RDRAWER_MYBETS)}
              className={`flex flex-row gap-x-2 items-center justify-center cursor-pointer ${type == RDRAWER_MYBETS ? 'text-on-surface' : 'text-on-surface/70 hover:text-on-surface/80'}`}
            >
              <span className="font-inter text-2xl leading-[120%] font-bold">My bets</span>
            </div>
          </nav>
          <div className="flex flex-row items-center">

            {type == RDRAWER_BETSLIP &&
              <button
                onClick={() => { }}
                className="group/icon-button cursor-pointer rounded-full relative outline outline-offset-1 outline-2 outline-transparent transition-all ease-out duration-300 focus:outline-on-surface-1 active:outline-none disabled:pointer-events-none w-10 h-10 after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
              >
                <div className="text-on-surface-1 w-full h-full rounded-full flex justify-center items-center transition-all ease-out duration-300 group-hover/icon-button:bg-on-tertiary-2/[0.08] group-active/icon-button:bg-on-tertiary-2/[0.16] group-focus/icon-button:bg-transparent">
                  <div className="!w-7 !h-7">
                    <EditNote className="!w-7 !h-7 group-disabled/icon-button:text-surface-disabled" />
                  </div>
                </div>
              </button>
            }
            {type == RDRAWER_MYBETS &&
              <button
                onClick={() => navigate("/sports/bet-history")}
                className="group/icon-button cursor-pointer rounded-full relative outline outline-offset-1 outline-2 outline-transparent transition-all ease-out duration-300 focus:outline-on-surface-1 active:outline-none disabled:pointer-events-none w-10 h-10 after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
              >
                <div className="text-on-surface-1 w-full h-full rounded-full flex justify-center items-center transition-all ease-out duration-300 group-hover/icon-button:bg-on-tertiary-2/[0.08] group-active/icon-button:bg-on-tertiary-2/[0.16] group-focus/icon-button:bg-transparent">
                  <div className="!w-7 !h-7">
                    <History className="!w-7 !h-7 group-disabled/icon-button:text-surface-disabled" />
                  </div>
                </div>
              </button>
            }

            <button
              onClick={onClose}
              className="group/icon-button cursor-pointer rounded-full relative outline outline-offset-1 outline-2 outline-transparent transition-all ease-out duration-300 focus:outline-on-surface-1 active:outline-none disabled:pointer-events-none !w-10 !h-10 after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
            >
              <div className="text-on-surface-1 w-full h-full rounded-full flex justify-center items-center transition-all ease-out duration-300 group-hover/icon-button:bg-on-tertiary-2/[0.08] group-active/icon-button:bg-on-tertiary-2/[0.16] group-focus/icon-button:bg-transparent">
                <div className="!w-7 !h-7">
                  <Close className="!w-7 !h-7 group-disabled/icon-button:text-surface-disabled" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full !block top-[var(--betslip-header-height)] h-[var(--betslip-content-height-mobile)] xl:h-[var(--betslip-content-height)]">
        {type == RDRAWER_BETSLIP && <Betslip data={data} />}
        {type == RDRAWER_MYBETS && <Mybets />}
      </div>
    </div>
  );
}
