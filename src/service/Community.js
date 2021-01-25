import { gatewayHelper } from "../utility";

export const communityService = {
  getListCommunity,
  getDetailCommunity,
};

async function getListCommunity() {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "community-activities",
    body
  );
  return response;
}

async function getDetailCommunity(communityId) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "community-activities/" + communityId,
    body
  );
  return response;
}
