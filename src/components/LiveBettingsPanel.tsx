import { useEffect, useState } from "react";
import CheckableButton from "src/components/common/button/CheckableButton";
import RoundedButton from "src/components/common/button/RoundedButton";
import BettingInfoDialog from "./Dialogs/BettingInfoDialog";

import { getFormattedName } from "src/utils";

import mockup from "src/mockup/live_bettings.json";

export default function LiveBettingsPanel() {

  const [selectedTab, setSelectedTab] = useState("all");
  const [data, setData] = useState<any>(mockup);
  const [isShowMore, setIsShowMore] = useState(false);

  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const updateData = () => {
      const rand = Math.floor(Math.random() * mockup.length);
      setData((prev: any[]) => (
        [mockup[rand], ...prev].slice(0, 15)
      ))
    }

    const timer = setInterval(updateData, 2000);
    return () => clearInterval(timer);
  }, []);

  const handleClick = (item: any) => {
    setSelectedItem(item)
    setShowModal(true);
  }

  return (
    <>
      <div className="relative pt-1">
        <div className="relative group/card p-0.5 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-gradient-to-b from-surface-2 to-background/0 to-80%">
          <div className="w-full h-full relative bg-background rounded-4xl-0.5">
            <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-0.5">
              <div className="w-full h-full transition-all ease-out duration-300 !bg-background"></div>
            </div>
            <div className="w-full h-full relative">
              <div className="flex flex-col pointer-events-auto relative">
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center sm:pr-5 sm:pt-5 pt-5">
                  <div className="flex gap-x-2 overflow-x-scroll px-5 scrollbar-hide sm:order-1">
                    <div className="flex flex-shrink-0">
                      <CheckableButton text="All Bets" checked={selectedTab == "all"} onClick={() => setSelectedTab("all")} />
                    </div>
                    <div className="flex flex-shrink-0">
                      <CheckableButton text="My Bets" checked={selectedTab == "mine"} onClick={() => setSelectedTab("mine")} />
                    </div>
                    <div className="flex flex-shrink-0">
                      <CheckableButton text="Huge Wins" checked={selectedTab == "huge"} onClick={() => setSelectedTab("huge")} />
                    </div>
                    <div className="flex flex-shrink-0">
                      <CheckableButton text="Biggest Payouts" checked={selectedTab == "biggest"} onClick={() => setSelectedTab("biggest")} />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col pt-5">
                  <div className="h-7">
                    <div>
                      <div className="px-5 py-1 transition-all duration-500 opacity-100">
                        <div className="grid text-on-surface/70 px-3 flex-shrink-0 grid-cols-12">
                          <span className="font-inter text-sm leading-[140%] font-medium text-on-surface-3 col-span-3">Game</span>
                          <span className="font-inter text-sm leading-[140%] font-medium text-on-surface-3 col-span-3">Username</span>
                          <span className="font-inter text-sm leading-[140%] font-medium text-on-surface-3 col-span-2 text-right">Bet Amount</span>
                          <span className="font-inter text-sm leading-[140%] font-medium text-on-surface-3 col-span-2 text-right">Multiplier</span>
                          <span className="font-inter text-sm leading-[140%] font-medium text-on-surface-3 text-right col-span-2">Payout</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex-grow">
                    <div className="relative px-5 transition-all duration-500 h-lg clip-path-inset-full">
                      {data.slice(0, isShowMore ? 15 : 10).map((item: any, index: any) => (
                        <div key={index} style={{ height: '2.9rem', opacity: 1 }}>
                          <button
                            onClick={() => handleClick(item)}
                            className="relative flex items-center text-xs  overflow-hidden flex-shrink-0 h-10 rounded-full w-full group/button bg-surface-1 border-transparent"
                          >
                            <div className="absolute inset-0 transition-all rounded-full duration-300 ease-out bg-surface-1"></div>
                            <div className="absolute inset-0 transition-all rounded-full duration-300 ease-out bg-on-surface-1 opacity-0 group-hover/button:opacity-[0.08] group-active/button:opacity-[0.16]"></div>
                            <div className="grid relative items-center px-3 py-2.5 w-full z-10 bg-transparent grid-cols-12">
                              <div className="flex items-center gap-1 pr-1 col-span-3">
                                <div className=" flex items-center">
                                  <img src={`/imgs/casino/${item.game.type}.svg`} alt="game" className=" flex items-center icon-container size-icon-s muted-icon" />
                                </div>
                                <span className="font-inter text-sm leading-[140%] truncate pr-2 text-on-surface-1 font-medium">
                                  {item.game.name}
                                </span>
                              </div>
                              <div className="col-span-3 flex items-center gap-1 pr-1">
                                <div className="flex items-center">
                                  <div className="relative rounded-full flex justify-center aspect-1 overflow-hidden size-icon-m">
                                    <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                                      <img alt="Bronze ghost" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" src={item.user.avatar} />
                                    </div>
                                  </div>
                                </div>
                                <div className="truncate group/username pointer-events-auto" role="button">
                                  <span className="font-inter text-sm leading-[140%] font-inter font-medium text-on-surface-3 truncate italic group-hover/username:text-on-surface-1">
                                    {getFormattedName(item.user.name)}
                                  </span>
                                </div>
                              </div>
                              <div className="col-span-2 text-right">
                                <div className="relative inline-block tabular-nums font-inter text-sm leading-[140%] font-medium" >
                                  <span className="relative transition-all duration-300 text-on-surface-3">
                                    $<span>{item.amount}</span>
                                  </span>
                                </div>
                              </div>
                              <div className="col-span-2 text-right">
                                <span className="font-inter text-sm leading-[140%] font-medium text-on-surface-3">
                                  {item.multiplier}x
                                </span>
                              </div>
                              <div className="text-right col-span-2">
                                <div className="relative inline-block tabular-nums font-inter text-sm leading-[140%] !font-extrabold" >
                                  <span className="relative transition-all duration-300 text-success-40">
                                    $<span>{item.payout}</span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          </button>
                        </div>
                      ))}

                      <div className="absolute w-full bottom-0 left-0 flex justify-center z-10 pb-2">
                        <div className="absolute h-40 w-full left-0 bottom-0 bg-gradient-to-t from-background select-none pointer-events-none"></div>
                        <RoundedButton
                          text={isShowMore ? 'Show Less' : 'Show More'}
                          textClassName="text-on-tertiary"
                          className="!w-36"
                          onClick={() => setIsShowMore(!isShowMore)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BettingInfoDialog item={selectedItem} open={showModal} onClose={() => setShowModal(false)} />
    </>
  );
}
