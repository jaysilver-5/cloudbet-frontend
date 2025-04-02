import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import RDrawer from "./RDrawer";
import { useRDrawer } from "src/hooks/useRDrawer";
import FilterDrawer from "./RDrawer/FilterDrawer";
import { useUIStatus } from "src/hooks/useUIStatus";
import DepositDialog from "src/components/Dialogs/DepositDialog";
import { useDispatch } from "react-redux";
import { hideModal } from "src/redux/actions/uiAction";
import { MODAL_CURRENCY, MODAL_DEPOSIT, MODAL_HISTORY, MODAL_TWOFACTOR, MODAL_WITHDRAW } from "src/redux/types";
import WithdrawDialog from "src/components/Dialogs/WithdrawDialog";
import HistoryDialog from "src/components/Dialogs/HistoryDialog";
import CurrencyDialog from "src/components/Dialogs/CurrencyDialog";
import TwoFactorDialog from "src/components/Dialogs/TwoFactorDialog";
import BottomBar from "./BottomBar";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import MobileSidebar from "./MobileSidebar";

export default function Layout() {
  const isMobile = useMediaQuery('(max-width: 480px)');

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const drawerInfo = useRDrawer();
  const uiStatus = useUIStatus();

  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div>
      {
        pathname == "/" ?
          <Outlet />
          :
          <div className="flex min-h-0 flex-1 relative">
            <Sidebar />
            {isMobile &&
              <MobileSidebar open={showMobileSidebar} onClose={() => setShowMobileSidebar(false)} />
            }
            <div className="min-w-0 flex-1 flex flex-col basis-1 relative">
              <Header />
              {isMobile &&
                <BottomBar onShowMobileSidebar={() => setShowMobileSidebar(true)} />
              }
              <div className="w-full flex">
                <div className="w-full max-w-full">
                  <div className="basis-full min-h-[calc(100vh-4rem)] px-5 sm:px-8 xl:px-24 !overflow-visible">
                    <Outlet />
                  </div>
                  <Footer />
                </div>

                <RDrawer type={drawerInfo.type} isShow={drawerInfo.isShow} data={drawerInfo.data} />
                <FilterDrawer isShow={drawerInfo.isFilter} />
              </div>
            </div>

            {uiStatus.isShowModal &&
              <>
                {uiStatus.modalType == MODAL_DEPOSIT &&
                  <DepositDialog
                    open={uiStatus.isShowModal}
                    onClose={() => dispatch(hideModal())}
                  />
                }
                {uiStatus.modalType == MODAL_WITHDRAW &&
                  <WithdrawDialog
                    open={uiStatus.isShowModal}
                    onClose={() => dispatch(hideModal())}
                  />
                }
                {uiStatus.modalType == MODAL_HISTORY &&
                  <HistoryDialog
                    open={uiStatus.isShowModal}
                    onClose={() => dispatch(hideModal())}
                  />
                }
                {uiStatus.modalType == MODAL_CURRENCY &&
                  <CurrencyDialog
                    open={uiStatus.isShowModal}
                    onClose={() => dispatch(hideModal())}
                  />
                }
                {uiStatus.modalType == MODAL_TWOFACTOR &&
                  <TwoFactorDialog
                    open={uiStatus.isShowModal}
                    onClose={() => dispatch(hideModal())}
                  />
                }
              </>
            }
          </div>
      }
    </div>
  );
}
