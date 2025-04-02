import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import InstantGamesPanel from "src/components/InstantGamesPanel";
import MatchList from "src/components/MatchList";
import CheckableButton from "src/components/common/button/CheckableButton";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import ExpandablePanel from "src/components/common/panel/ExpandablePanel";
import IconBack from "../../assets/icons/back.svg";
import IconFavorite from "../../assets/icons/favorite.svg";
import CompetitionList from "src/components/CompetitionList";

import mockup from "src/mockup/sports_item.json";
import mockup2 from "src/mockup/sports_item_competition.json";
import mockup3 from "src/mockup/sports_item_outlights.json";
import { getSportsPath } from "src/utils";
import { useMediaQuery } from "usehooks-ts";

export default function ASport() {
  const t = useTranslation();

  const isMobile = useMediaQuery('(max-width: 768px)')
  const { type: sportType } = useParams();

  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<any>("inplay");
  const [sportsData, setSportsData] = useState<any>([]);
  const [competitionsData, setCompetitionsData] = useState<any>([]);
  const [outrightsData, setOutrightsData] = useState<any>([]);

  useEffect(() => {
    loadData();
  }, [selectedTab]);

  const loadData = async () => {
    if (selectedTab == "competitions") {
      setCompetitionsData(mockup2);
    } else if (selectedTab == "outrights") {
      setOutrightsData(mockup3);
    } else {
      setSportsData(mockup);
    }
  }

  const handleNavigate = (type: any, cid?: any, mid?: any) => {
    navigate(getSportsPath(type, cid, mid));
  }

  const handleToggleFavorite = () => {

  }

  return (
    <div className="w-full">
      <div className="bg-background py-2.5 sm:py-5 z-50 sticky" style={{ top: isMobile ? 60 : 66 }}>
        <div className="flex flex-col gap-y-5">
          <div>
            <div className="flex items-center gap-x-4 px-5 sm:px-8">
              <CircleIconButton
                icon={IconBack}
                onClick={() => navigate('/sports')}
              />
              <div className="flex items-center gap-x-1 overflow-x-hidden">
                <span className="font-inter text-4xl leading-[120%] font-bold">{sportType}</span>
                <div className="h-14 w-14 flex items-center justify-center transition-opacity ease-out duration-300 opacity-100">
                  <button className="group cursor-pointer" onClick={handleToggleFavorite}>
                    <div className="relative h-8 w-8 rounded-xl after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
                      <div className="text-on-tertiary-3 !w-full !h-full rounded-xl flex justify-center items-center transition-color ease-out duration-300 group-hover:bg-on-tertiary-3/[0.08] group-active:bg-on-tertiary-3/[0.16]">
                        <img src={IconFavorite} alt="favorite" className="size-icon-s" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="flex gap-x-2 overflow-x-scroll px-5 scrollbar-hide sm:px-8">
              <div className="flex flex-shrink-0">
                <CheckableButton
                  text={"In-Play"}
                  checked={selectedTab == "inplay"}
                  onClick={() => setSelectedTab("inplay")}
                />
              </div>
              <div className="flex flex-shrink-0">
                <CheckableButton
                  text={"Today"}
                  checked={selectedTab == "today"}
                  onClick={() => setSelectedTab("today")}
                />
              </div>
              {/* <div className="flex flex-shrink-0">
                <CheckableButton
                  text={"Tomorrow"}
                  checked={selectedTab == "tomorrow"}
                  onClick={() => setSelectedTab("tomorrow")}
                />
              </div>
              <div className="flex flex-shrink-0">
                <CheckableButton
                  text={"Competitions"}
                  checked={selectedTab == "competitions"}
                  onClick={() => setSelectedTab("competitions")}
                />
              </div>
              <div className="flex flex-shrink-0">
                <CheckableButton
                  text={"Outrights"}
                  checked={selectedTab == "outrights"}
                  onClick={() => setSelectedTab("outrights")}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-full min-h-screen relative text-on-surface-1 pb-5">
          <div className="xl:px-8 relative pt-2.5">
            <div className="xl:grid xl:grid-cols-12 gap-x-4">
              <div className="col-span-9">
                {["inplay", "today", "tomorrow"].includes(selectedTab) ?
                  <div className="w-full xl:grid xl:grid-cols-9 gap-x-4 sticky pb-5">
                    <div className={`flex flex-col gap-y-5 ${sportsData?.competitions?.length > 3 ? 'col-span-5' : 'col-span-9'}`}>
                      {sportsData?.competitions?.slice(0, 3)?.map((competition: any, index: any) => (
                        <div key={index}>
                          <ExpandablePanel
                            icon={competition.logo}
                            title={competition.name}
                            subHeaderItems={competition.betItems}
                            onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                            stickyTop={isMobile ? "170px" : "215px"}
                          >
                            <MatchList
                              items={competition.matches}
                              separator={true}
                              onItemClick={(item: any) => handleNavigate(competition.type, competition.id, item.id)}
                            />
                          </ExpandablePanel>
                        </div>
                      ))}
                    </div>

                    {sportsData?.competitions?.length > 3 &&
                      <div className="flex-col hidden xl:flex xl:col-span-4 gap-y-">
                        {sportsData?.competitions?.slice(3)?.map((competition: any, index: any) => (
                          <div key={index}>
                            <ExpandablePanel
                              icon={competition.logo}
                              title={competition.name}
                              subHeaderItems={competition.betItems}
                              onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                              stickyTop={isMobile ? "170px" : "215px"}
                            >
                              <MatchList
                                items={competition.matches}
                                separator={true}
                                onItemClick={(item: any) => handleNavigate(competition.type, competition.id, item.id)}
                              />
                            </ExpandablePanel>
                          </div>
                        ))}
                      </div>
                    }
                  </div>
                  :
                  <div className="w-full sticky pb-5">
                    <div className={`flex flex-col gap-y-5 col-span-9`}>
                      {selectedTab == "competitions" ?
                        <>
                          {competitionsData?.map((item: any, index: any) => (
                            <div key={index}>
                              <ExpandablePanel
                                icon={item.flag}
                                title={item.country}
                                stickyTop={isMobile ? "170px" : "215px"}
                              >
                                <CompetitionList
                                  items={item.competitions}
                                  onItemClick={(citem: any) => handleNavigate(sportType, citem.id)}
                                />
                              </ExpandablePanel>
                            </div>
                          ))}
                        </>
                        :
                        <>
                          {outrightsData?.map((item: any, index: any) => (
                            <div key={index}>
                              <ExpandablePanel
                                icon={item.flag}
                                title={item.country}
                                badge={item.competitions?.length}
                                stickyTop={isMobile ? "170px" : "215px"}
                              >
                                {item.competitions?.map((competition: any, cindex: any) =>
                                  <div key={cindex}>
                                    <ExpandablePanel
                                      title={competition.name}
                                      badge={competition.count}
                                      stickable={false}
                                      noEdge={true}
                                    >
                                      <CompetitionList
                                        items={competition.matches}
                                        onItemClick={(mitem: any) => handleNavigate(sportType, competition.id, mitem.id)}
                                      />
                                    </ExpandablePanel>
                                  </div>
                                )}
                              </ExpandablePanel>
                            </div>
                          ))}
                        </>
                      }
                    </div>
                  </div>
                }
              </div>

              <div className="col-span-3 pb-5">
                <InstantGamesPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
