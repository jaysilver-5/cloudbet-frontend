import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CheckableButton from "src/components/common/button/CheckableButton";
import InstantGamesPanel from "../../components/InstantGamesPanel";
import ExpandablePanel from "src/components/common/panel/ExpandablePanel";
import MatchList from "src/components/MatchList";
import RoundedButton from "src/components/common/button/RoundedButton";

import mockup from "src/mockup/sports_live.json";
import { getSportsPath } from "src/utils";
import { useMediaQuery } from "usehooks-ts";

export default function LiveSports() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const navigate = useNavigate();

  const [sportsLiveData, setSportsLiveData] = useState<any>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setSportsLiveData(mockup);
    setSelectedItem(mockup[0]);
  }

  const handleNavigate = (type: any, cid?: any, mid?: any) => {
    navigate(getSportsPath(type, cid, mid));
  }

  return (
    <div className="w-full">
      <div className="bg-background py-2.5 sm:py-5 z-50 sticky" style={{ top: isMobile ? 60 : 66 }}>
        <div className="flex flex-col gap-y-5">
          <div>
            <div className="flex items-center gap-x-4 px-5 sm:px-8">
              <div className="flex items-center gap-x-1 overflow-x-hidden">
                <span className="font-inter text-4xl leading-[120%] font-bold">In-Play</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="flex gap-x-2 overflow-x-scroll px-5 scrollbar-hide sm:px-8">
              {sportsLiveData?.map((item: any, index: any) => (
                <div key={index} className="flex flex-shrink-0">
                  <CheckableButton
                    icon={`/imgs/sports/${item.type}.svg`}
                    text={item.name}
                    checked={selectedItem?.type == item.type}
                    onClick={() => setSelectedItem(item)}
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
            <div className="xl:grid xl:grid-cols-12 gap-x-4">
              <div className="col-span-9">
                <div className="w-full xl:grid xl:grid-cols-9 gap-x-4 sticky pb-5">
                  <div className={`flex flex-col gap-y-5 ${selectedItem?.competitions?.length > 3 ? 'col-span-5' : 'col-span-9'}`}>
                    {selectedItem?.competitions?.slice(0, 3)?.map((competition: any, index: any) => (
                      <div key={index}>
                        <ExpandablePanel
                          icon={competition.logo}
                          title={competition.name}
                          subHeaderItems={competition.betItems}
                          onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                          stickyTop={isMobile ? "160px" : "200px"}
                        >
                          <MatchList
                            items={competition.matches}
                            separator={true}
                            onItemClick={(item: any) => handleNavigate(competition.type, competition.id, item.id)}
                          />
                        </ExpandablePanel>
                      </div>
                    ))}
                    <div className="flex justify-center">
                      <RoundedButton
                        text={`See all ${selectedItem?.name}`}
                        className='!w-fit h-[50px]'
                        textClassName='text-lg text-on-tertiary-1'
                        onClick={() => handleNavigate(selectedItem?.type)}
                      />
                    </div>
                  </div>

                  {selectedItem?.competitions?.length > 3 &&
                    <div className="flex-col hidden xl:flex xl:col-span-4 gap-y-">
                      {selectedItem?.competitions?.slice(3, 6)?.map((competition: any, index: any) => (
                        <div key={index}>
                          <ExpandablePanel
                            icon={competition.logo}
                            title={competition.name}
                            subHeaderItems={competition.betItems}
                            onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                            stickyTop={isMobile ? "160px" : "200px"}
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
              </div>

              <div className="col-span-3 pb-5">
                <InstantGamesPanel />

                {selectedItem?.competitions?.slice(6)?.map((competition: any, index: any) => (
                  <div key={index}>
                    <ExpandablePanel
                      icon={competition.logo}
                      title={competition.name}
                      subHeaderItems={competition.betItems}
                      onHeaderClick={() => handleNavigate(competition.type, competition.id)}
                      stickyTop={isMobile ? "160px" : "200px"}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
