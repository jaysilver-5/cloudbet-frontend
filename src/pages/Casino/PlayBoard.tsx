import { useNavigate, useParams } from "react-router-dom";
import LiveBettingsPanel from "../../components/LiveBettingsPanel";
import { useState } from "react";
import { Close, Fullscreen, KeyboardArrowRight } from "@mui/icons-material";

import { Swiper, SwiperSlide } from "swiper/react";
import CasinoItem from "src/components/CasinoItem";
import CheckableButton from "src/components/common/button/CheckableButton";

import CircleIconButton from "src/components/common/button/CircleIconButton";
import { IOSSwitch } from "src/components/common/switch/IOSSwitch";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import mockup from "src/mockup/casino.json";

export default function PlayBoard() {

  const navigate = useNavigate();
  const handle = useFullScreenHandle();

  const { item: casinoId } = useParams();
  const [gameInfo, setGameInfo] = useState<any>({
    "id": "blackjack",
    "name": "Blackjack Lobby",
    "logo": "https://res.cloudinary.com/betengine/image/upload/q_auto:best,f_webp,dpr_auto,w_250/casino-hub-files/6b71ccfb-0a4a-4153-a98e-40db5ebd560e.jpg",
    "logo2": "https://bshots.egcvi.com/thumbnail/mdc2_mw_en_med_L.jpg?t=1737596779204",
    "studio": "Pragmatic Play",
    "theme": "Egyptian",
    "real": "https://aeucw.playngonetwork.com/casino/ContainerLauncher?channel=desktop&gameid=603&lang=en_US&origin=https%3A%2F%2Fcloudbet.com&pid=194&practice=0&ticket=38SzrDxLsd8wf_GZi63_RNh6lDU",
    "demo": "https://aeucw.playngonetwork.com/casino/ContainerLauncher?channel=desktop&gameid=603&lang=en_US&origin=https%3A%2F%2Fcloudbet.com&pid=194&practice=0&ticket=38SzrDxLsd8wf_GZi63_RNh6lDU",
    "rtp": "92.2%",
    "volatility": "High",
    "minBet": 0.2,
    "maxBet": 30
  });

  const [mode, setMode] = useState("real");

  const handleClose = () => {
    navigate(-1);
  }

  const handleFullScreen = () => {
    handle.enter();
  }

  return (
    <div className="transform transition-transform duration-300 ease-in-out relative">
      <div className="w-full pb-10">
        <div className="pb-5 sm:pb-8 xl:-mx-24 xl:px-8 my-2.5">
          <div className="relative flex z-[99] rounded-4xl bg-surface-1">
            <div className="block rounded-4xl  relative  transition-all ease-out duration-300   w-full  md:aspect-[16/9] md:max-h-[85vh] ">
              <div className=" z-30 px-3 lg:px-4 absolute left-0 top-0 w-full bg-gradient-to-b from-background sm:relative sm:bg-surface-1 sm:from-transparent sm:rounded-t-2xl ">
                <div className="flex flex-row items-center justify-between relative">
                  <div className="flex items-center space-x-3 ml-auto scale-[85%] absolute right-0 top-1 md:-right-[3.3rem] lg:scale-100 lg:-right-16 lg:top-0 lg:flex lg:items-center lg:space-x-3 lg:z-[50] xl:-right-20"></div>
                </div>
              </div>
              <div className="relative w-full bg-surface-1 overflow-hidden  md:aspect-[16/9] md:max-h-[85vh]  rounded-4xl">
                <img alt="Cloudbet Image" className="w-full absolute blur-2xl opacity-30 top-0 left-0 object-cover scale-105 md:aspect-[16/9] md:max-h-[85vh] " src={gameInfo?.logo} />
                <img alt="Cloudbet Image" className="hidden md:block w-full max-w-[240px] drop-shadow-2xl rounded-2xl absolute left-0 right-0 bottom-0 m-auto top-0 object-contain shadow-xxl shadow-glow-4 shadow-blackish/25 animate-throb " src={gameInfo?.logo} />
                <div className="wrapper">
                  <FullScreen handle={handle}>
                    <iframe src={gameInfo?.[mode]} className="w-full h-full absolute z-10" frameBorder="0" seamless scrolling="no" />
                  </FullScreen>
                </div>
              </div>
            </div>
            <div className="flex flex-col basis-auto flex-grow justify-between items-center text-center py-4">
              <div>
                <CircleIconButton
                  iconComponent={<Close />}
                  className="!w-10 !h-10 bg-tertiary-2"
                  onClick={handleClose}
                />
              </div>

              <div className="flex flex-col items-center my-auto uppercase gap-8 px-1">
                <button
                  onClick={() => { }}
                  className="w-10 p-1 pb-2 bg-tertiary-2 rounded-full relative overflow-hidden group active:scale-95"
                >
                  <div className="absolute inset-0 transition-all duration-300 ease-out bg-on-surface-1 opacity-0 group-hover:opacity-[0.06] group-active:opacity-[0.12]"></div>
                  <div className="relative rounded-full flex justify-center aspect-1 overflow-hidden size-icon-xl">
                    <div className="w-full h-full flex justify-center items-center transition-opacity duration-300 ease-in-out absolute top-0 left-0 opacity-0">
                      <div className="w-full h-full bg-surface-1 text-on-surface-2 flex justify-center items-center uppercase font-bold">
                        <span className="font-inter text-2xl leading-[120%]">$</span>
                      </div>
                    </div>
                    <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                      <img alt="USD" loading="eager" decoding="async" data-nimg="fill" className="object-cover" src="https://res.cloudinary.com/betengine/image/upload/q_auto/f_webp/v1/media-cloudbet/wallet/currency-icons/USD?_a=DATAdtAAZAA0" />
                    </div>
                  </div>
                  <span className="font-inter leading-[140%] text-xs font-bold">USD</span>
                </button>
                <div className="flex flex-col items-center gap-4 cursor-pointer group">
                  <span className="font-inter leading-[140%] uppercase text-xs text-on-surface-1">Demo</span>
                  <div className="rotate-90">
                    <IOSSwitch
                      className="ml-auto"
                      checked={mode == 'real'}
                      onChange={(e, checked) => setMode(checked ? 'real' : 'demo')}
                    />
                  </div>
                  <span className="font-inter leading-[140%] uppercase text-xs text-on-surface-3">Real</span>
                </div>
              </div>

              <div className="">
                <CircleIconButton
                  iconComponent={<Fullscreen className="!text-3xl" />}
                  className="!w-10 !h-10  bg-tertiary-2"
                  onClick={handleFullScreen}
                />
              </div>
            </div>
          </div>
        </div>

        <LiveBettingsPanel />

        <div className="bg-background pb-5 pt-10">
          <div className="inline-flex justify-between text-on-background items-center mb-5">
            <div className="text-on-background font-bold text-lg">
              <div className="hidden sm:flex">
                <ol className="flex items-center space-x-1 text-xs !list-none">
                  <li>
                    <div className="flex items-center space-x-1">
                      <CheckableButton text={"Lobby"} />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-1">
                      <KeyboardArrowRight className="size-icon-m text-tertiary-3" />
                      <CheckableButton text={"Slots"} />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-1">
                      <KeyboardArrowRight className="size-icon-m text-tertiary-3" />
                      <div className="flex items-center !font-normal">
                        <span className="font-inter text-base leading-[140%] text-on-surface-1">{gameInfo?.name}</span>
                        <span className="font-inter text-base leading-[140%] text-on-surface-3 ml-1">{gameInfo?.studio}</span>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap -mx-5 sm:mx-0">
              <div className="w-full flex flex-col lg:flex-wrap lg:flex-row gap-4">
                <div className="flex-auto basis-1/3">
                  <div className="relative group/card p-0.5 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-gradient-to-b from-surface-2 to-background/0 to-80%">
                    <div className="w-full h-full relative bg-background rounded-4xl-0.5">
                      <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-0.5">
                        <div className="w-full h-full transition-all ease-out duration-300 !bg-background"></div>
                      </div>
                      <div className="w-full h-full relative">
                        <div className="p-5 flex flex-col gap-2.5">
                          <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1">Details</span>
                          <div className="flex items-center justify-between">
                            <span className="font-inter leading-[140%] text-sm text-on-surface-3">RTP</span>
                            <div className="flex items-center space-x-2 !font-bold">
                              <span className="font-inter text-base leading-[140%]">{gameInfo?.rtp}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-inter leading-[140%] text-sm text-on-surface-3">Studio</span>
                            <span className="font-inter text-base leading-[140%] text-on-tertiary-1 flex items-center font-bold">
                              <a href="/beta/en/casino/studio/png">
                                <span className="font-inter text-base leading-[140%]">{gameInfo?.studio}</span>
                              </a>
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-inter leading-[140%] text-sm text-on-surface-3">Volatility</span>
                            <span className="font-inter text-base leading-[140%] flex items-center font-bold">{gameInfo?.volatility}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="font-inter leading-[140%] text-sm text-on-surface-3">Min-Max Bet</span>
                            <span className="font-inter text-base leading-[140%] flex items-center font-bold">{gameInfo?.minBet} - {gameInfo?.maxBet} EUR</span>
                          </div>
                          <div className="flex items-center flex-wrap gap-2 relative"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-auto basis-1/3">
                  <div className="relative group/card p-0.5 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-gradient-to-b from-surface-2 to-background/0 to-80%">
                    <div className="w-full h-full relative bg-background rounded-4xl-0.5">
                      <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-0.5">
                        <div className="w-full h-full transition-all ease-out duration-300 bg-surface-2 !bg-background" ></div>
                      </div>
                      <div className="w-full h-full relative">
                        <div className="p-5 flex flex-col gap-4">
                          <div className="flex flex-col gap-0.5">
                            <div>
                              <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1">{gameInfo?.name}</span>
                            </div>
                            <span className="font-inter text-base leading-[140%] text-on-surface-3">by {gameInfo?.studio}</span>
                          </div>
                          <span className="font-inter text-base leading-[140%] text-sm text-on-surface-3">
                            <div></div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div>
            <div className="flex flex-col !mb-6 mt-6 false">
              <header className="flex items-center relative min-h-14 z-10 false">
                <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1 mr-3">Similar to {gameInfo?.name}</span>
              </header>
              <div className="w-full relative">
                <Swiper
                  className="w-full"
                  spaceBetween={10}
                  slidesPerView={"auto"}
                  loop={false}
                  navigation={false}
                  onSlideChange={() => { }}
                  onSwiper={(swiper: any) => { }}
                >
                  {mockup.items?.map((item: any, index: any) => (
                    <SwiperSlide key={index} className="!w-64 p-2">
                      <div className="">
                        <CasinoItem
                          item={item}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
