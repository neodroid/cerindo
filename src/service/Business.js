import { gatewayHelper } from "../utility";

export const businessService = {
  getDetailBusiness,
  getListBusiness,
};

async function getListBusiness() {
  const body = {};
  const response = await gatewayHelper.http("GET", "businesses", body);
  return response;
}
async function getDetailBusiness(businessId) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "businesses/" + businessId,
    body
  );
  return response;
}
