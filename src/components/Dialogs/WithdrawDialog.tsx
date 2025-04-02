import CustomModal from "../common/modal/CustomModal";
import RoundedButton from "src/components/common/button/RoundedButton";

import { useDispatch } from "react-redux";
import { showModal } from "src/redux/actions/uiAction";
import { MODAL_DEPOSIT } from "src/redux/types";
import CircleIconButton from "../common/button/CircleIconButton";
import { Close } from "@mui/icons-material";

export default function WithdrawDialog({
  open,
  onClose
}: {
  open: boolean;
  onClose: any;
}) {

  const dispatch = useDispatch();

  const handleDeposit = () => {
    dispatch(showModal(MODAL_DEPOSIT));
  }

  return (
    <CustomModal onClose={onClose} open={open}>
      <div className="mx-auto flex-grow w-full sm:max-w-4xl lg:max-w-3xl xl:max-w-2xl">
        <div className="flex flex-col w-full h-full relative max-w-full">
          <div className="flex flex-col sticky top-0 left-0 z-20 rounded-lg sm:rounded-none p-5 bg-surface-1">
            <div className="flex justify-between items-center h-10 sm:gap-x-0 gap-x-3">
              <div className="flex flex-col gap-y-2 w-full">
                <span className="font-inter text-2xl leading-[120%] font-bold">Select currency to withdraw</span>
              </div>
              <div className="sm:hidden">
                <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={onClose} />
              </div>
            </div>
          </div>
          <div className="justify-between transition-all flex-1 sm:flex-auto duration-200 ease-out flex flex-col opacity-100 sm:!h-[60vh] overflow-y-auto h-full overflow-x-hidden">
            <div className="w-full h-full text-center">
              <div className="w-full h-full gap-y-8 text-on-surface-1 flex flex-col items-center justify-center">
                <div className="w-2/5 relative aspect-1 transition-opacity ease-out duration-200 opacity-100">
                  <img src="/imgs/empty-state2.webp" alt="Your wallet is empty" loading="eager" className="object-cover" />
                  <div className="bg-gradient-to-t from-background from-10% to-background/0 absolute w-full h-full top-0 left-0"></div>
                </div>
                <div className="px-5 flex flex-col gap-y-1">
                  <span className="font-inter text-2xl leading-[120%] font-bold">Your wallet is empty</span>
                  <div className="flex flex-col gap-y-2.5 pt-4 items-center pb-3">
                    <div>
                      <RoundedButton
                        text={`Deposit Now`}
                        className="!bg-primary "
                        textClassName="text-on-primary"
                        onClick={handleDeposit}
                      />
                    </div>
                    <img src="/imgs/providers-logos.svg" alt="Buy Crypto With Card" className="w-40" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}
