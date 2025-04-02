import { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

import { KeyboardArrowRight } from "@mui/icons-material";
import "./markdown.css";

import mockup from "../../mockup/promotions.json";

export default function PromotionDetail() {
  const t = useTranslation();
  const navigate = useNavigate();

  const { id: promotionId } = useParams();

  const [promotionInfo, setPromotionInfo] = useState<any>(null);

  useEffect(() => {
    for (const item of mockup) {
      if (promotionId == item.id) {
        setPromotionInfo(item);
        break;
      }
    }
  }, []);

  return (
    <div className="pb-20">
      <div className="sm:max-w-[992px] md:max-w-5xl lg:max-w-5xl 3xl:max-w-[1400px] mx-auto mb-28">
        <nav className="pt-4 flex">
          <ol className="flex items-center space-x-1 text-xs text-on-surface list-none !pl-0">
            <li>
              <a onClick={() => navigate(-1)} className=" bg-surface-3 text-on-surface rounded-full items-center justify-center py-2 px-4 block border-surface-3 border transition-all ease-out duration-250 hover:bg-surface-5 active:scale-95">
                <span className=" leading-none">Promos</span>
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <KeyboardArrowRight className="h-5 w-5 flex-shrink-0 mr-1 text-gray-400" />
                <div className="text-on-surface rounded-full items-center justify-center py-2 block  transition-all ease-out duration-250 px-2 pointer-events-none">
                  {promotionInfo?.title}
                </div>
              </div>
            </li>
          </ol>
        </nav>
        <div className="text-on-background mb-10 pt-4">
          <div className="animate-[fadeIn_500ms_ease-out] w-full overflow-hidden rounded-xlxs:rounded-3xl 3xl:rounded-4xl lg:min-h-[270px] min-h-[140px] ">
            <img src={promotionInfo?.image} alt={promotionInfo?.title} className="w-full relative h-auto rounded-xl object-cover block xs:rounded-3xl 3xl:rounded-4xl" />
          </div>
          <div className="animate-[fadeIn_500ms_ease-out_200ms] text-2xl font-bold mt-5 leading-tight sm:text-3xl lg:text-4xl lg:max-w-[30ch] animation-fill-backwards">
            {promotionInfo?.title}
          </div>
        </div>
        <section
          className="text-on-background/70 animate-[fadeIn_500ms_ease-out_400ms] animation-fill-backwards lg:max-w-[95%] "
          dangerouslySetInnerHTML={{ __html: promotionInfo?.content }}
        ></section>
      </div>
    </div>
  );
}
