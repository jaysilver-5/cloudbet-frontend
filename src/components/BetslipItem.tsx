import { RemoveCircleOutline } from "@mui/icons-material";
import { useState } from "react";

export default function BetslipItem({
  item,
  onRemove,
  availableBalance,
  setAvailableBalance,
  updateBetSlipData
}: {
  item: any,
  onRemove?: any,
  availableBalance: any,
  setAvailableBalance: any,
  updateBetSlipData: (newData: any) => void
}) {

  const [betAmount, setBetAmount] = useState(0);

  return (

    <div className="flex flex-col gap-y-3 px-5 py-2.5">
      <div className="flex flex-row gap-x-3">
        <button
          onClick={() => onRemove && onRemove(item)}
          className="group/icon-button cursor-pointer rounded-full relative outline outline-offset-1 outline-2 outline-transparent transition-all ease-out duration-300 focus:outline-on-surface-1 active:outline-none disabled:pointer-events-none w-6 h-6 focus:!outline-none after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2"
        >
          <div className="text-on-surface-1 w-full h-full rounded-full flex justify-center items-center transition-all ease-out duration-300 group-hover/icon-button:bg-on-tertiary-2/[0.08] group-active/icon-button:bg-on-tertiary-2/[0.16] group-focus/icon-button:bg-transparent">
            <RemoveCircleOutline className="!w-4 !h-4 group-disabled/icon-button:text-surface-disabled" />
          </div>
        </button>
        <div className="flex flex-col gap-y-2.5 flex-1 truncate">
          <div className="flex flex-col gap-y-2.5 flex-1 truncate">
            <div className="flex flex-row gap-x-3 items-center">
              <img src={item.logo} alt="logo" className="shrink-0 icon-container size-icon-s default-icon" />
              <span className="font-inter text-xl leading-[120%] font-bold capitalize truncate">
                {item.betTeam}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-row gap-x-1 items-center">
              <span className="font-inter text-sm leading-[140%] font-medium truncate">
                {item.betName}
              </span>
              <div className="shrink-0">
                <div className="rounded-full px-1 h-5 font-medium flex items-center justify-center gap-x-1 bg-tertiary-2 text-on-tertiary-1 truncate">
                  <span className="font-inter text-xs !leading-5 truncate">Cashout available</span>
                </div>
              </div>
            </div>
            <p className="truncate">
              <span className="font-inter text-xs leading-[140%] text-on-surface-3">
                {item.matchName}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-[120px]">
          <div className="text-on-surface-1 flex flex-row gap-x-1 ml-auto">
            {/* <span className="font-inter text-xl leading-[120%] line-through text-surface-disabled">
              {item.pointOld}
            </span> */}
            <span className="font-inter text-xl leading-[120%]">
              {item.pointNew}
            </span>
          </div>
          <div>
            <div className="duration-300 transition-colors ease-out flex items-center w-full h-14 gap-x-2 bg-surface-1 border-[2px] rounded-xl focus-within:border-primary focus-within:text-primary border-surface-4 text-primary hover:border-on-surface-3 hover:focus-within:border-primary">
              <span className="font-inter text-base leading-[140%] text-on-surface-3 pl-3">$</span>
              <input
                className="truncate border-none bg-transparent w-full h-full font-inter font-normal text-xl leading-[120%] caret-on-surface-1 text-right py-4 p-0 m-0 focus:ring-0 focus:outline-none focus:border-none  px-3" type="number" autoComplete="off" value={betAmount}
                onChange={(e: any) => {
                  const value = parseFloat(e.target.value);
                  if (value <= availableBalance) {
                    setBetAmount(value);
                    updateBetSlipData({ ...item, betAmount: value });
                  }
                }}
                onBlur={() => {
                  setAvailableBalance(availableBalance - betAmount);
                }}
                max={availableBalance}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="min-h-6 mb-2">
        <p className="text-right text-on-surface-3">
          <span className="font-inter text-xs leading-[140%]">Odds have changed.</span>
        </p>
      </div> */}
    </div>
  );
}
