import { RootState } from 'src/redux/store';
import { useSelector } from 'react-redux';

/**
 * Custom hook to retrieve loading state from the Redux store.
 *
 * @returns The boolean value if data is loading.
 */
export const useLoading = () => {
  const loading = useSelector((state: RootState) => state.ui.loading);
  return loading;
};
