import CustomModal from "../common/modal/CustomModal";
import RoundedButton from "src/components/common/button/RoundedButton";

import { getFormattedDay, getFormattedName, getFormattedTime } from "src/utils";

import ImgLogo from "src/assets/logo.svg"
import CircleIconButton from "../common/button/CircleIconButton";
import { Close } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function BettingInfoDialog({
  item,
  open,
  onClose
}: {
  item: any;
  open: boolean;
  onClose: any;
}) {
  const navigate = useNavigate();

  const handlePlay = () => {
    onClose();
    navigate("/casino/play/" + item?.game?.id)
  }

  const handleShare = () => {

  }
  
  return (
    <CustomModal onClose={onClose} open={open}>
      <div className="relative w-full h-full flex flex-col items-center p-5 gap-5">
        <div className="absolute inset-0 h-full w-full overflow-hidden rounded-4xl-1 -translate-y-10">
          <div className="bg-gradient-to-t from-background to-background/0 from-[60%] absolute w-full h-full inset-0"></div>
        </div>
        <div className="flex flex-col items-center relative w-full gap-4">

          <div className="w-full flex sm:hidden justify-end">
            <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={onClose} />
          </div>
          <span className="font-inter text-2xl leading-[120%] font-Midnight font-bold text-on-background uppercase">Bet Details</span>
          <div className="flex flex-col items-center gap-2">
            <div className="w-36 aspect-[30/23] relative rounded-3xl">
              <div className="absolute inset-0 rounded-3xl w-full aspect-[30/23] bg-surface-1" ></div>
              <img src={item?.game?.logo} className="absolute inset-0 h-full w-full rounded-3xl object-cover object-center" />
            </div>
            <span className="font-inter text-2xl leading-[120%] text-on-surface-1 !text-base font-medium">{item?.game?.name}</span>
          </div>
          <div className="relative group/card p-1 rounded-4xl before:content-[''] before:absolute before:-z-[1] before:w-full before:h-full before:top-0 before:left-0 before:shadow before:rounded-t-4xl before:transition-opacity before:ease-in-out before:duration-300 before:opacity-0 bg-surface-2 w-full mt-12 pointer-events-none">
            <div className="w-full h-full relative bg-background rounded-4xl-1">
              <div className="w-full h-full top-0 left-0 absolute overflow-hidden rounded-4xl-1"><div className="w-full h-full transition-all ease-out duration-300 bg-gradient-to-b from-surface-1 to-background/0 max-h-[300px] relative !bg-background " data-test-id="card-inner-content-container-background"></div></div>
              <div className="w-full h-full relative">
                <div className="flex flex-col items-center gap-4 pt-8">
                  <span className="font-inter leading-[140%] text-sm font-light text-on-surface-3 pt-1">
                    {getFormattedDay(item?.date)} at {getFormattedTime(item?.date)}
                  </span>
                  <div className="w-full flex gap-x-1 px-5 items-center">
                    <div className="w-full h-0.5 bg-outline-2" role="separator" style={{ background: "linear-gradient(to left, rgb(224, 224, 224), transparent);" }}></div>
                    <img src={ImgLogo} className="h-4" />
                    <div className="w-full h-0.5 bg-outline-2" role="separator" style={{ background: "linear-gradient(to left, rgb(224, 224, 224), transparent);" }}></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 items-center gap-4 p-3">
                  <div className="flex flex-col items-center">
                    <span className="font-inter leading-[140%] text-sm text-on-surface-3 uppercase">Bet</span>
                    <div className="relative inline-block tabular-nums font-inter text-2xl !normal-nums font-inter font-medium" >
                      <span className="relative transition-all duration-300 text-on-surface">$<span>{item?.amount}</span></span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-inter leading-[140%] text-sm text-on-surface-3 uppercase">Multiplier</span>
                    <span className="font-inter leading-[140%] !text-2xl font-inter font-medium text-on-surface-1">{item?.multiplier}x</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-inter leading-[140%] text-sm text-on-surface-3 uppercase">Payout</span>
                    <div className="flex items-center">
                      <div className="relative inline-block tabular-nums font-inter text-2xl !normal-nums font-inter leading-[140%] !font-extrabold">
                        <span className="relative transition-all duration-300 text-success-40">$<span>{item?.payout}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 px-3 py-2 bg-surface-2 rounded-full border-[3px] group/button pointer-events-auto border-tertiary-2">
                  <div className="flex items-center gap-1">
                    <div className="relative rounded-full flex justify-center aspect-1 overflow-hidden size-icon-l">
                      <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                        <img alt="avatar" loading="lazy" decoding="async" data-nimg="fill" className="object-cover" src={item?.user?.avatar} />
                      </div>
                    </div>
                    <span className="font-inter text-xl leading-[120%] text-on-surface-1">{getFormattedName(item?.user?.name)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 py-2">
            <span className="font-inter leading-[140%] text-base text-on-surface-3 uppercase">
              ID: {item?.id}
            </span>
          </div>
          <div className="flex items-center justify-center w-full gap-4">
            <div className="w-1/2">
              <RoundedButton
                text={`Play ${item?.game?.name}`}
                textClassName="text-on-tertiary text-center"
                onClick={handlePlay}
              />
            </div>
            <div className="w-1/2">
              <RoundedButton
                text={`Share Bet`}
                className="!bg-primary "
                textClassName="text-on-primary"
                onClick={handleShare}
              />
            </div>
          </div>
          <div className="flex items-center text-center justify-center">
            <span className="font-inter text-xs leading-[140%] text-on-tertiary-3 px-2">
              Earn 2.5% commission for life on all bets placed by users who join using your bet share link.
            </span>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}
