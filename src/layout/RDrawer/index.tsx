import { useDispatch } from "react-redux";
import { hideRightDrawer } from "src/redux/actions/uiAction";
import { RDRAWER_BETSLIP, RDRAWER_MYBETS, RDRAWER_PROFILE, RDRAWER_REWARDS } from "src/redux/types";
import Betpane from "./Betpane";
import Rewards from "./Rewards";
import Profile from "./Profile";

export default function RDrawer({
  isShow,
  type,
  data
}: {
  isShow: any;
  type: any;
  data: any;
}) {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(hideRightDrawer());
  }

  return (
    <div className={`fixed right-0 flex z-sideSheet ease-in-out transition-all duration-500 md:z-[50] ${isShow ? 'translate-x-0' : 'translate-x-full'} opacity-100 bottom-0 w-lg max-w-full top-0 sm:top-[70px]`}>
      <div className="relative z-sideSheet flex w-full overflow-hidden bg-background transform transition ease-in-out duration-500 border-t-[0.25rem] border-l-[0.25rem] border-surface-2 rounded-tl-4xl  shadow">
        <div className="relative flex-grow w-full">
          <div className="rounded-tl-2xl relative h-full overflow-auto scrollbar-hide ">
            <div className="flex h-full flex-col w-full   transform transition ease-in-out duration-500 sm:duration-300 bg-background">
              <div className="relative flex-1 transition-opacity overflow-y-auto overflow-x-hidden scrollbar-hide duration-200 scrollbar-custom pt-0 3xl:pt-0">
                <div className="h-full transition-all opacity-100 duration-200 ease-out">

                  {(type == RDRAWER_BETSLIP || type == RDRAWER_MYBETS) && <Betpane type={type} onClose={handleClose} data={data} />}
                  {(type == RDRAWER_REWARDS) && <Rewards onClose={handleClose} />}
                  {(type == RDRAWER_PROFILE) && <Profile onClose={handleClose} />}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
