import IconNone from "../../assets/icons/none.svg";
import IconLock from "../../assets/icons/lock.svg";
import { useEffect } from "react";
import { IBetItem } from "src/types/BetItem";
import { LockOutlined } from "@mui/icons-material";

export default function BetPair({
  bets,
  betslip,
  onBet,
  separator,
  ...props
}: Readonly<{
  bets: (number | IBetItem)[];
  betslip?: number;
  onBet?: any;
  separator?: boolean;
  [key: string]: any
}>) {

  useEffect(() => {
    // animation

  }, [bets]);

  const handleBet = (index: number) => {
    if (onBet) {
      onBet(bets, index);
    }
  }

  const isDisabled = (bet: any) => {
    return (typeof bet == 'object' && bet.disabled);
  }

  const isLocked = (bet: any) => {
    return (typeof bet == 'object' && bet.locked);
  }

  return (
    <div className="flex-1 grid grid-cols-1 px-5">
      {bets.length > 1 ?
        <div className="flex items-center min-h-14 flex-1">
          <div className="flex-1 flex gap-y-3 items-center justify-center h-full flex-wrap flex-row">
            {bets.map((bet, index) => (
              <div key={index} className="w-full flex justify-center flex-1">
                <button
                  onClick={() => handleBet(index)}
                  className={`w-full h-full min-h-14 border rounded-xl py-1 px-0.5 transition-colors duration-300 ease-in-out 
                  ${(isDisabled(bet) || isLocked(bet)) ? '' : 'hover:bg-primary/[0.08] active:bg-primary/[0.16] '}
                  ${betslip === index ? 'border-primary' : 'border-transparent'}`}
                  disabled={isDisabled(bet) || isLocked(bet)}
                >
                  <div className="font-medium gap-x-1 flex items-center justify-center">
                    {(typeof bet == 'object' && bet.desc) &&
                      <span className="font-inter text-base leading-[140%] text-on-surface-1 font-medium min-w-11 text-end">
                        {bet.desc}
                      </span>
                    }

                    <div className="h-7 p-0.5 relative flex items-center justify-center">
                      <div className="flex items-center justify-center">
                        <span className={`font-inter text-base leading-[140%] transition-colors duration-300 ease-in-out font-medium 
                        ${isDisabled(bet) ? '' : 'text-primary'}`}>
                          {typeof bet == 'object' ? bet.point : bet}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        :
        bets.length == 1 ?
          <>
            <div className="flex items-center gap-x-3 justify-between">
              {typeof bets[0] == 'object' ?
                <>
                  <span className="font-inter font-medium flex-1 truncate">{bets[0].desc}</span>
                  <div className="w-1/4">
                    <button
                      className={`w-full h-full min-h-14 border rounded-xl py-1 px-0.5 transition-colors duration-300 ease-in-out 
                      ${(isDisabled(bets[0]) || isLocked(bets[0])) ? '' : 'hover:bg-primary/[0.08] active:bg-primary/[0.16] '}
                      ${betslip === 0 ? 'border-primary' : 'border-transparent'}`}
                    >
                      <div className="font-medium gap-x-1 flex items-center justify-center">
                        <div className="h-7 p-0.5 relative flex items-center justify-center min-w-11">
                          <div className="flex items-center justify-center">
                            {bets[0].locked ?
                              <LockOutlined className="size-icon-xs text-on-surface-disabled" />
                              :
                              <span className="font-inter text-base leading-[140%] transition-colors duration-300 ease-in-out text-primary font-medium">
                                {bets[0].point}
                              </span>
                            }
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </>
                :
                <div className="w-full flex justify-center flex-1">
                  <button
                    onClick={() => handleBet(0)}
                    className={`w-full h-full min-h-14 border rounded-xl py-1 px-0.5 transition-colors duration-300 ease-in-out hover:bg-primary/[0.08] active:bg-primary/[0.16]
                  ${betslip === 0 ? 'border-primary' : 'border-transparent'}`}
                    disabled={isDisabled(bets[0]) || isLocked(bets[0])}
                  >
                    <div className="font-medium gap-x-1 flex items-center justify-center">
                      {bets[0]}
                    </div>
                  </button>
                </div>
              }
            </div>
            <div className="w-full h-0.5 bg-outline-2" role="separator"></div>
          </>
          :
          <></>
      }
    </div>
  );
}
