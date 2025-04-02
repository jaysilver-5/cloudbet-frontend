import RoundedButton from "src/components/common/button/RoundedButton";
import IconBet from "../assets/imgs/main/icon-bet.svg";
import IconUser from "../assets/imgs/main/icon-user.svg";
import IconRewards from "../assets/imgs/main/icon-rewards.svg";
import IconSearch from "../assets/imgs/main/icon-search.svg";
import CircleIconButton from "src/components/common/button/CircleIconButton";
import { MODAL_CURRENCY, MODAL_DEPOSIT, RDRAWER_MYBETS, RDRAWER_PROFILE, RDRAWER_REWARDS } from "src/redux/types";
import { useDispatch } from "react-redux";
import { hideRightDrawer, showModal, showRightDrawer } from "src/redux/actions/uiAction";
import { useRDrawer } from "src/hooks/useRDrawer";
import { Close, KeyboardArrowDown } from "@mui/icons-material";
import { styled } from '@mui/material/styles';
import { Popover } from "@mui/material";
import { useRef, useState } from "react";
import CheckableButton from "src/components/common/button/CheckableButton";
import { coins } from "src/utils/constants";
import { useAuth } from "../../src/context/authContext/index";

const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    background: 'transparent',
  }
}));

export default function Header() {

  const dispatch = useDispatch();
  const rdrawer = useRDrawer();
  const { user } = useAuth();

  const handleShowRDrawer = (type: any) => {
    if (rdrawer.isShow && rdrawer.type == type) {
      dispatch(hideRightDrawer());
    } else {
      dispatch(showRightDrawer(type));
    }
  }

  const handleDeposit = () => {
    dispatch(showModal(MODAL_DEPOSIT));
  }


  const buttonRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const handleShowMenu = () => {
    setAnchorEl(buttonRef.current);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleCurrency = () => {
    dispatch(showModal(MODAL_CURRENCY));
  }


  return (
    <header className="sticky md:z-40 z-50 w-full flex-shrink-0 py-2.5 min-h-[var(--header-height)] flex flex-col items-start sm:items-center bg-background/90 transition-top duration-200 !bg-background top-0">
      <div className="flex items-center w-full px-5 relative sm:px-8 !bg-background !z-[38]">
        <div className="mr-3">
          {/* <CircleIconButton icon={IconSearch} /> */}
        </div>

        <div className="h-14 group relative mr-1 lg:absolute lg:left-1/2 lg:!-translate-x-1/2 transition-all duration-300 ease-out">
          <div className={`flex items-center bg-surface-2 relative ring-2 rounded-full h-full w-full gap-x-3 pl-1.5 sm:pr-1.5 lg:pr-0 transition-all duration-200 ease-out   ring-transparent ${open && 'ring-secondary !bg-secondary/30'}  !min-w-fit`}>
            <div className="absolute inset-0 transition-all rounded-full duration-300 ease-out bg-on-surface-1 opacity-0 group-hover:opacity-[0.06] group-active:opacity-[0.12]"></div>
            <div className="absolute rounded-full inset-0 transition-all duration-300 ease-out bg-secondary  opacity-0 "></div>
            <div
              ref={buttonRef}
              className="flex flex-nowrap relative items-center h-full md:overflow-visible overflow-hidden gap-x-2 transition-all animate-expand"
            >
              <div className="flex-shrink-0 flew-grow-1 h-full flex items-center justify-center">
                <div className="off-relative transition-all h-full">
                  <button
                    className=" group h-full font-medium text-sm text-on-surface pl-1 space-x-1.5 flex flex-row items-center transition-all duration-150 ease-out active:scale-95 md:max-w-full "
                    onClick={() => handleShowMenu()}
                  >
                    <span className="mx-1 order-1">
                      <div className="relative rounded-full flex justify-center aspect-1 overflow-hidden size-icon-s shrink-0">
                        <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                          <img alt="USDT" loading="eager" decoding="async" data-nimg="fill" className="object-cover" src="https://res.cloudinary.com/betengine/image/upload/q_auto/f_webp/v1/media-cloudbet/wallet/currency-icons/USDT?_a=DATAdtAAZAA0" />
                        </div>
                      </div>
                    </span>
                    <div className="font-bold relative group overflow-hidden text-on-surface/[.4]">
                      <span className="font-inter text-sm leading-[140%] flex flex-row space-x-1 items-center">
                        <span className="inline-block w-full overflow-hidden truncate">${user?.balance}</span>
                      </span>
                    </div>
                    <KeyboardArrowDown className="h-4 w-4 ml-0.5 shrink-0 text-on-surface transition-all ease-out duration-100" />
                  </button>
                </div>
              </div>
              <div className="items-center flex h-full flex-nowrap p-1">
                <button
                  onClick={handleDeposit}
                  className="relative after:w-full after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 outline outline-offset-1 outline-2 outline-transparent focus:outline-on-surface-1 flex items-center justify-center rounded-full transition-all ease-out duration-300 border-2 group/button active:outline-none active:scale-95 w-full px-5 bg-primary border-primary text-on-primary disabled:text-surface-disabled disabled:border-transparent disabled:bg-surface-disabled/[0.12] disabled:pointer-events-none !h-full !min-h-0"
                >
                  <p className="flex flex-col relative text-center transition-opacity ease-out duration-200">
                    <span className="font-inter text-xl leading-[120%] font-bold">Deposit</span>
                  </p>
                </button>
              </div>
            </div>

            <StyledPopover
              open={open}
              anchorEl={anchorEl}
              onClose={handleCloseMenu}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <div className="md:pt-4 md:px-1 md:pb-1">
                <div className="md:rounded-2xl md:shadow-glow-3 md:ring-2 md:ring-surface-5 md:overflow-visible md:pt-0 md:h-auto md:pb-0 md:shadow-blackish/50 md:!outline-none w-[calc(100vw-32px)] md:w-[400px] h-full pt-4 bg-surface-1 text-on-surface z-50 max-h-[100dvh] overflow-auto ease-in-out transition-all duration-500 translate-y-0 md:block">
                  <div className="h-full ">
                    <div className=" fixed right-3 top-3 z-40 flex items-center md:hidden ">
                      <CircleIconButton iconComponent={<Close />} className="!w-10 !h-10" onClick={handleCloseMenu} />
                    </div>
                    <div className="h-full flex flex-col">
                      <div className="">
                        <div className="px-5 pt-3 pb-2 flex items-center justify-between">
                          <span className="font-inter text-2xl leading-[120%] font-bold text-on-surface">Active Balance</span>
                        </div>
                        <div className="px-3 mb-1">
                          <div className="relative flex items-center justify-between px-2 py-2">
                            <div className="flex items-center">
                              <div className="relative rounded-full flex justify-center aspect-1 overflow-hidden size-icon-m w-6 h-6">

                                <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                                  <img alt="USDT" loading="eager" decoding="async" data-nimg="fill" className="object-cover" src="https://res.cloudinary.com/betengine/image/upload/q_auto/f_webp/v1/media-cloudbet/wallet/currency-icons/USDT?_a=DATAdtAAZAA0" />
                                </div>
                              </div>
                              <span className="ml-2 font-medium text-sm">USD</span>
                            </div>

                            <div className="text-right">
                              <div className="text-sm font-medium">
                                <span className="font-inter text-sm leading-[140%] flex flex-row space-x-1 items-center">
                                  <span className="inline-block w-full overflow-hidden truncate">0.00</span>
                                </span>
                              </div>
                              <div className="text-xs opacity-60">
                                ≈ <span className="font-bold tabular-nums">€0</span>
                              </div>
                            </div>
                          </div>
                          {/* <div className="flex space-x-2 px-2 py-3 border-t-[1.5px] border-surface-5 border-b-none">
                            <CheckableButton
                              text="USDT"
                              textClassName="!text-xs"
                              className="!h-7"
                            />
                            <CheckableButton
                              text="USD"
                              textClassName="!text-xs"
                              className="!h-7"
                              checked
                            />
                          </div> */}
                        </div>
                      </div>
                      <div className="flex flex-col flex-auto overflow-hidden">
                        <div className="scrollbar-hide bg-background border-surface-5 py-2 overflow-auto flex flex-auto flex-col md:max-h-[13rem]">
                          <span className="font-inter text-base leading-[140%] text-on-surface-2 p-3 pl-5">Available Balances</span>
                          {coins.map((item, index) => (
                            <div key={index} className="overflow-hidden shrink-0">
                              <button className="relative flex items-center justify-between px-5 py-3 w-full transition-all duration-300 ease-out group/currency-balance hover:bg-surface-2 border-b border-surface-2">
                                <div className="flex items-center transition-all duration-300 ease-out group-active/currency-balance:scale-95">
                                  <div className="relative rounded-full flex justify-center aspect-1 overflow-hidden size-icon-m transition-all duration-300 ease-out group-hover/currency-balance:scale-110">
                                    <div className="relative transition-opacity duration-300 ease-in-out opacity-100 w-full h-full">
                                      <img alt={item.name} loading="eager" decoding="async" data-nimg="fill" className="object-cover" src={item.logo} />
                                    </div>
                                  </div>
                                  <span className="ml-2 font-medium text-sm">{item.name}</span>
                                </div>
                                <div className="text-right">
                                  <p className="text-sm font-medium">0.00000000</p>
                                  <p className="text-xs opacity-60">
                                    ≈ <span className="font-bold tabular-nums">€0</span>
                                  </p>
                                </div>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* <div className="flex flex-col w-full items-center justify-center bg-background rounded-b-2xl px-16 sm:pt-0 pt-4">
                        <button
                          onClick={handleCurrency}
                          className="group/text-link relative inline-flex disabled:opacity-[0.12] disabled:pointer-events-none disabled:text-surface-disabled after:w-full after:h-[42px] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 p-3 mb-2"
                        >
                          <span className="font-inter text-sm leading-[140%] text-on-tertiary-3 underline underline-offset-4 transition-colors ease-out duration-300 font-medium group-hover/text-link:text-on-tertiary-1">Change balance display</span>
                        </button>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </StyledPopover>
          </div>
        </div>

        <div className="flex items-center space-x-1.5 ml-auto">
          <div className="transition ease-out duration-700">
            <div className="relative flex items-center gap-x-3">
              <div className=" hidden lg:flex">
                <RoundedButton
                  leftImg={IconBet}
                  imgClassName="w-8 h-8 !mr-0"
                  className="!p-1.5 !min-w-14 !w-14 h-14"
                  text="0"
                  textClassName="absolute font-Inter text-sm leading-[140%] flex items-center justify-center absolute left-0 right-0 top-1/2 -translate-y-1/2 text-black font-bold"
                  onClick={() => handleShowRDrawer(RDRAWER_MYBETS)}
                />
              </div>

              <div className=" hidden lg:flex">
                <RoundedButton
                  leftImg={IconRewards}
                  imgClassName="w-10 h-10"
                  className="h-14 !px-2"
                  text="Rewards"
                  onClick={() => handleShowRDrawer(RDRAWER_REWARDS)}
                />
              </div>

              <RoundedButton
                leftImg={IconUser}
                imgClassName="w-8 h-8 !mr-0"
                className="!p-1.5 !min-w-14 !w-14 h-14"
                onClick={() => handleShowRDrawer(RDRAWER_PROFILE)}
              />
            </div>
          </div>
        </div>

      </div>
      <div className="transition-opacity duration-300 w-full"></div>
    </header>
  );
}
