import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import InstantGamesPanel from "src/components/InstantGamesPanel";
import MatchList from "src/components/MatchList";
import CheckableButton from "src/components/common/button/CheckableButton";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import ExpandablePanel from "src/components/common/panel/ExpandablePanel";
import IconBack from "../../assets/icons/back.svg";
import IconCalendar from "../../assets/icons/calendar.svg";
import CompetitionList from "src/components/CompetitionList";
import LiveIcon from "src/components/common/LiveIcon";
import { getEsportsPath, getSportsPath } from "src/utils";

import mockup2 from "src/mockup/competition.json";
import mockup3 from "src/mockup/sports_item_outlights.json";
import { StarBorderRounded } from "@mui/icons-material";
import { useMediaQuery } from "usehooks-ts";

export default function ECompetition() {
  const t = useTranslation();
  const isMobile = useMediaQuery('(max-width: 768px)')

  const { type: sportType, competition: competitionId } = useParams();

  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState<any>("events");
  const [competitionsData, setCompetitionsData] = useState<any>([]);
  const [outrightsData, setOutrightsData] = useState<any>([]);

  useEffect(() => {
    loadData();
  }, [selectedTab]);

  const loadData = async () => {
    if (selectedTab == "events") {
      setCompetitionsData(mockup2);
    } else if (selectedTab == "outrights") {
      setOutrightsData(mockup3);
    }
  }

  const handleNavigate = (type: any, cid?: any, mid?: any) => {
    navigate(getEsportsPath(type, cid, mid));
  }

  const handleToggleFavorite = () => {

  }

  return (
    <div className="w-full">
      <div className="bg-background py-2.5 sm:py-5 z-50 sticky " style={{ top: isMobile ? 60 : 66 }}>
        <div className="flex flex-col gap-y-5">
          <div>
            <div className="flex items-center gap-x-4 px-5 sm:px-8">
              <CircleIconButton
                icon={IconBack}
                onClick={() => navigate(-1)}
              />
              <div className="flex items-center gap-x-1 overflow-x-hidden">
                <span className="font-inter text-4xl leading-[120%] font-bold">
                  {competitionsData?.name}
                </span>
                <div className="h-14 w-14 flex items-center justify-center transition-opacity ease-out duration-300 opacity-100">
                  <button className="group cursor-pointer" onClick={handleToggleFavorite}>
                    <div className="relative h-8 w-8 rounded-xl after:w-[42px] after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
                      <div className="text-on-tertiary-3 !w-full !h-full rounded-xl flex justify-center items-center transition-color ease-out duration-300 group-hover:bg-on-tertiary-3/[0.08] group-active:bg-on-tertiary-3/[0.16]">
                        <StarBorderRounded className="size-icon-s" />
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
                  text={"Events"}
                  checked={selectedTab == "events"}
                  onClick={() => setSelectedTab("events")}
                />
              </div>
              <div className="flex flex-shrink-0">
                <CheckableButton
                  text={"Outrights"}
                  checked={selectedTab == "outrights"}
                  onClick={() => setSelectedTab("outrights")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-full min-h-screen relative text-on-surface-1 pb-5">
          <div className="xl:px-8 relative pt-2.5">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-x-4">
              <div className="col-span-1 xl:col-span-8 flex flex-col gap-y-5">
                <div className="w-full grid grid-cols-9 gap-x-4 sticky pb-5">
                  <div className={`flex flex-col gap-y-5 col-span-9`}>
                    {selectedTab == "events" ?
                      <>
                        <div>
                          <ExpandablePanel
                            iconComponent={<LiveIcon className={"size-icon-xs !size-icon-xl"} />}
                            title={"Today"}
                            stickyTop={isMobile ? "170px" : "215px"}
                          >
                            <MatchList
                              items={competitionsData?.today}
                              separator={true}
                              onItemClick={(item: any) => handleNavigate(sportType, competitionId, item.id)}
                            />
                          </ExpandablePanel>
                        </div>
                        <div>
                          <ExpandablePanel
                            icon={IconCalendar}
                            title={"Tomorrow"}
                            stickyTop={isMobile ? "170px" : "215px"}
                          >
                            <MatchList
                              items={competitionsData?.tomorrow}
                              separator={true}
                              onItemClick={(item: any) => handleNavigate(sportType, competitionId, item.id)}
                            />
                          </ExpandablePanel>
                        </div>
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
              </div>

              <div className="col-span-1 xl:col-span-4 pt-5 xl:pt-0">
                <InstantGamesPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
