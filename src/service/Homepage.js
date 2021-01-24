import { gatewayHelper } from "../utility";

export const homeService = {
  getListHome,
};

async function getListHome() {
  const body = {};
  const response = await gatewayHelper.http("GET", "homepage", body);
  return response;
}
