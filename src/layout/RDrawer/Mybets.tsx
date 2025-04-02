import { useEffect, useState } from "react";
import CheckableButton from "src/components/common/button/CheckableButton";
import ImgBrand from "../../assets/imgs/brandmark.svg";
import { useAuth } from "../../../src/context/authContext/index";
import { apiCall } from "src/utils";
import { BACKEND_URL } from "src/utils/config";
import MyBetItem from "src/components/MyBetItem";

export default function Mybets() {

  const { user } = useAuth();

  const [selectedTab, setSelectedTab] = useState('active');
  const [betData, setBetData] = useState<any>([]);
  const [originData, setOriginData] = useState<any>([]);
  useEffect(() => {
    try {
      const fetchBets = async () => {
        const response = await apiCall(BACKEND_URL + "/sports/get-bets", "POST", { user_id: user?.user_id });
        console.log("🚀 ~ fetchBets ~ betData:", response.data);
        setOriginData(response.data);
        setBetData(response.data.filter((item: any) => {
          if (selectedTab === 'active') {
            return item.status === 'Pending'
          } else {
            return item.status != 'Pending';
          }
        }));
      }
      fetchBets();
    } catch (error) {
      console.log(error);
    }

  }, [])

  const handleRemove = (item: any) => {
    console.log("🚀 ~ handleRemove ~ item:", item)

    setBetData((prevData: any) => prevData.filter((bet: any) => bet !== item));
  }


  return (
    <div className="flex flex-col space-y-3 p-2 h-[var(--betslip-content-height-mobile)] xl:h-[var(--betslip-content-height)]">
      <div className="transition-opacity transition-transform ease-in-out duration-300 opacity-100 translate-y-0">
        <div className="pb-3">
          <div className="flex flex-row space-x-3 px-3 w-full">
            <div className="flex gap-x-2 overflow-x-scroll scrollbar-hide w-full !px-0">
              <CheckableButton
                text="Active"
                className={'flex flex-shrink-0 flex-1 justify-center'}
                checked={selectedTab == 'active'}
                onClick={() => {
                  setSelectedTab('active');
                  setBetData(originData.filter((bet: any) => bet.status === 'Pending'))
                }}
              />
              <CheckableButton
                text="Settled"
                className={'flex flex-shrink-0 flex-1 justify-center'}
                checked={selectedTab == 'settled'}
                onClick={() => {
                  setSelectedTab('settled');
                  setBetData(originData.filter((bet: any) => bet.status !== 'Pending'))
                }}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            {betData?.length > 0 ?
              <div className="flex flex-col overflow-hidden min-h-0 transition-[height] ease-out duration-300 h-full">
                <div className="flex-1 min-h-0 overflow-y-scroll no-scrollbar shadow-inner scroll-smooth focus:scroll-auto">
                  <div className="h-full">
                    {betData.map((item: any, index: any) => (
                      <MyBetItem
                        item={item}
                        onRemove={handleRemove}
                      />
                    ))}
                  </div>
                </div>
              </div>
              :
              <div className="flex flex-col space-y-3 overflow-y-scroll no-scrollbar p-3 pt-0 h-[calc(100vh-var(--betslip-header-height)-9rem)]">
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
          </div>

        </div>
      </div>
    </div>
  );
}
