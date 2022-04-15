import { Outcome } from "@eGroupTeam/utils/getDeviceInfo";

export type LogApiPayload = {
  function: string;
  browserDescription: string;
  jsonData: {
    action?: unknown;
    store?: unknown;
    deviceInfo?: Outcome[];
    data?: unknown;
  };
  level: "ERROR" | "INFO";
  message?: string;
};
