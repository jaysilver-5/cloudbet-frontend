import { ChatBubbleOutlineOutlined, Close, ContactMailOutlined, EmailOutlined, GppGoodOutlined, History, LoginOutlined, LogoutOutlined, SettingsOutlined, WarningRounded } from "@mui/icons-material";
import { useState } from "react";
import CheckableTabButton from "src/components/common/button/CheckableTabButton";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import RoundedButton from "src/components/common/button/RoundedButton";
import ProfileSecurity from "./ProfileSecurity";
import ProfilePreferences from "./ProfilePreferences";
import ProfileVerification from "./ProfileVerification";
import ProfileInbox from "./ProfileInbox";
import { useDispatch } from "react-redux";
import { showModal } from "src/redux/actions/uiAction";
import { MODAL_DEPOSIT, MODAL_HISTORY, MODAL_WITHDRAW } from "src/redux/types";
import { useAuth } from "../../../src/context/authContext/index";

export default function Profile({
  onClose
}: {
  onClose?: any;
}) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [activePanel, setActivePanel] = useState<any>(null);

  const handleDeposit = () => {
    dispatch(showModal(MODAL_DEPOSIT));
  }
  const handleWithdraw = () => {
    dispatch(showModal(MODAL_WITHDRAW));
  }
  const handleHistory = () => {
    dispatch(showModal(MODAL_HISTORY));
  }
  const handleLiveSupport = () => {

  }
  const handleLogout = () => {

  }

  return (
    <>
      <div className="fixed right-5 top-3 z-40 flex items-center">
        <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={() => onClose && onClose()} />
      </div>

      {!activePanel &&
        <div className="md:select-auto select-none flex flex-col animate-slideFromLeft h-full">
          <div className="pt-3 pb-3 pl-5 pr-5 flex items-center gap-2 min-h-16">
            <span className="font-inter text-2xl leading-[120%]  font-bold text-on-surface-1">
              {user?.username}
            </span>
            <RoundedButton
              text="Unverified"
              textClassName="!text-sm !leading-5 !text-on-warning"
              className="!bg-warning !px-1 !h-5 !w-fit"
              leftIcon={<WarningRounded className="size-icon-xs !text-sm mr-1 text-on-warning" />}
              onClick={() => setActivePanel("verification")}
            />
          </div>
          <div className="p-5">
            <span className="font-inter text-xl leading-[120%] font-bold text-on-surface-1">Wallet</span>
            <ul className="mt-2 grid grid-cols-3 gap-3 list-none">
              <li className="relative">
                <CheckableTabButton
                  text={<span className="!text-primary">Deposit</span>}
                  iconComponent={<LoginOutlined className="-rotate-90 !text-3xl text-primary group-hover:scale-110 duration-200 ease-out" />}
                  onClick={handleDeposit}
                />
              </li>
              <li className="relative">
                <CheckableTabButton
                  text={"Withdraw"}
                  iconComponent={<LogoutOutlined className="rotate-90 !text-3xl text-on-tertiary-3 group-hover:scale-110 duration-200 ease-out" />}
                  onClick={handleWithdraw}
                />
              </li>
              <li className="relative">
                <CheckableTabButton
                  text={"History"}
                  iconComponent={<History className="!text-3xl text-on-tertiary-3 group-hover:scale-110 duration-200 ease-out" />}
                  onClick={handleHistory}
                />
              </li>
            </ul>
          </div>
          <div className="p-5">
            <span className="font-inter text-xl leading-[120%] font-bold text-on-surface-1">Account</span>
            <ul className="mt-2 grid grid-cols-3 gap-3 list-none">
              <li className="relative">
                <CheckableTabButton
                  text={"Security"}
                  iconComponent={<GppGoodOutlined className="!text-3xl text-on-tertiary-3 group-hover:scale-110 duration-200 ease-out" />}
                  onClick={() => setActivePanel("security")}
                />
              </li>
              <li className="relative">
                <CheckableTabButton
                  text={"Preferences"}
                  iconComponent={<SettingsOutlined className="!text-3xl text-on-tertiary-3 group-hover:scale-110 duration-200 ease-out" />}
                  onClick={() => setActivePanel("preferences")}
                />
              </li>
              <li className="relative">
                <CheckableTabButton
                  text={"Verification"}
                  iconComponent={<ContactMailOutlined className="!text-3xl text-on-tertiary-3 group-hover:scale-110 duration-200 ease-out" />}
                  onClick={() => setActivePanel("verification")}
                />
              </li>
              <li className="relative">
                <CheckableTabButton
                  text={"Live Support"}
                  iconComponent={<ChatBubbleOutlineOutlined className="!text-3xl text-on-tertiary-3 group-hover:scale-110 duration-200 ease-out" />}
                  onClick={handleLiveSupport}
                />
              </li>
              <li className="relative">
                <CheckableTabButton
                  text={"Inbox"}
                  iconComponent={<EmailOutlined className="!text-3xl text-on-tertiary-3 group-hover:scale-110 duration-200 ease-out" />}
                  onClick={() => setActivePanel("inbox")}
                />
              </li>
              <li className="relative">
                <CheckableTabButton
                  text={"Sign out"}
                  iconComponent={<LogoutOutlined className="!text-3xl text-on-tertiary-3 group-hover:scale-110 duration-200 ease-out" />}
                  onClick={handleLogout}
                />
              </li>
            </ul>
          </div>
        </div>
      }
      {activePanel == 'security' &&
        <ProfileSecurity onBack={() => setActivePanel(null)} />
      }
      {activePanel == 'preferences' &&
        <ProfilePreferences onBack={() => setActivePanel(null)} />
      }
      {activePanel == 'verification' &&
        <ProfileVerification onBack={() => setActivePanel(null)} />
      }
      {activePanel == 'inbox' &&
        <ProfileInbox onBack={() => setActivePanel(null)} />
      }
    </>
  );
}
