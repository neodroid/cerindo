import { gatewayHelper } from "../utility";

export const footerService = {
  getFooter,
};

async function getFooter() {
  const body = {};
  const response = await gatewayHelper.http("GET", "footer", body);
  return response;
}
