import { Close, SwapVert } from "@mui/icons-material";
import { Checkbox } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CheckableTabButton from "src/components/common/button/CheckableTabButton";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import RoundedButton from "src/components/common/button/RoundedButton";
import { hideFilterDrawer } from "src/redux/actions/uiAction";


const attributes = [
  { icon: "/imgs/casino/recent.svg", activeIcon: "/imgs/casino/recent-active.svg", text: "Recent", action: "recent" },
  { icon: "/imgs/casino/live-dealer.svg", activeIcon: "/imgs/casino/live-dealer-active.svg", text: "Live Dealer", action: "live" },
  { icon: "/imgs/casino/crash.svg", activeIcon: "/imgs/casino/crash-active.svg", text: "Crash", action: "crash" },
  { icon: "/imgs/casino/slots.svg", activeIcon: "/imgs/casino/slots-active.svg", text: "Slots", action: "slots" },
  { icon: "/imgs/casino/roulette.svg", activeIcon: "/imgs/casino/roulette-active.svg", text: "Roulette", action: "roulette" },
  { icon: "/imgs/casino/blackjack.svg", activeIcon: "/imgs/casino/blackjack-active.svg", text: "Blackjack", action: "blackjack" },
  { icon: "/imgs/casino/baccarat.svg", activeIcon: "/imgs/casino/baccarat-active.svg", text: "Baccarat", action: "baccarat" },
  { icon: "/imgs/casino/game-shows.svg", activeIcon: "/imgs/casino/game-shows-active.svg", text: "Game Shows", action: "game_shows" },
  { icon: "/imgs/casino/arcade.svg", activeIcon: "/imgs/casino/arcade-active.svg", text: "Arcade", action: "arcade" },
];

const studios = [
  { name: "Evolution", count: 90 },
  { name: "Pragmatic Play", count: 89 },
  { name: "Play'n Go", count: 24 },
  { name: "Nest", count: 5 },
  { name: "Betsoft", count: 362 },
  { name: "Playtech", count: 9 },
  { name: "Hacksaw Gaming", count: 930 },
  { name: "Spinonmin", count: 90 },
  { name: "Pragmatic Play", count: 89 },
  { name: "Play'n Go", count: 24 },
  { name: "Nest", count: 5 },
  { name: "Betsoft", count: 362 },
  { name: "Playtech", count: 9 },
  { name: "Hacksaw Gaming", count: 930 },
  { name: "Spinonmin", count: 90 },
  { name: "Pragmatic Play", count: 89 },
  { name: "Play'n Go", count: 24 },
  { name: "Nest", count: 5 },
  { name: "Betsoft", count: 362 },
  { name: "Playtech", count: 9 },
  { name: "Hacksaw Gaming", count: 930 },
  { name: "Spinonmin", count: 90 },
]

const themes = [
  { name: "Evolution", count: 90 },
  { name: "Pragmatic Play", count: 89 },
  { name: "Play'n Go", count: 24 },
  { name: "Nest", count: 5 },
  { name: "Betsoft", count: 362 },
  { name: "Playtech", count: 9 },
  { name: "Hacksaw Gaming", count: 930 },
  { name: "Spinonmin", count: 90 },
  { name: "Pragmatic Play", count: 89 },
  { name: "Play'n Go", count: 24 },
  { name: "Nest", count: 5 },
  { name: "Betsoft", count: 362 },
  { name: "Playtech", count: 9 },
  { name: "Hacksaw Gaming", count: 930 },
  { name: "Spinonmin", count: 90 },
  { name: "Pragmatic Play", count: 89 },
  { name: "Play'n Go", count: 24 },
  { name: "Nest", count: 5 },
  { name: "Betsoft", count: 362 },
  { name: "Playtech", count: 9 },
  { name: "Hacksaw Gaming", count: 930 },
  { name: "Spinonmin", count: 90 },
]


