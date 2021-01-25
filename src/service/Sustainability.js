import { gatewayHelper } from "../utility";

export const sustainService = {
  getListSustain,
};

async function getListSustain() {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "global-sustainibility",
    body
  );
  return response;
}
