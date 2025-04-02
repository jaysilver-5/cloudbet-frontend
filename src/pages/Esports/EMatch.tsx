import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import MatchList from "src/components/MatchList";
import CheckableButton from "src/components/common/button/CheckableButton";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import ExpandablePanel from "src/components/common/panel/ExpandablePanel";
import IconBack from "../../assets/icons/back.svg";
import IconFavorite from "../../assets/icons/favorite.svg";

import mockup from "src/mockup/match.json";
import MatchInfoPanel from "src/components/MatchInfoPanel";
import BetList from "src/components/BetList";
import { useMediaQuery } from "usehooks-ts";

export default function EMatch() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const t = useTranslation();
  const navigate = useNavigate();

  const { type: sportType, competition: competitionId, match: matchId } = useParams();

  const [selectedTab, setSelectedTab] = useState<any>("");
  const [matchData, setMatchData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setMatchData(mockup);
    setSelectedTab(mockup.types?.[0]);
  }

  useEffect(() => {
    setFilteredData(matchData?.bets?.filter((item: any) => (
      (selectedTab == "favorite" && item.isFavorite) || (selectedTab == item.type)
    )));
  }, [selectedTab]);

  const handleToggleFavorite = (item: any) => {

  }

  const handleItemBet = (item: any) => {

  }

  return (
    <div className="w-full">
      <div className="bg-background py-2.5 sm:py-5 z-50 sticky" style={{ top: isMobile ? 60 : 66 }}>
        <div className="flex flex-col gap-y-5">
          <div>
            <div className="flex items-center gap-x-4 px-5 sm:px-8">
              <CircleIconButton
                icon={IconBack}
                onClick={() => navigate(-1)}
              />
              <div className="flex items-center gap-x-1 overflow-x-hidden">
                <span className="font-inter text-4xl leading-[120%] font-bold">
                  {matchData?.match?.name}
                </span>
                <div className="h-14 w-14 flex items-center justify-center transition-opacity ease-out duration-300 opacity-100">

                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="flex gap-x-2 overflow-x-scroll px-5 scrollbar-hide sm:px-8">
              <div className="flex flex-shrink-0">
                <CheckableButton
                  icon={IconFavorite}
                  checked={selectedTab == "favorite"}
                  onClick={() => setSelectedTab("favorite")}
                  disabled={matchData?.bets?.filter((item: any) => item.isFavorite)?.length == 0}
                />
              </div>
              {matchData?.types?.map((item: string, index: any) => (
                <div key={index} className="flex flex-shrink-0">
                  <CheckableButton
                    checked={selectedTab == item}
                    onClick={() => setSelectedTab(item)}
                    text={item}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full">
        <div className="w-full min-h-screen relative text-on-surface-1 pb-5">
          <div className="xl:px-8 relative pt-2.5">
            <div className="grid grid-cols-12 xl:gap-x-4 gap-y-5">
              <div className="col-span-12 xl:col-span-8 flex flex-col gap-y-5 pt-2.5">
                <div className="w-full grid grid-cols-9 gap-x-4 sticky pb-5">
                  <div className={`flex flex-col gap-y-5 col-span-9`}>
                    {filteredData?.map((item: any, index: any) => (
                      <div key={index}>
                        <ExpandablePanel
                          title={item.name}
                          titleTip={item.desc}
                          badge={item.cashout ? <span className="text-on-tertiary-1 text-xs !leading-5 truncate">Cashout available</span> : null}
                          favoritable={true}
                          isFavorite={item.isFavorite}
                          stickyTop={isMobile ? "170px" : "215px"}
                          onFavoriteClick={() => handleToggleFavorite(item)}
                          noSubHeaderTitle={true}
                          subHeaderItems={item.betItems}
                        >
                          <BetList
                            items={item.items}
                            onItemBet={handleItemBet}
                          />
                        </ExpandablePanel>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-4 h-fit hidden xl:flex xl:flex-col gap-y-5 pt-2.5 sticky top-[215px]">
                {/* match info panel */}
                <MatchInfoPanel
                  competitionInfo={matchData?.competition}
                  matchInfo={matchData?.match}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
