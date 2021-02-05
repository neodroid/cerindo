import { gatewayHelper } from "../utility";

export const CVService = {
  postCV,
};

async function postCV(formCV) {
  const body = {};
  const response = await gatewayHelper.http("POST", "cvs", body);
  return response;
}
