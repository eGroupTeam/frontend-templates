import { SET_DIALOG_DATA, dialogs } from "@eGroupTeam/redux-modules/dialogs";
import {
  SET_SNACKBAR_DATA,
  snackbars,
} from "@eGroupTeam/redux-modules/snackbars";
import { configureStore } from "@reduxjs/toolkit";

import { publicPages } from "./publicPages";

function configureAppStore() {
  const store = configureStore({
    reducer: {
      dialogs,
      snackbars,
      publicPages,
    },
    // Correct typings for the Dispatch type
    // https://redux-toolkit.js.org/usage/usage-with-typescript
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [SET_DIALOG_DATA, SET_SNACKBAR_DATA],
          ignoredPaths: ["components.MuiThemeProvider", "dialogs", "snackbars"],
        },
      }),
    devTools: process.env.NODE_ENV !== "production",
  });

  return store;
}

export const store = configureAppStore();
export type AppDispatch = typeof store.dispatch;
