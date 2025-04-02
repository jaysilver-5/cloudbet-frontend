import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CasinoHeroItem from "src/components/CasinoHeroItem";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import CheckableTabButton from "src/components/common/button/CheckableTabButton";
import RoundedInput from "src/components/common/input/RoundedInput";

import IconSearch from "../../assets/imgs/main/icon-search.svg";
import IconFilter from "../../assets/icons/setting.svg";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import CheckableButton from "src/components/common/button/CheckableButton";
import { hideFilterDrawer, showFilterDrawer } from "src/redux/actions/uiAction";
import { useRDrawer } from "src/hooks/useRDrawer";
import { useDispatch } from "react-redux";

const heroItems = [
  {
    title: "$2500", description: "WELCOME PACKAGE", actionName: "Deposit To Unlock", image: "https://res.cloudinary.com/betengine/image/upload/v1730272271/Purple_Coins-main.webp", titleClassName: "text-primary !text-3xl", bgClassName: "bg-primary", svgClassName: "text-surface-3", actionClassName: "text-primary", action: "",
  },
  {
    title: "We're on Telegram", description: "Join our community here!", actionName: "Let's Go", image: "https://cdn.getjoystick.com/FrT2DZ55/ucghRmGU/f5bce2f2-dba4-44a1-8da8-2eae5354d50e.webp", titleClassName: "text-brand-blue-light", bgClassName: "bg-brand-blue", svgClassName: "text-background", action: "",
  },
  {
    title: "Le Viking", description: "New from Hacksaw Gaming", actionName: "Play Now", image: "https://res.cloudinary.com/betengine/image/upload/v1737029546/casino-assets/Casino%20Promotions/Lobby%20Top%20Carousel/March%20-%202024/hacksaw_gaming_le_viking_foreground.png", titleClassName: "text-brand-purple-light", bgClassName: "bg-brand-purple", svgClassName: "text-brand-purple", action: "",
  },
  {
    title: "xWays Hoarder 2", description: "New from Nolimit City", actionName: "Play Now", image: "https://res.cloudinary.com/betengine/image/upload/v1736861802/casino-assets/Casino%20Promotions/Lobby%20Top%20Carousel/March%20-%202024/nolimit_city_xways_hoarder_2_foreground.png", titleClassName: "text-brand-purple-light", bgClassName: "bg-brand-purple", svgClassName: "text-brand-purple", action: "",
  },
  {
    title: "Kraken's Cove", description: "New from Relax Gaming", actionName: "Play Now", image: "https://res.cloudinary.com/betengine/image/upload/v1736861850/casino-assets/Casino%20Promotions/Lobby%20Top%20Carousel/March%20-%202024/relax_gaming_krakens_cove_foreground_v1.png", titleClassName: "text-brand-purple-light", bgClassName: "bg-brand-purple", svgClassName: "text-brand-purple", action: "",
  },
  {
    title: "Live Casino", description: "Real dealers, real thrills", actionName: "Join the action", image: "https://res.cloudinary.com/betengine/image/upload/v1723450110/casino-assets/Casino%20Promotions/Lobby%20Top%20Carousel/March%20-%202024/Live_Casino.webp", titleClassName: "text-brand-purple-light", bgClassName: "bg-brand-purple", svgClassName: "text-brand-purple", action: "",
  },
  {
    title: "Arcade Favorites", description: "Now available", actionName: "See available games", image: "https://res.cloudinary.com/betengine/image/upload/v1723452138/casino-assets/Casino%20Promotions/Lobby%20Top%20Carousel/March%20-%202024/Dice.webp", titleClassName: "text-brand-blue-pale", bgClassName: "bg-brand-blue-light", svgClassName: "text-brand-blue", action: "",
  },
  {
    title: "Pragmatic Play", description: "Drops & Wins event", actionName: "Play Now", image: "https://res.cloudinary.com/betengine/image/upload/v1715095542/casino-assets/Casino%20Promotions/Lobby%20Top%20Carousel/March%20-%202024/pragmatic_play_big_bass_splash_foreground_v3.png", titleClassName: "text-brand-orange", bgClassName: "bg-brand-orange", svgClassName: "text-brand-orange", action: "",
  },
]

