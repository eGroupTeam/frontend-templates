import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "interfaces/utils";

/**
 * API States
 */
const getUiStates = (state: RootState) => state.publicPages.basic;

export const getCounts = createSelector(
  getUiStates,
  (uiStates) => uiStates.counts
);
