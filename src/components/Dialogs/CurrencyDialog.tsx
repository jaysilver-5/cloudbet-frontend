import CustomModal from "../common/modal/CustomModal";
import RoundedButton from "src/components/common/button/RoundedButton";

import { useDispatch } from "react-redux";
import { showModal } from "src/redux/actions/uiAction";
import { MODAL_DEPOSIT } from "src/redux/types";
import CircleIconButton from "../common/button/CircleIconButton";
import { Close } from "@mui/icons-material";
import { coins } from "src/utils/constants";
import CheckableButton from "../common/button/CheckableButton";
import { IOSSwitch } from "../common/switch/IOSSwitch";

export default function CurrencyDialog({
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
      <div className="w-full h-full relative">
        <div className="flex justify-between gap-x-3 items-start p-5">
          <span className="font-inter text-2xl leading-[120%] font-bold">Currency display</span>
          <div className="md:hidden">
            <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={onClose} />
          </div>
        </div>
        <div className="max-h-[75vh] overflow-auto scrollbar-custom">
          <div className="p-5 flex flex-col gap-y-5">
            <div>
              <div className="flex flex-col gap-y-4 w-full">
                <div className="flex flex-row items-center justify-between bg-surface-3 gap-x-5 rounded-full w-full pr-1.5 pl-3 py-1.5">
                  <span className="font-inter text-xl leading-[120%] font-medium text-on-surface-1">Show small balances</span>
                  <IOSSwitch className="ml-auto" />
                </div>
                <span className="font-inter text-sm leading-[140%] px-3 text-on-surface-3">
                  Currencies with zero balance will be hidden to make life easier for you
                </span>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-y-4 w-full">
                <div className="flex flex-row items-center justify-between bg-surface-3 gap-x-5 rounded-full w-full pr-1.5 pl-3 py-1.5">
                  <span className="font-inter text-xl leading-[120%] font-medium text-on-surface-1">Display in fiat currency</span>
                  <IOSSwitch className="ml-auto" />
                </div>
                <span className="font-inter text-sm leading-[140%] px-3 text-on-surface-3">
                  You can choose to show your balance in the app bar in your preferred fiat currency. This can be very helpful as crypto currency prices change frequently.
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4 md:grid-cols-5">
              {coins.map((item, index) => (
                <div key={index}>
                  <CheckableButton
                    icon={item.logo}
                    text={item.name}
                    className={"w-full"}
                    onClick={() => { }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-background sticky bottom-0 left-0 w-full flex items-center gap-5 p-5 md:rounded-b-4xl-0.5">
            <div className="flex-1 text-on-surface-2">
              <span className="font-inter text-base leading-[140%]">
                Please note that converted display amounts are approximations and updated every 3 minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
}
