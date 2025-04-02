import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from '@tanstack/react-query';
import ExpandablePanel from "src/components/common/panel/ExpandablePanel";
import MatchList from "src/components/MatchList";
import IconSoccer from "../../assets/icons/nav/sports-active.svg"
import CompetitionList from "src/components/CompetitionList";

import InstantGamesPanel from "../../components/InstantGamesPanel";
import { apiCall, getSportsPath } from "src/utils";
import LiveIcon from "src/components/common/LiveIcon";
import { useDispatch } from "react-redux";
import { showRightDrawer } from "src/redux/actions/uiAction";
import { RDRAWER_BETSLIP } from "src/redux/types";

import mockup from "src/mockup/sports.json";
import { BACKEND_URL } from "src/utils/config";

export default function AllSports() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [sportsData, setSportsData] = useState<any>(null);
  const [sportsList, setSportsList] = useState<any>(null);
  const [selectedSports, setSelectedSports] = useState<any>("Soccer");
  const [selectedSportsList, setSelectedSportsList] = useState<any>(null);
  const [competitionList, setCompetitionList] = useState<any>(null);
  // const [competitionData, setCompetitionData] = useState<any>(null);
  const [selectedInplay, setSelectedInplay] = useState<any>(null);
  // const [oddList, setOddList] = useState<any>([]);

  useEffect(() => {
    const fetchSports = async () => {
      let data = await apiCall(BACKEND_URL + "/sports/get-sports-list", "POST", {});
      setSportsData(data);
      const sports = Object.keys(data)
      setSportsList(sports); // Type assertion to fix type error
      setSelectedSportsList(data[selectedSports]);
      let comList: any = [];
      sports.map(sport => {
        if (sport != selectedSports)
          data[sport].map((item: any) => {
            comList.push(item);
          })
      });
      console.log("🚀 ~ fetchSports ~ comList:", comList)
      setCompetitionList(comList);
    };
    fetchSports();
  }, []);

  const { data: oddList, isLoading: isOddsLoading, error: oddsError } = useQuery({
    queryKey: ['oddList', selectedSportsList],
    queryFn: async () => {
      if (!selectedSportsList) return [];
      const response = await apiCall(BACKEND_URL + "/sports/get-odds", "POST", { selectedSportsList, isInplay: true });
      return response;
    },
    enabled: !!selectedSportsList, // Only run this query if selectedSportsList is not null
  });

  const { data: competitionData, isLoading: isCompetitionOddsLoading, error: competitionOddsError } = useQuery({
    queryKey: ['competitionData', competitionList],
    queryFn: async () => {
      if (!competitionList) return [];
      const response = await apiCall(BACKEND_URL + "/sports/get-odds", "POST", { selectedSportsList: competitionList, isInplay: false });
      return response;
    },
    enabled: !!competitionList, // Only run this query if competitionList is not null
  });

  const handleNavigate = (type: any, cid: any, mid?: any) => {
    navigate(getSportsPath(type, cid, mid));
  }

  const handleItemBet = (item: any, index: any, logo: any, type: any, title: any, description: any) => {
    // bet action here
    console.log("onbet =>", index)
    item.logo = logo;
    item.type = type;
    item.title = title;
    item.description = description;
    item.betIndex = index;

    // show drawer
    dispatch(showRightDrawer(RDRAWER_BETSLIP, item));
  }

  return (
    <div className="min-h-screen pb-5 pt-2.5 xl:px-8 relative">
      <div className="xl:grid grid-cols-12 gap-x-4">
        <div className="col-span-9">
          <div className="w-full xl:grid grid-cols-9 gap-x-4 sticky">
            <div className="flex flex-col gap-y-5 col-span-5">
              <div>
                {sportsList && <ExpandablePanel
                  iconComponent={<LiveIcon className={"!size-icon-xl"} />}
                  title={"In-Play"}
                  tabItems={sportsList?.map((item: any) => ({ icon: `/imgs/sports/${item.toLowerCase()}.svg`, text: item, id: item }))}
                  selectedTab={selectedSports}
                  subHeaderItems={oddList?.[0]?.betItems}
                  onSelectTab={(id: any) => {
                    setSelectedSports(sportsList?.find((item: any) => item == id))
                    setSelectedSportsList(sportsData[sportsList?.find((item: any) => item == id)])
                  }}
                  expandable={false}
                >
                  {oddList?.map((match: any, index: any) => <MatchList
                    key={index}
                    items={oddList?.[0]?.matches}
                    onItemClick={(item: any) => handleNavigate(selectedInplay?.type, item.competition, item.id)}
                    onItemBet={handleItemBet}
                    separator={true}
                    logo={match?.logo}
                    type={match?.name.toLowerCase()}
                    title={match?.title}
                    description={match?.description}
                  />)}
                </ExpandablePanel>}
              </div>

              {competitionData?.slice(0, 3)?.map((competition: any, index: any) => (
                <div key={index}>
                  <ExpandablePanel
                    icon={competition.logo}
                    title={competition.title}
                    subHeaderItems={competition.betItems}
                    onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                  >
                    <MatchList
                      items={competition.matches}
                      separator={true}
                      onItemClick={(item: any) => handleNavigate(competition.type, competition.id, item.id)}
                      onItemBet={handleItemBet}
                      logo={competition.logo}
                      type={competition.name.toLowerCase()}
                      title={competition.title}
                      description={competition.description}
                    />
                  </ExpandablePanel>
                </div>
              ))}
            </div>

            <div className="flex-col hidden xl:flex xl:col-span-4 gap-y-5">
              {competitionData?.slice(3, 7)?.map((competition: any, index: any) => (
                <div key={index}>
                  <ExpandablePanel
                    icon={competition.logo}
                    title={competition.title}
                    subHeaderItems={competition.betItems}
                    onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                  >
                    <MatchList
                      items={competition.matches}
                      onItemClick={(item: any) => handleNavigate(competition.type, competition.id, item.id)}
                      onItemBet={handleItemBet}
                      logo={competition.logo}
                      type={competition.name.toLowerCase()}
                      title={competition.title}
                      description={competition.description}
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

            {competitionData?.slice(7, 10)?.map((competition: any, index: any) => (
              <div key={index}>
                <ExpandablePanel
                  icon={competition.logo}
                  title={competition.title}
                  subHeaderItems={competition.betItems}
                  onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                >
                  <MatchList
                    items={competition.matches}
                    onItemClick={(item: any) => handleNavigate(competition.type, competition.id, item.id)}
                    onItemBet={handleItemBet}
                    logo={competition.logo}
                    type={competition.name.toLowerCase()}
                    title={competition.title}
                    description={competition.description}
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
