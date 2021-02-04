import { gatewayHelper } from "../utility";

export const careerService = {
  getCareer,
};

async function getCareer() {
  const body = {};
  const response = await gatewayHelper.http("GET", "career", body);
  return response;
}
// async function getDetailBusiness(businessId) {
//   const body = {};
//   const response = await gatewayHelper.http(
//     "GET",
//     "businesses/" + businessId,
//     body
//   );
//   return response;
// }
