import { dialogs } from "@eGroupTeam/redux-modules/dialogs";
import { snackbars } from "@eGroupTeam/redux-modules/snackbars";
import { configureStore } from "@reduxjs/toolkit";

import { publicPages } from "./publicPages";

export const store = configureStore({
  reducer: {
    dialogs,
    snackbars,
    publicPages,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Correct typings for the Dispatch type
// https://redux-toolkit.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
