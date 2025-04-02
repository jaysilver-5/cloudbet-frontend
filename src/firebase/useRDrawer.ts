import { RootState } from 'src/redux/store';
import { useSelector } from 'react-redux';

export const useRDrawer = () => {
  const status = useSelector((state: RootState) => state.ui);
  return {
    isShow: status.isShowRightDrawer,
    type: status.rightDrawerType,

    isFilter: status.isShowFilterDrawer,
    data: status.actionData,
  };
};
