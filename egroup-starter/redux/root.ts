import { AnyAction, CombinedState, combineReducers } from "redux";
import { dialogs } from "@eGroupTeam/redux-modules/dialogs";
import { snackbars } from "@eGroupTeam/redux-modules/snackbars";

import { logout } from "components/PrivateLayout/actions";
import { publicPages } from "./publicPages";

const appReducer = combineReducers({
  dialogs,
  snackbars,
  publicPages,
});

export const rootReducer = (state: CombinedState<any>, action: AnyAction) => {
  if (action.type === logout.type) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};
