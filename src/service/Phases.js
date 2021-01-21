import { gatewayHelper } from "../utility";

export const phasesService = {
  getListPhases,
};

async function getListPhases() {
  const body = {};
  const response = await gatewayHelper.http("GET", "phases", body);
  return response;
}
