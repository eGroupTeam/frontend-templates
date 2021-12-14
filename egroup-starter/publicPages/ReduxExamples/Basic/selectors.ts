import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/configureAppStore";

/**
 * API States
 */
const getUiStates = (state: RootState) => state.publicPages.Basic;

export const getCounts = createSelector(
  getUiStates,
  (uiStates) => uiStates.counts
);
