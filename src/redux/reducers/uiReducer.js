import { HIDE_FILTERDRAWER, HIDE_MODAL, HIDE_RDRAWER, LOADING, SHOW_FILTERDRAWER, SHOW_MODAL, SHOW_RDRAWER } from '../types';

const initialState = {
  loading: false,

  isShowRightDrawer: false,
  rightDrawerType: 0,

  isShowFilterDrawer: false,

  isShowModal: false,
  modalType: 0,
  actionData: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case SHOW_RDRAWER:
      return {
        ...state,
        isShowRightDrawer: true,
        isShowFilterDrawer: false,
        rightDrawerType: action.payload,
        actionData: action.data,
      };
    case HIDE_RDRAWER:
      return {
        ...state,
        isShowRightDrawer: false,
      };

    case SHOW_FILTERDRAWER:
      return {
        ...state,
        isShowRightDrawer: false,
        isShowFilterDrawer: true,
      };
    case HIDE_FILTERDRAWER:
      return {
        ...state,
        isShowFilterDrawer: false,
      };

    case SHOW_MODAL:
      return {
        ...state,
        isShowModal: true,
        modalType: action.payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        isShowModal: false,
      };

    default:
      return state;
  }
}