const tabs = [
  { icon: "/imgs/casino/home.svg", activeIcon: "/imgs/casino/home-active.svg", text: "For You", action: "" },
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

const filters = [
  { icon: "/imgs/casino/high-roller.svg", activeIcon: "/imgs/casino/high-roller-active.svg", text: "High Roller", value: "high-roller" },
  { icon: "/imgs/casino/evolution.svg", activeIcon: "/imgs/casino/evolution-active.svg", text: "Evolution", value: "evolution" },
  { icon: "/imgs/casino/pragmatic-play.svg", activeIcon: "/imgs/casino/pragmatic-play-active.svg", text: "Pragmatic Play", value: "pragmatic-play" },
  { icon: "/imgs/casino/trending.svg", activeIcon: "/imgs/casino/trending-active.svg", text: "Trending", value: "trending" },
  { icon: "/imgs/casino/new.svg", activeIcon: "/imgs/casino/new-active.svg", text: "New", value: "new" },
  { icon: "/imgs/casino/hot.svg", activeIcon: "/imgs/casino/hot-active.svg", text: "Hot", value: "hot" },
  { icon: "/imgs/casino/cold.svg", activeIcon: "/imgs/casino/cold-active.svg", text: "Cold", value: "cold" },
]

export default function Header({
  onFilter,
}: {
  onFilter?: any;
}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [searchText, setSearchText] = useState("");
  const [filterValues, setFilterValues] = useState<any>([]);

  const rdrawer = useRDrawer();

  const handleNavigate = (path: any) => {
    navigate("/casino/" + path);
  }

  const handleClickFilter = () => {
    if (rdrawer.isFilter) {
      dispatch(hideFilterDrawer());
    } else {
      dispatch(showFilterDrawer());
    }
  }

  const handleFilter = (value: any) => {
    if (filterValues.includes(value)) {
      setFilterValues(filterValues.filter((item: any) => item != value));
    } else {
      setFilterValues([...filterValues, value]);
    }
  }

  useEffect(() => {
    if (onFilter) {
      onFilter({
        keyword: searchText,
        filters: filterValues
      });
    }
  }, [searchText, filterValues]);

  return (
    <>
      <div className="w-full relative text-surface-3">
        <section className="relative mx-auto max-w-full pt-2 off-hidden block md:block z-[11]">
          <Swiper
            className="w-full"
            spaceBetween={14}
            slidesPerView={4}
            loop={false}
            navigation={false}
            onSlideChange={() => { }}
            onSwiper={(swiper: any) => { }}
          >
            {heroItems.map((item, index) => (
              <SwiperSlide key={index} className="min-w-[400px]">
                <CasinoHeroItem
                  {...item}
                  onClick={() => navigate(item.action)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="relative overflow-hidden lg:mr-0 z-10">
          <Swiper
            className="w-full"
            spaceBetween={8}
            slidesPerView={"auto"}
            loop={false}
            navigation={false}
            onSlideChange={() => { }}
            onSwiper={(swiper: any) => { }}
          >
            {tabs.map((item, index) => (
              <SwiperSlide key={index} className="!w-36">
                <CheckableTabButton
                  {...item}
                  checked={pathname == `/casino/${item.action}`}
                  onClick={() => handleNavigate(item.action)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="relative z-50 flex flex-col -mb-4 lg:justify-between lg:flex-row lg:gap-x-2 lg:my-0 lg:mx-0 pt-8 md:pt-6">
          <div className="flex gap-x-2 shrink-0 mb-3">
            <RoundedInput
              icon={IconSearch}
              placeholder={"Search for Casino games"}
              value={searchText}
              onChange={(value: any) => setSearchText(value)}
            />
            <CircleIconButton
              icon={IconFilter}
              onClick={handleClickFilter}
            />
          </div>

          <div className="relative sm:-mx-0 lg:m-0 w-auto md:mr-0 lg:w-fit md:overflow-hidden">
            <div className="relative w-full">
              <div className="flex overflow-auto scrollbar-hide transition-all duration-300 relative scroll-smooth lg:justify-end">
                <div className="flex relative items-center gap-x-2 lg:gap-x-0">
                  <div className="flex items-center px-5 sm:px-0">
                    {filters.map((item: any, index: any) => (
                      <div className="flex flex-shrink-0 last:!mr-0 group lg:justify-end mr-1">
                        <CheckableButton
                          {...item}
                          checked={filterValues.includes(item.value)}
                          onClick={() => handleFilter(item.value)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
