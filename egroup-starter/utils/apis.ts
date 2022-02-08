import { fetcher } from "@eGroupTeam/hooks/apis/fetchers";
import { LogPayload } from "interfaces/payloads";

const tools = {
  /**
   * Log errors.
   */
  createLog: (payload?: LogPayload) => fetcher.post("/logs", payload),
};

export default {
  tools,
};
