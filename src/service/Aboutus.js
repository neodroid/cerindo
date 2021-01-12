import { gatewayHelper } from "../utility";

export const aboutUsService = {
  getListAboutUs,
};

async function getListAboutUs() {
  const body = {};
  const response = await gatewayHelper.http("GET", "about-us", body);
  return response;
}
