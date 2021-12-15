import { Outcome } from "@eGroupTeam/utils/getDeviceInfo";
import { RootState } from "redux/configureAppStore";

export type LogPayload = {
  function: string;
  browserDescription: string;
  jsonData: {
    action?: unknown;
    store?: RootState;
    deviceInfo?: Outcome[];
    data?: unknown;
  };
  level: "ERROR" | "INFO";
  message?: string;
};