import { gatewayHelper } from "../utility";

export const newsService = {
  getListNews,
  getDetailNews,
  getListAnnouncement,
  getDetailAnnouncement,
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

async function getListAnnouncement() {
  const body = {};
  const response = await gatewayHelper.http("GET", "announcements", body);
  return response;
}

async function getDetailAnnouncement(newsId) {
  const body = {};
  const response = await gatewayHelper.http(
    "GET",
    "announcements/" + newsId,
    body
  );
  return response;
}