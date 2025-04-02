import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

import { useEffect, useState } from "react";
import CasinoItem from "src/components/CasinoItem";
import SearchResult from "./SearchResult";

import mockup from "src/mockup/casino.json";
import LiveBettingsPanel from "../../components/LiveBettingsPanel";

export default function TypeBoard() {
  const navigate = useNavigate();

  const { type: casinoType } = useParams();
  const [data, setData] = useState<any>(null);
  const [filter, setFilter] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setData(mockup);
  }

  const handleItemClick = (item: any) => {
    navigate(`/casino/play/${item.id}`);
  }

  return (
    <div className="w-full relative pb-20 basis-full overflow-hidden">
      <div className="transform transition-transform duration-300 ease-in-out relative">
        <Header onFilter={setFilter} />

        {(filter?.keyword || filter?.filters?.length > 0) ?
          <SearchResult filter={{ ...filter, type: casinoType }} />
          :
          <div>
            <section className="mt-8">
              <div className="flex items-center relative min-h-14 z-10">
                <span className="font-inter text-2xl leading-[120%] text-on-background font-bold capitalize">{casinoType} </span>
                <span className="font-inter text-sm leading-[140%] text-on-tertiary-3 ml-5">{data?.items?.length}</span>
              </div>
              <div className="min-h-[50vh] grid relative gap-y-4 gap-x-3 grid-cols-2 gap-4 mb-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-5 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-x-4 3xl:grid-cols-7">
                {data?.items?.map((item: any, index: any) =>
                  <div key={index} className="transition duration-300">
                    <CasinoItem
                      item={item}
                      onClick={handleItemClick}
                    />
                  </div>
                )}
              </div>
            </section>
          </div>
        }

        <div className="py-5 sm:py-10">
          <LiveBettingsPanel />
        </div>
      </div>
    </div>
  );
}
