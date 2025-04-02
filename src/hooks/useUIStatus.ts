import { RootState } from 'src/redux/store';
import { useSelector } from 'react-redux';

export const useUIStatus = () => {
  const status = useSelector((state: RootState) => state.ui);
  return status;
};
