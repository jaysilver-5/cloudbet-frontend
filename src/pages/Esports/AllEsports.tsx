import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ExpandablePanel from "src/components/common/panel/ExpandablePanel";
import MatchList from "src/components/MatchList";
import IconSoccer from "../../assets/icons/nav/sports-active.svg"
import CompetitionList from "src/components/CompetitionList";

import InstantGamesPanel from "../../components/InstantGamesPanel";
import { getEsportsPath, getSportsPath } from "src/utils";
import LiveIcon from "src/components/common/LiveIcon";
import { useDispatch } from "react-redux";
import { showRightDrawer } from "src/redux/actions/uiAction";
import { RDRAWER_BETSLIP } from "src/redux/types";

import mockup from "src/mockup/esports.json";

export default function AllEsports() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sportsData, setSportsData] = useState<any>(null);
  const [selectedInplay, setSelectedInplay] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setSportsData(mockup);
    setSelectedInplay(mockup.inplay[0]);
  }

  const handleNavigate = (type: any, cid: any, mid?: any) => {
    navigate(getEsportsPath(type, cid, mid));
  }

  const handleItemBet = (item: any, index: any) => {
    // bet action here

    // show drawer
    dispatch(showRightDrawer(RDRAWER_BETSLIP));
  }

  return (
    <div className="min-h-screen pb-5 pt-2.5 xl:px-8 relative">
      <div className="xl:grid grid-cols-12 gap-x-4">
        <div className="col-span-9">
          <div className="w-full xl:grid grid-cols-9 gap-x-4 sticky">
            <div className="flex flex-col gap-y-5 col-span-5">
              <div>
                <ExpandablePanel
                  iconComponent={<LiveIcon className={"!size-icon-xl"} />}
                  title={"In-Play"}
                  tabItems={sportsData?.inplay?.map((item: any) => ({ icon: `/imgs/esports/${item.type}.svg`, text: item.name, id: item.type }))}
                  selectedTab={selectedInplay?.type}
                  subHeaderItems={selectedInplay?.betItems}
                  onSelectTab={(id: any) => setSelectedInplay(sportsData?.inplay?.find((item: any) => item.type == id))}
                  expandable={false}
                >
                  <MatchList
                    items={selectedInplay?.matches}
                    onItemClick={(item: any) => handleNavigate(selectedInplay?.type, item.competition, item.id)}
                    onItemBet={handleItemBet}
                    separator={true}
                  />
                </ExpandablePanel>
              </div>

              {sportsData?.competitions?.slice(0, 3)?.map((competition: any, index: any) => (
                <div key={index}>
                  <ExpandablePanel
                    icon={competition.logo}
                    title={competition.name}
                    subHeaderItems={competition.betItems}
                    onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                  >
                    <MatchList
                      items={competition.matches}
                      separator={true}
                      onItemClick={(item: any) => handleNavigate(competition.type, competition.id, item.id)}
                      onItemBet={handleItemBet}
                    />
                  </ExpandablePanel>
                </div>
              ))}
            </div>

            <div className="flex-col hidden xl:flex xl:col-span-4 gap-y-5">
              {sportsData?.competitions?.slice(3, 7)?.map((competition: any, index: any) => (
                <div key={index}>
                  <ExpandablePanel
                    icon={competition.logo}
                    title={competition.name}
                    subHeaderItems={competition.betItems}
                    onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                  >
                    <MatchList
                      items={competition.matches}
                      onItemClick={(item: any) => handleNavigate(competition.type, competition.id, item.id)}
                      onItemBet={handleItemBet}
                    />
                  </ExpandablePanel>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex flex-col gap-y-5">
            <div>
              <ExpandablePanel
                title={"Top Coupons"}
                headerGradient={false}
              >
                <CompetitionList
                  items={[
                    { logo: IconSoccer, name: "Today's Soccer" },
                    { logo: IconSoccer, name: "Today's Tennis" },
                  ]}
                />
              </ExpandablePanel>
            </div>

            <InstantGamesPanel />

            {sportsData?.competitions?.slice(7, 10)?.map((competition: any, index: any) => (
              <div key={index}>
                <ExpandablePanel
                  icon={competition.logo}
                  title={competition.name}
                  subHeaderItems={competition.betItems}
                  onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                >
                  <MatchList
                    items={competition.matches}
                    onItemClick={(item: any) => handleNavigate(competition.type, competition.id, item.id)}
                    onItemBet={handleItemBet}
                  />
                </ExpandablePanel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
