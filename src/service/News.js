import { gatewayHelper } from "../utility";

export const newsService = {
  getListNews,
  getDetailNews,
};

async function getListNews() {
  const body = {};
  const response = await gatewayHelper.http("GET", "press-news", body);
  return response;
}

async function getDetailNews(newsId) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "press-news/" + newsId,
    body
  );
  return response;
}
