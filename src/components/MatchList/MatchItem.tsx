import { useNavigate } from "react-router-dom";
import { IMatchItem } from "src/types/MatchItem";
import { useEffect } from "react";
import LiveIcon from "../common/LiveIcon";
import { getFormattedDay, getFormattedTime } from "src/utils";
import { BlockOutlined, LockOutlined } from "@mui/icons-material";

export default function MatchItem({
  item,
  href,
  onClick,
  onBet,
  separator,
  ...props
}: Readonly<{
  item: IMatchItem;
  href?: string;
  onClick?: any;
  onBet?: any;
  separator?: boolean;
  [key: string]: any
}>) {

  const navigate = useNavigate();

  useEffect(() => {
    // animation

  }, [item.bets]);

  const handleClick = () => {
    if (href) {
      navigate(href);
    }
    if (onClick) {
      onClick(item);
    }
  }

  const handleBet = (index: number) => {
    if (onBet) {
      onBet(item, index, props.logo, props.type, props.title, props.description);
    }
  }

  const isDisabled = (bet: any) => {
    return (typeof bet == 'object' && bet.disabled);
  }

  const isLocked = (bet: any) => {
    return (typeof bet == 'object' && bet.locked);
  }

  return (
    <div className="transition-colors ease-out duration-300 has-[.team:hover]:bg-on-surface-1/[0.08] has-[.team:active]:!bg-on-surface-1/[0.16] has-[.team:focus]:!bg-on-surface-1/[0.16]">
      <div className="flex flex-col gap-y-3 py-2.5 px-5">
        <div className="grid grid-cols-2 gap-x-3">
          <a onClick={handleClick} className="col-span-1 team flex justify-between">
            <div className="max-w-xs w-full flex flex-col gap-y-1 justify-center">
              <div className="relative">
                <div className="h-full w-full flex flex-col gap-y-1 justify-center">
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-x-3">
                      <div className="flex items-center gap-x-3 overflow-hidden mr-auto text-on-surface-1">
                        {item.home_team?.logo &&
                          <div className="flex items-center flex-shrink-0 aspect-1 relative rounded-full overflow-hidden size-icon-l">
                            <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                              <img src={item.home_team.logo} alt="tema1" />
                            </div>
                          </div>
                        }
                        <span className="font-inter text-base leading-[140%] font-bold truncate text-on-surface-1">
                          {item.home_team?.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-x-3">
                      <div className="flex items-center gap-x-3 overflow-hidden mr-auto text-on-surface-1">
                        {item.away_team?.logo &&
                          <div className="flex items-center flex-shrink-0 aspect-1 relative rounded-full overflow-hidden size-icon-l">
                            <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                              <img src={item.away_team.logo} alt="tema1" />
                            </div>
                          </div>
                        }
                        <span className="font-inter text-base leading-[140%] font-bold truncate text-on-surface-1">
                          {item.away_team?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {separator &&
              <div className="h-full w-0.5 bg-outline-2 invisible sm:visible" role="separator"></div>
            }
          </a>

          <div className="col-span-1 flex gap-x-1 text-center items-center">
            {(item.betDisabled || item.betLocked) ?
              <div className="flex items-center min-h-14 flex-1 justify-center">
                {item.betDisabled ?
                  <BlockOutlined className="size-icon-xs text-on-surface-disabled" />
                  :
                  <LockOutlined className="size-icon-xs text-on-surface-disabled" />
                }
              </div>
              :
              <div className="flex items-center min-h-14 flex-1">
                <div className="flex-1 flex gap-y-3 items-center justify-center h-full flex-wrap flex-row">
                  {item.bets?.map((bet, index) => (
                    <div key={index} className="w-full flex justify-center flex-1">
                      <button
                        onClick={() => handleBet(index)}
                        className={`w-full h-full min-h-14 border rounded-xl py-1 px-0.5 transition-colors duration-300 ease-in-out 
                        ${(isDisabled(bet) || isLocked(bet)) ? '' : 'hover:bg-primary/[0.08] active:bg-primary/[0.16] '}
                        ${item.betslip === index ? 'border-primary' : 'border-transparent'}`}
                      >
                        {typeof bet == 'object' ?
                          <div className="font-medium gap-x-1 flex items-center justify-center flex-col">
                            <span className="font-inter text-base leading-[140%] text-on-surface-1 font-medium">
                              {bet.desc}
                            </span>
                            <div className="h-7 p-0.5 relative flex items-center justify-center">
                              <div className="flex items-center justify-center">
                                {(isDisabled(bet) || isLocked(bet)) ?
                                  isDisabled(bet) ?
                                    <BlockOutlined className="size-icon-xs text-on-surface-disabled" />
                                    :
                                    <LockOutlined className="size-icon-xs text-on-surface-disabled" />
                                  :
                                  <span className="font-inter text-base leading-[140%] transition-colors duration-300 ease-in-out text-primary font-medium">
                                    {bet.point}
                                  </span>
                                }
                              </div>
                            </div>
                          </div>
                          :
                          <div className="font-medium gap-x-1 flex items-center justify-center flex-col">
                            <div className="h-7 p-0.5 relative flex items-center justify-center">
                              <div className="flex items-center justify-center">
                                <span className="font-inter text-base leading-[140%] transition-colors duration-300 ease-in-out text-primary font-medium">
                                  {bet}
                                </span>
                              </div>
                            </div>
                          </div>
                        }
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            }
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          {item.isLive ?
            <div className="flex items-center gap-x-3 min-h-5">
              <div className="flex items-center font-medium text-on-surface-1">
                <span className="font-inter text-sm leading-[140%] text-on-tertiary-1">
                  {item.round || 'Live'}
                </span>
              </div>
              <LiveIcon className={" size-icon-s"} />
            </div>
            :
            <span className="font-inter text-sm leading-[140%] text-on-surface-3 font-medium">
              {getFormattedDay(item.date)} • {getFormattedTime(item.date)}
            </span>
          }
        </div>
      </div>
    </div>
  );
}
