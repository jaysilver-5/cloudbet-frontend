import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { IPromotionItem } from "src/types/PromotionItem";

import mockup from "../../mockup/promotions.json";

export default function Promotion() {
  const t = useTranslation();
  const navigate = useNavigate();

  const [promotions, setPromotions] = useState<any>([]);

  useEffect(() => {
    setPromotions(mockup);
  }, []);

  const handeNavigate = (item: IPromotionItem) => {
    navigate(`/promotions/${item.id}`);
  }

  return (
    <div className="pb-20">
      <div className="text-2xl font-bold sm:text-3xl lg:text-4xl pt-4 mb-4 text-on-background">Promotions</div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 2xl:grid-cols-3 3xl:gap-6">
        {promotions.map((item: IPromotionItem, index: any) => (
          <div key={index}>
            <div className="bg-surface-2 rounded-full w-full h-full block">
              <div className="relative h-full group duration-250 cursor-pointer" onClick={() => handeNavigate(item)}>
                <div className=" bg-surface-1 rounded-xl z-[2] p-2 flex flex-col h-full text-on-surface overflow-hidden relative 2xl:rounded-2xl 3xl:rounded-3xl transition-all duration-300 ease-out group-hover:shadow-glow-3 group-hover:shadow-background group-hover:bg-surface-3 ">
                  <div className="overflow-hidden rounded-xl relative aspect-[9/5] 2xl:rounded-2xl 3xl:rounded-3xl">
                    <img src={item.image1} alt={item.title}
                      className="absolute w-full h-full left-0 top-0 object-cover"
                      sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, (max-width: 1200px) 900px, 1200px"
                    />
                  </div>
                  <div className="mt-2 p-2 xs:p-4 xs:mt-0 relative">
                    <div className="font-bold text-lg leading-tight mb-4 md:text-xl">
                      {item.title}
                    </div>
                    <p className="text-sm text-on-surface/70">
                      {item.abstract}
                    </p>
                  </div>
                  <div className="p-2 xs:p-4 pt-3">
                    <button className="group/text-button text-on-tertiary-1 relative transition-all ease-out duration-300 hover:bg-on-tertiary-1/[0.08] active:bg-on-tertiary-1/[0.08] active:outline-transparent rounded-full outline outline-offset-1 outline-2 outline-transparent focus:outline-on-surface-1 focus:bg-transparent disabled:text-surface-disabled disabled:pointer-events-none px-1 py-1 after:w-full after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2">
                      <div className="gap-x-1 transition-transform ease-out duration-300 group-active/text-button:scale-95 w-full h-full flex flex-row items-center justify-center">
                        <span className="font-inter text-base leading-[140%] font-medium">Learn more</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
