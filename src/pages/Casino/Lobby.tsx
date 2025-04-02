import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import SearchResult from "./SearchResult";
import CasinoItem from "src/components/CasinoItem";

import mockup from "src/mockup/casino.json";
import mockupLobby from "src/mockup/casino_lobby.json";
import LiveBettingsPanel from "../../components/LiveBettingsPanel";
import { HelpOutline, PlayArrowOutlined } from "@mui/icons-material";

export default function Lobby() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState<any>(null);
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setCategories(mockupLobby.categories);
    setData(mockup);
  }

  const handleItemClick = (item: any) => {
    navigate(`/casino/play/${item.id}`);
  }

  const renderStudios = (studios: any[]) => {
    return (
      <div className="flex flex-col !mb-6 mt-6">
        <div className="flex items-center relative min-h-14 z-10">
          <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1">All Studios</span>
        </div>
        <div className="w-full relative">
          <Swiper
            className="w-full"
            spaceBetween={16}
            slidesPerView={"auto"}
            loop={false}
            navigation={false}
            onSlideChange={() => { }}
            onSwiper={(swiper: any) => { }}
          >
            {studios?.map((item: any, index: any) => (
              <SwiperSlide key={index} className="!w-52">
                <a title={item.name} href={`/casino/studio${item.href}`} className="bg-surface-1 rounded-3xl block h-24 px-3 py-1 group overflow-hidden">
                  <div className="flex justify-center items-center h-full w-full relative">
                    <div className="flex justify-center items-center h-full w-full absolute inset-0">
                      <img loading="lazy" src={item.logo} alt={item.name} className="w-5/6 h-full object-contain blur-2xl opacity-0 transition-all duration-300 ease-out group-hover:opacity-70" />
                    </div>
                    <img loading="lazy" src={item.logo} alt={item.name} className="relative w-1/2 h-1/2 max-w-full max-h-full object-contain transition-all transform-gpu duration-500 ease-out group-hover:scale-105" />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
  }

  const renderThemes = (groups: any[]) => {
    return (
      <div className="!mb-6 py-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {groups?.map((item: string, index) => (
            <div key={index} className="relative group/card p-1 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-surface-1">
              <div className="rounded-4xl absolute top-0 left-0 w-full h-full overflow-hidden">
                <div>
                  <div className="transition-[transform,opacity] duration-500 ease-out absolute transform-gpu w-full h-full -translate-x-full -translate-y-full opacity-0 blur-xl group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 bg-secondary"
                    style={{ backgroundImage: `url("${mockup.items[index * 3].logo}")` }}></div>
                  <div className="absolute transform-gpu w-full h-full -translate-x-1/2 -translate-y-3/4 rounded-full bg-secondary blur-3xl"
                    style={{ backgroundImage: `url("${mockup.items[index * 3].logo}")` }}></div>
                </div>
              </div>
              <div className="w-full h-full relative bg-background rounded-4xl-1">
                <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-1">
                  <div className="w-full h-full transition-all ease-out duration-300 bg-surface-2 !bg-background"></div>
                </div>
                <div className="w-full h-full relative">
                  <div className="relative w-full h-full">
                    <div className="h-[70%] inset-0 absolute overflow-hidden rounded-3xl-1">
                      <div className="absolute inset-0 w-full blur-2xl opacity-30 h-full"
                        style={{ backgroundImage: `url("${mockup.items[index * 3].logo}")`, backgroundSize: 'cover', backgroundPosition: 'center center' }}></div>
                      <div className="absolute inset-0 w-full bg-gradient-to-t h-full from-background to-transparent"></div>
                    </div>
                    <a href={`/casino/themes/${item}`} className="">
                      <div className="relative z-20 flex flex-row lg:flex-col">
                        <header className="flex flex-col items-start lg:items-center lg:flex-row relative h-full p-2.5">
                          <div className="flex flex-col items-start z-20 px-2.5 py-9 lg:py-2">
                            <span className="font-inter text-3xl leading-[120%] font-Midnight uppercase">{item}</span>
                            <span className="font-inter text-2xl leading-[120%] opacity-70 font-light">42 Games</span>
                          </div>
                        </header>
                        <div className="block lg:hidden absolute inset-0 overflow-hidden">
                          <div className="absolute right-0 top-0 bottom-0 transform rotate-[25deg] w-[30%] translate-x-[20%] sm:w-[20%] sm:translate-x-0">
                            <div className="grid grid-cols-2 gap-1 h-full">
                              {mockup.items.slice(index * 3, index * 3 + 6).map((citem: any, cindex) => (
                                <div className="flex-none w-full" key={cindex}>
                                  <div className="transition-transform duration-800 delay-0 ease-in-out transform">
                                    <div className="TileImage-wrapper relative group">
                                      <div className="aspect-[30/23] w-full rounded-3xl-1 relative overflow-hidden backface-fix transition-all transform-gpu ease-out duration-500 delay-200 bg-surface-1 z-10">
                                        <img src={citem.logo} className="h-full w-full rounded-3xl-1 object-cover object-center backface-fix  transition-all transform-gpu ease-out duration-500 delay-200 group-hover:scale-[1.05] group-hover:delay-300 group-hover:opacity-100" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="hidden lg:grid grid-cols-3 gap-2 px-3 pt-1 pb-3 mt-auto relative z-20 duration-300 ease-out hover:-translate-y-0.5 active:scale-95">
                          {mockup.items.slice(index * 3, index * 3 + 6).map((citem: any, cindex) => (
                            <div className="aspect-[30/23]" key={cindex}>
                              <div className="transition-transform duration-800 delay-0 ease-in-out transform">
                                <div className="TileImage-wrapper relative group">
                                  <div className="aspect-[30/23] w-full rounded-3xl-1 relative overflow-hidden backface-fix transition-all transform-gpu ease-out duration-500 delay-200 bg-surface-1 z-10">
                                    <img src={citem.logo} className="h-full w-full rounded-3xl-1 object-cover object-center backface-fix  transition-all transform-gpu ease-out duration-500 delay-200 group-hover:scale-[1.05] group-hover:delay-300 group-hover:opacity-100" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }


  const renderRankingsItem = (type: any) => {
    let bgCls = 'bg-brand-orange';
    let textCls = 'text-brand-orange';
    let img = "https://res.cloudinary.com/betengine/image/upload/f_auto,q_auto/v1/media-cloudbet/hot-object";
    if (type == 'colds') {
      bgCls = 'bg-brand-blue-light';
      textCls = 'text-brand-blue-pale';
      img = "https://res.cloudinary.com/betengine/image/upload/f_auto,q_auto/v1/media-cloudbet/cold-object";
    }

    return (
      <div className="hidden md:block">
        <div className="relative p-1 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-surface-1">
          <div className="rounded-4xl absolute top-0 left-0 w-full h-full overflow-hidden">
            <div>
              <div className={`absolute transform-gpu w-full h-full -translate-x-1/2 -translate-y-3/4 rounded-full ${bgCls}  blur-5xl`}></div>
            </div>
          </div>
          <div className="w-full h-full relative bg-background rounded-4xl-1">
            <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-1">
              <div className="w-full h-full transition-all ease-out duration-300  !bg-background"></div>
            </div>
            <div className="w-full h-full relative">
              <div className="flex flex-col">

                <header className="relative flex w-full h-full">
                  <div className="absolute w-[100%] h-[calc(100%+6rem)] right-0 bottom-[-2rem] overflow-hidden backface-fix">
                    <img loading="eager"
                      src={img}
                      alt="Slots Character"
                      className="absolute bottom-0 right-0 h-40 w-56 max-w-none object-contain origin-bottom" />
                  </div>
                  <div className="relative text-on-surface z-20">
                    <div className="flex flex-col sm:p-5 sm:pb-0">
                      <span className="font-inter text-2xl leading-[120%] font-inter text-on-surface-1 uppercase">Top 5</span>
                      <div className="relative">
                        <div className="flex items-center space-x-2 relative">
                          {type == 'hots' ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon-container size-icon-l default-icon"><path fill="#FF6B2F" d="M11.883.71C10.616 3.55 9.66 4.954 7.898 7.42c-.527-.717-.662-1.284-.878-2.379-1.041 1.636-3.387 4.167-3.384 8.7.003 6.542 4.194 9.317 7.736 9.317 3.537 0 8.748-.958 8.988-8.927.191-6.375-5.202-11.505-8.477-13.42Z"></path><path fill="#FF9A59" d="M6.335 18.141c-1.785-4.078 2.898-9.143 5.62-10.983 2.441 1.77 6.712 6.59 5.304 10.983-1.58 4.931-8.73 5.009-10.924 0"></path></svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon-container size-icon-l default-icon"><path fill="#CCD0E5" d="M22.05 13.557a.81.81 0 0 1-.445 1.055l-2.25.916 2.082 1.251a.81.81 0 1 1-.834 1.389l-2.083-1.252.248 2.418a.81.81 0 0 1-1.61.165l-.373-3.626-3.98-2.39v4.643l2.915 2.187a.81.81 0 1 1-.972 1.296l-1.944-1.458v2.43a.81.81 0 1 1-1.62 0v-2.43L9.24 21.609a.81.81 0 0 1-.972-1.296l2.916-2.187v-4.644l-3.98 2.392L6.83 19.5a.81.81 0 0 1-1.611-.166l.248-2.417-2.082 1.251a.81.81 0 1 1-.835-1.388l2.083-1.252-2.25-.915a.81.81 0 0 1 .61-1.5l3.376 1.372 4.052-2.434L6.37 9.615l-3.377 1.373a.81.81 0 0 1-.61-1.5l2.25-.916L2.551 7.32a.81.81 0 1 1 .834-1.388l2.083 1.252-.248-2.418A.81.81 0 1 1 6.83 4.6l.373 3.626 3.98 2.392V5.975L8.268 3.788a.81.81 0 1 1 .972-1.296l1.944 1.458V1.52a.81.81 0 0 1 1.62 0v2.43l1.944-1.458a.81.81 0 1 1 .972 1.296l-2.916 2.187v4.644l3.98-2.392.373-3.626a.81.81 0 0 1 1.611.166l-.248 2.417 2.083-1.251a.81.81 0 1 1 .834 1.388l-2.083 1.252 2.25.915a.81.81 0 0 1-.61 1.5l-3.376-1.372-4.051 2.434 4.052 2.435 3.376-1.373a.809.809 0 0 1 1.055.445"></path></svg>
                          }
                          <span className={`font-inter text-3xl leading-[120%] font-Midnight uppercase ${textCls}`}>
                            {type == 'hots' ? 'Hot Slots' : 'Cold Slots'}
                          </span>
                          <button className="text-on-surface opacity-60 transition-all duration-300 ease-out hover:opacity-100 hover:scale-110">
                            <HelpOutline className="icon-container size-icon-l default-icon" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute translate-y-[40%] lg:translate-y-[35%] inset-0 w-full bg-gradient-to-t h-full from-background to-transparent"></div>
                </header>
                <div className="relative text-on-surface z-20 flex flex-col gap-y-1 !pt-0 min-h-[3rem]">
                  <div className="grid grid-cols-8 text-xxs leading-tight mb-1 sm:text-xs">
                    <div className="px-5 col-span-5"><span className="sr-only">Game Name</span></div>
                    <div className="pr-9 col-span-3 text-right">24 hours</div>
                  </div>
                  <div className="flex flex-col gap-y-1.5 p-0 sm:p-5 sm:pt-0 ">
                    {mockup.items.sort((a, b) => (type == 'hots' ? b.usingRate - a.usingRate : a.usingRate - b.usingRate)).slice(0, 5).map((item, index) => (
                      <div key={index} className="flex flex-col gap-y-2">
                        <a href="" className="flex rounded-2xl p-1.5 bg-surface-1 w-full relative items-center z-10 transition-all duration-300 ease-out group hover:bg-surface-3 hover:border-brand-orange">
                          <div className="absolute inset-0 transition-all rounded-2xl duration-300 ease-out bg-on-surface-1 opacity-0 group-hover:opacity-[0.06] group-active:opacity-[0.12]"></div>
                          <div className="flex items-center relative flex-1">
                            <div className="aspect-[30/23] w-20 h-14 overflow-hidden rounded-xl relative flex-none transition-all transform-gpu ease-out duration-500">
                              <img loading="eager" src={item.logo} alt={item.name} className="absolute w-full h-full left-0 top-0 transition-all transform-gpu ease-out duration-500 delay-200 group-hover:scale-[1.1] group-hover:delay-300" />
                              <div className="absolute flex items-center justify-center w-full h-full left-0 top-0 bg-black/80 opacity-0 scale-105 transition-all transform-gpu ease-in-out duration-300 delay-200 group-hover:opacity-100 group-hover:delay-300">
                                <PlayArrowOutlined className={`size-icon-xl ${textCls}`} />
                              </div>
                            </div>
                            <div className="pl-3 flex flex-col justify-center flex-auto">
                              <span className="font-inter text-base leading-[140%] font-medium text-on-surface-1">{item.name}</span>
                              <span className="font-inter text-sm leading-[140%] text-on-surface-3">{item.studio}</span>
                            </div>
                          </div>
                          <div className={`pr-2 ml-auto text-xl text-right font-bold ${textCls}`}>{item.usingRate}%</div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderRankings = (rankings: any) => {
    return (
      <div className="py-4 sm:!py-10">
        <div className="grid grid-cols-1 gap-20 lg:gap-6 lg:grid-cols-2">
          {renderRankingsItem("hots")}
          {renderRankingsItem("colds")}
        </div>
      </div>
    )
  }

  const renderByCategory = (category: string) => {
    switch (category) {
      case "_live_bettings":
        return <LiveBettingsPanel />;

      case "_all_studios":
        return renderStudios(mockupLobby.studios);

      case "_rankings":
        return renderRankings(mockupLobby.rankings);

      case "_themes":
        return renderThemes(mockupLobby.themes);

      case "_groups":
        return renderThemes(mockupLobby.groups);

      default:
        return <div></div>;
    }
  }

  return (
    <div className="w-full relative pb-20 basis-full overflow-hidden">
      <div className="transform transition-transform duration-300 ease-in-out relative">
        <Header onFilter={setFilter} />

        {(filter?.keyword || filter?.filters?.length > 0) ?
          <SearchResult filter={filter} />
          :
          <div className="h-full min-h-screen flex flex-col space-y-4 md:space-y-8 ">
            {categories?.map((category: string, cindex: any) => (
              category.startsWith("_") ?
                renderByCategory(category)
                :
                <div key={cindex} className="flex flex-col !mb-6 mt-6">
                  <div className="flex items-center relative min-h-14 z-10">
                    <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1 mr-3">{category}</span>
                  </div>
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
                      {data?.items?.map((item: any, index: any) => (
                        <SwiperSlide key={index} className="!w-64 p-2">
                          <div className="">
                            <CasinoItem
                              item={item}
                              onClick={handleItemClick}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}
