import RoundedButton from "src/components/common/button/RoundedButton";
import ImgBetslip from "../../assets/imgs/main/betslip.svg";
import { IOSSwitch } from "src/components/common/switch/IOSSwitch";
import { useEffect, useState } from "react";
import { RemoveCircleOutline } from "@mui/icons-material";
import BetslipItem from "../../components/BetslipItem";
import { useAuth } from "../../../src/context/authContext/index";
import { apiCall } from "src/utils";
import { BACKEND_URL } from "src/utils/config";
import { showRightDrawer } from "src/redux/actions/uiAction";
import { RDRAWER_MYBETS } from "src/redux/types";
import { useDispatch } from "react-redux";

export default function Betslip({ data }: {
  data: any;
}) {

  const dispatch = useDispatch();
  const { user, setUser } = useAuth();
  const [betslipData, setBetslipData] = useState<any>([]);
  const [availableBalance, setAvailableBalance] = useState(user?.balance);

  useEffect(() => {
    if (data != null) {
      let betTeam = "";
      switch (data.betIndex) {
        case 0:
          betTeam = data?.home_team.name;
          break;
        case 1:
          betTeam = data.bets.length < 3 ? data?.away_team.name : "Draw";
          break;
        case 2:
          betTeam = data?.away_team.name;
          break;
        default:
          break;
      }
      let betData = {
        matchId: data?.id,
        logo: `/imgs/sports/${data?.type}.svg`,
        betTeam: betTeam,
        betName: `Winner`,
        matchName: `${data?.home_team.name} vs ${data.away_team.name}`,
        pointNew: data.bets[data.betIndex],
        betAmount: 0,
      }
      setBetslipData((prevData: any) => {
        const existingIndex = prevData.findIndex((bet: any) => bet.matchId === betData.matchId);
        if (existingIndex !== -1) {
          // Update existing betData
          const updatedData = [...prevData];
          updatedData[existingIndex] = betData;
          return updatedData;
        } else {
          // Add new betData
          return [...prevData, betData];
        }
      });
    }
  }, [data?.betIndex, data?.id])

  const handleRemove = (item: any) => {
    console.log("🚀 ~ handleRemove ~ item:", item)

    setBetslipData((prevData: any) => prevData.filter((bet: any) => bet !== item));
  }

  const updateBetSlipData = (updatedItem: any) => {
    setBetslipData((prevData: any) => {
      return prevData.map((bet: any) =>
        bet.matchId === updatedItem.matchId ? updatedItem : bet
      );
    });
  };

  const handleBet = async () => {
    try {
      console.log("Handle Bet ==> ", betslipData);
      let data = await apiCall(BACKEND_URL + "/sports/place-bet", "POST", { data: betslipData, user_id: user?.user_id });
      console.log("🚀 ~ handleBet ~ data:", data);
      if (data.status) {
        // update user balance
        setUser(data.userData);
        setBetslipData([]);
        dispatch(showRightDrawer(RDRAWER_MYBETS));
      }
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="relative p-0.5 pb-0 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 bg-gradient-to-b from-surface-2 to-background/0 to-80% h-full w-full sm:no-scrollbar backface-fix before:!opacity-100">
      <div className="w-full h-full relative bg-background rounded-4xl-0.5 rounded-bl-none rounded-br-none">
        <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-0.5 rounded-bl-none rounded-br-none">
          <div className="w-full h-full transition-all ease-out duration-300 bg-gradient-to-b from-surface-1 to-background/0 max-h-[300px]"></div>
        </div>
        <div className="w-full h-full relative flex flex-col">
          <div className="flex flex-col px-5 pt-5 pb-2.5 shrink-0">
            <div className="flex flex-row text-on-surface-1 justify-between items-center h-10">
              <span className="font-inter text-2xl leading-[120%] font-bold">Singles</span>
              <div className="flex flex-col text-right gap-y-1">
                <span className="font-inter text-xs leading-[140%] text-on-surface-3">Available balance</span>
                <span className="font-inter text-sm leading-[140%] text-on-surface-1">${user?.balance}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              {betslipData?.length > 0 ?
                <div className="flex flex-col overflow-hidden min-h-0 transition-[height] ease-out duration-300 h-full">
                  <div className="flex-1 min-h-0 overflow-y-scroll no-scrollbar shadow-inner scroll-smooth focus:scroll-auto">
                    <div className="h-full">
                      {betslipData.map((item: any, index: any) => (
                        <BetslipItem
                          item={item}
                          onRemove={handleRemove}
                          availableBalance={availableBalance}
                          setAvailableBalance={setAvailableBalance}
                          updateBetSlipData={updateBetSlipData}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                :
                <div className="flex flex-col justify-center items-center flex-1 space-y-6 text-xs">
                  <img src={ImgBetslip} alt="empty" className="w-40 h-40" />
                  <div className="flex flex-col items-center gap-y-1">
                    <span className="font-inter text-2xl leading-[120%] text-on-surface-1">Your betslip is empty</span>
                    <span className="font-inter text-sm leading-[140%] text-on-surface-3">Make your picks now to place bets</span>
                  </div>
                </div>
              }
            </div>
            <div className="shrink-0 ">
              <div className="flex flex-col px-5 gap-y-4 w-full justify-self-end pb-safe-offset-5">
                <div className="h-1 w-full bg-gradient-to-r from-background via-tertiary-3 to-background"></div>
                <RoundedButton text="Place bet" disabled={betslipData.length === 0} onClick={handleBet} className="mb-2" />
                {/* <div className="transition-opacity ease-out duration-300 opacity-100">
                  <div className="flex flex-row w-full justify-center items-center h-[40px]">
                    <span className="font-inter text-sm leading-[140%] text-on-surface/70">Accept all odds changes and partial placements</span>
                    <IOSSwitch className="ml-auto" />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
