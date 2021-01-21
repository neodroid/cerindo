import { gatewayHelper } from "../utility";

export const phasesService = {
  getListPhases,
  getDetailPhases,
};

async function getListPhases() {
  const body = {};
  const response = await gatewayHelper.http("GET", "phases", body);
  return response;
}

async function getDetailPhases(phaseId) {
  const body = {};
  const response = await gatewayHelper.http("GET", "phases/" + phaseId, body);
  return response;
}
