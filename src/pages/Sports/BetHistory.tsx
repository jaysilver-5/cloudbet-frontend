import { AccessTime } from "@mui/icons-material";
import ExpandablePanel from "src/components/common/panel/ExpandablePanel";
import ImgBrand from "../../assets/imgs/brandmark.svg";
import { useAuth } from "../../../src/context/authContext/index";
import { useEffect, useState } from "react";
import { apiCall } from "src/utils";
import { BACKEND_URL } from "src/utils/config";
import MyBetItem from "src/components/MyBetItem";

export default function BetHistory() {
  const { user } = useAuth();
  const [historyData, setHistoryData] = useState<any>([]);
  useEffect(() => {
    try {
      const fetchBets = async () => {
        const response = await apiCall(BACKEND_URL + "/sports/get-bets", "POST", { user_id: user?.user_id });
        console.log("🚀 ~ fetchBets ~ historyData:", response.data);
        setHistoryData(response.data);
      }
      fetchBets();
    } catch (error) {
      console.log(error);
    }

  }, [])
  return (
    <div className="min-h-screen pb-10 py-2.5 xl:py-8 xl:px-8 relative">
      <div className="xl:grid grid-cols-12 gap-x-4">
        <div className="col-span-8 3xl:col-span-9">
          <ExpandablePanel
            iconComponent={<AccessTime className="text-secondary !size-icon-xl" />}
            title="Bet History"
            expandable={false}
          >
            {historyData?.length > 0 ?
              <div className="flex flex-col overflow-hidden min-h-0 transition-[height] ease-out duration-300 h-full">
                <div className="flex-1 min-h-0 overflow-y-scroll no-scrollbar shadow-inner scroll-smooth focus:scroll-auto">
                  <div className="h-full">
                    {historyData.map((item: any, index: any) => (
                      <MyBetItem
                        item={item}
                      />
                    ))}
                  </div>
                </div>
              </div>
              :
              <div className="sm:pt-16 pt-8">
                <div className="flex-1 px-5 flex flex-col items-center justify-center">
                  <div className="relative !w-40">
                    <img src={ImgBrand} alt="mark" className="relative w-full text-on-surface-disabled" />
                  </div>
                  <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1 pt-3">
                    No bets available
                  </span>
                  <span className="font-inter text-sm leading-[140%] text-on-surface-3 pt-1 text-center">
                    Check out today's games or upcoming events to find your next betting opportunity.
                  </span>
                </div>
              </div>
            }

          </ExpandablePanel>
        </div>
      </div>
    </div>
  );
}
