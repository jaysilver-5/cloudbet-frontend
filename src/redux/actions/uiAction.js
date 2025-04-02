import { HIDE_MODAL, HIDE_FILTERDRAWER, HIDE_RDRAWER, SHOW_MODAL, SHOW_FILTERDRAWER, SHOW_RDRAWER } from "../types";

export const showRightDrawer = (type, data = null) => (dispatch) => {
  console.log("🚀 showRightDrawer ~ data:", data)
  dispatch({
    type: SHOW_RDRAWER,
    payload: type,
    data: data
  });
};
export const hideRightDrawer = () => (dispatch) => {
  dispatch({
    type: HIDE_RDRAWER,
  });
};

export const showFilterDrawer = () => (dispatch) => {
  dispatch({
    type: SHOW_FILTERDRAWER,
  });
};
export const hideFilterDrawer = () => (dispatch) => {
  dispatch({
    type: HIDE_FILTERDRAWER,
  });
};

export const showModal = (type) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload: type
  });
};
export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  });
};
