import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import CasinoItem from "src/components/CasinoItem";

import mockup from "src/mockup/casino.json";

export default function SearchResult({
  filter
}: {
  filter: { keyword?: string, type?: string, filters?: any[] }
}) {
  const navigate = useNavigate();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    loadData();
  }, [filter]);

  const loadData = async () => {
    // here load from server by condition
    console.log("🚀 ~ filter:", filter)

    setData(mockup.items.filter((item: any) => (
      (filter.keyword && item.name?.toLowerCase().includes(filter.keyword.toLowerCase()))
      //  || (filter.type && item.studio == filter.type)
    )));
  }

  const handleItemClick = (item: any) => {
    navigate(`/casino/play/${item.id}`);
  }

  return (
    <div>
      <section className="mt-8">
        <div className="flex items-center relative min-h-14 z-10">
          <span className="font-inter text-2xl leading-[120%] text-on-background font-bold capitalize">Search results </span>
          <span className="font-inter text-sm leading-[140%] text-on-tertiary-3 ml-5">{data?.length}</span>
        </div>
        <div className="min-h-[50vh] grid relative gap-y-4 gap-x-3 grid-cols-2 gap-4 mb-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-5 xl:grid-cols-5 2xl:grid-cols-6 xl:gap-x-4 3xl:grid-cols-7">
          {data?.map((item: any, index: any) =>
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
  );
}