export default function FilterDrawer({
  isShow,
}: {
  isShow: any;
}) {

  const dispatch = useDispatch();

  const [filters, setFilters] = useState<{
    attributes: any[];
    studios: any[];
    themes: any[];
  }>({
    attributes: [],
    studios: [],
    themes: []
  });

  const handleClear = () => {
    setFilters({
      attributes: [],
      studios: [],
      themes: []
    });
  }

  const handleToggleAttribute = (value: string) => {
    if (filters.attributes.includes(value)) {
      setFilters({
        ...filters,
        attributes: filters.attributes.filter(item => item != value)
      });
    } else {
      setFilters({
        ...filters,
        attributes: [...filters.attributes, value]
      });
    }
  }
  const handleToggleStudio = (value: string) => {
    if (filters.studios.includes(value)) {
      setFilters({
        ...filters,
        studios: filters.studios.filter(item => item != value)
      });
    } else {
      setFilters({
        ...filters,
        studios: [...filters.studios, value]
      });
    }
  }
  const handleToggleThemes = (value: string) => {
    if (filters.themes.includes(value)) {
      setFilters({
        ...filters,
        themes: filters.themes.filter(item => item != value)
      });
    } else {
      setFilters({
        ...filters,
        themes: [...filters.themes, value]
      });
    }
  }

  const handleClose = () => {
    dispatch(hideFilterDrawer());
  }

  const handleSearch = () => {
    dispatch(hideFilterDrawer());
  }

  return (
    <div className={`filters-overlay h-full fixed right-0 top-0 flex z-sideSheet sm:pt-20 max-w-full w-lg ease-in-out transition-all duration-500  ${isShow ? 'translate-x-0' : 'translate-x-full'} `}>
      <div className="relative z-[99] bg-background  flex w-full overflow-hidden transform transition ease-in-out duration-500 border-t-[0.25rem] border-l-[0.25rem] border-surface-2 rounded-tl-4xl  shadow">
        <div className="relative flex-grow w-full">
          <div className="rounded-tl-2xl relative h-full overflow-auto scrollbar-hide ">
            <div className="flex flex-row w-full items-center justify-between pt-3 pb-3 pl-5 pr-5 sticky top-0 bg-background z-40">
              <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1">Filters</span>
              <div className="flex flex-row gap-x-2 justify-end">
                {filters.attributes.length + filters.studios.length + filters.themes.length > 0 &&
                  <div>
                    <RoundedButton text="Clear All" textClassName="text-on-tertiary" className="!h-10" onClick={handleClear} />
                  </div>
                }
                <div>
                  <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={handleClose} />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full justify-between flex-auto px-5 pb-5">
              <div>
                <div className="mb-5">
                  <div className="font-bold text-on-surface  mb-1.5">Attributes</div>
                  <div className="grid grid-cols-6 gap-2">
                    {attributes.map((item, index) => (
                      <div key={index} className="col-span-2">
                        <CheckableTabButton
                          {...item}
                          checked={filters.attributes.includes(item.action)}
                          onClick={() => handleToggleAttribute(item.action)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mb-5">
                  <div className="relative">
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="font-bold text-on-surface ">Studio Name</label>
                      <button className="flex items-center text-xs text-primary transition-colors duration-200 hover:text-primary-lighter">
                        <div className="overflow-hidden whitespace-nowrap text-on-tertiary-1">Recommended</div>
                        <SwapVert className="h-2 ml-1 text-on-tertiary-1" />
                      </button>
                    </div>
                    <div className="bg-surface-1 rounded-xl">
                      <div className=" py-1">
                        <div className={`flex flex-col overflow-hidden h-[320px]`}>
                          {studios.map((item, index) => (
                            <div key={index} className="order-1 transition-all delay-300 duration-300 h-10">
                              <div className=" flex items-center justify-between px-2 py-1 cursor-pointer transition duration-200 group capitalize focus-visible:!ring-0 focus-visible:!ring-offset-0 focus-visible:ring-transparent focus-visible:!shadow-none !outline-none ">
                                <div className="flex items-center gap-x-2.5">
                                  <Checkbox
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                    checked={filters.studios.includes(item.name)}
                                    onClick={() => handleToggleStudio(item.name)}
                                  />
                                  <div className="text-sm transition-all ease-out duration-300 text-on-surface/60 group-hover:text-on-surface/70 ">{item.name}</div>
                                </div>
                                <div className="text-on-surface/30 text-xs">{item.count}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="order-3">
                          <button className=" text-on-tertiary-1 px-2 py-0.5 text-sm flex items-center gap-x-2.5 bg-surface-2 mt-1 -mb-1 rounded-b-xl w-full transition-all duration-200 hover:text-on-surface hover:bg-surface-3 ">
                            <div className="w-8 aspect-1 text-center flex items-center justify-center text-2xl">+</div>
                            <span>Show more</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="relative">
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="font-bold text-on-surface ">Themes</label>
                      <button className="flex items-center text-xs text-primary transition-colors duration-200 hover:text-primary-lighter">
                        <div className="overflow-hidden whitespace-nowrap text-on-tertiary-1">Recommended</div>
                        <SwapVert className="h-2 ml-1 text-on-tertiary-1" />
                      </button>
                    </div>
                    <div className="bg-surface-1 rounded-xl">
                      <div className=" py-1">
                        <div className={`flex flex-col overflow-hidden h-[320px]`}>
                          {themes.map((item, index) => (
                            <div key={index} className="order-1 transition-all delay-300 duration-300 h-10">
                              <div className=" flex items-center justify-between px-2 py-1 cursor-pointer transition duration-200 group capitalize focus-visible:!ring-0 focus-visible:!ring-offset-0 focus-visible:ring-transparent focus-visible:!shadow-none !outline-none ">
                                <div className="flex items-center gap-x-2.5">
                                  <Checkbox
                                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                    checked={filters.themes.includes(item.name)}
                                    onClick={() => handleToggleThemes(item.name)}
                                  />
                                  <div className="text-sm transition-all ease-out duration-300 text-on-surface/60 group-hover:text-on-surface/70 ">{item.name}</div>
                                </div>
                                <div className="text-on-surface/30 text-xs">{item.count}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="order-3">
                          <button className=" text-on-tertiary-1 px-2 py-0.5 text-sm flex items-center gap-x-2.5 bg-surface-2 mt-1 -mb-1 rounded-b-xl w-full transition-all duration-200 hover:text-on-surface hover:bg-surface-3 ">
                            <div className="w-8 aspect-1 text-center flex items-center justify-center text-2xl">+</div>
                            <span>Show more</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {filters.attributes.length + filters.studios.length + filters.themes.length > 0 &&
                  <div className="z-40 flex justify-center bg-surface-3 p-5 fixed right-0 bottom-0 max-w-full w-lg transition-all duration-300 ease-out">
                    <RoundedButton
                      text={`See 666 results`}
                      className="!bg-primary "
                      textClassName="text-on-primary"
                      onClick={handleSearch}
                    />
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
