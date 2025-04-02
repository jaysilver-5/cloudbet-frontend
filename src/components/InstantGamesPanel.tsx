import { useEffect, useState } from "react";

import mockup2 from "src/mockup/instantgames.json";
import ExpandablePanel from "src/components/common/panel/ExpandablePanel";

export default function InstantGamesPanel() {

  const [instantGames, setInstantGames] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setInstantGames(mockup2);
  }

  return (
    <div>
      <ExpandablePanel
        title={"Instant Games"}
        headerGradient={false}
      >
        <div className="grid grid-cols-3 sm:grid-cols-6 xl:grid-cols-3 gap-3 px-5 py-4">
          {instantGames?.map((item: any, index: any) => (
            <div key={index} className="transition-transform ease-out duration-300 bg-surface-5 aspect-[4/3] rounded-xl overflow-clip hover:scale-105">
              <a href={item.href} className="w-full h-full">
                <img src={item.logo} alt={item.name} className="w-full h-full object-cover md:object-contain" />
              </a>
            </div>
          ))}
        </div>
      </ExpandablePanel>
    </div>
  );
}
