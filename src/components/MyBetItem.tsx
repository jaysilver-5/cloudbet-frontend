import { RemoveCircleOutline } from "@mui/icons-material";
import { useState } from "react";

export default function MyBetItem({
  item,
  onRemove
}: {
  item: any,
  onRemove?: any,
}) {

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
                {item.bet_team}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex flex-row gap-x-1 items-center">
              <span className="font-inter text-sm leading-[140%] font-medium truncate">
                Winner
              </span>
            </div>
            <p className="truncate">
              <span className="font-inter text-xs leading-[140%] text-on-surface-3">
                {item.match_name}
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-[200px]">
          <div className="text-on-surface-1 flex flex-row gap-x-1 ml-auto">
            {/* <span className="font-inter text-xl leading-[120%] line-through text-surface-disabled">
              {item.pointOld}
            </span> */}
            <span className="font-inter text-xl leading-[120%]">
              Odds: {item.odds}
            </span>
          </div>
          <div>
            <div className="duration-300 transition-colors ease-out items-center w-full h-14 gap-x-2 text-right hover:border-on-surface-3">
              <div className="font-inter text-base leading-[140%] text-on-surface-3 pl-3">Bet Amount: ${item.bet_amount}</div>
              <div className="font-inter text-base leading-[140%] text-on-surface-3 pl-3">Potential Payout: ${item.potential_payout}</div>
              <div className="font-inter text-xs !leading-5 truncate">{item.status}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
