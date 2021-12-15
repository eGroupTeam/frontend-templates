import { fetcher } from "@eGroupTeam/hooks/fetchers";
import { LogPayload } from "interfaces";

const tools = {
  /**
   * Log errors.
   */
  createLog: (payload?: LogPayload) => fetcher.post("/logs", payload),
};

export default {
  tools,
};
