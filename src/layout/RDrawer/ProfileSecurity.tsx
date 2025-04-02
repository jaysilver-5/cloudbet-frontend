import { KeyboardArrowLeft, WarningAmberRounded } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import RoundedButton from "src/components/common/button/RoundedButton";
import { showModal } from "src/redux/actions/uiAction";
import { MODAL_TWOFACTOR } from "src/redux/types";

export default function ProfileSecurity({
  onBack
}: {
  onBack: any
}) {
  const dispatch = useDispatch();

  const handleConfigure = () => {
    dispatch(showModal(MODAL_TWOFACTOR));
  }

  return (
    <div className="md:select-auto min-h-full select-none flex flex-col animate-slideFromRight">
      <div className="flex flex-row w-full items-center justify-between pt-3 pb-3 pl-2 pr-5 sticky top-0 bg-background z-20">
        <button className="flex items-center gap-1 group/icon-button" onClick={onBack}>
          <CircleIconButton iconComponent={<KeyboardArrowLeft />} className="!w-10 !h-10 border-transparent" />
          <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface-1">Security</span>
        </button>
      </div>

      <div className="flex flex-col">
        <section className="p-5">
          <p className="mb-2">
            <span className="font-inter text-xl leading-[120%] font-bold text-on-surface-1">2-Factor Authentication</span>
          </p>
          <p className="relative">
            <div className="rounded-full px-1 h-5 font-medium items-center justify-center gap-x-1 bg-warning text-on-warning !inline-flex">
              <WarningAmberRounded className="!text-sm mr-1 text-on-warning" />
              <span className="font-inter text-xs !leading-5">2FA is disabled</span>
            </div>
            <p className="text-on-surface text-sm mb-5 mt-4">
              Improve the security of your account by requiring verification, using your phone, when signing in or withdrawing funds:
            </p>
            <RoundedButton
              text={'Configure'}
              textClassName="text-on-tertiary !text-2xl font-bold"
              className="!w-fit"
              onClick={handleConfigure}
            />
          </p>
        </section>
      </div>
    </div>
  );
}
