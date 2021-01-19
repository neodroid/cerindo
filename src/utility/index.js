import axios from "axios";

const BASE_URL = "http://54.251.78.10:1337";

async function http(method, endpoint, body = null) {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  };

  let response = null;

  if (method) {
    response = await axios({
      url: `${BASE_URL}/${endpoint}`,
      method: method.toUpperCase(),
      headers,
      params: body,
    });
  }

  return response;
}

export const gatewayHelper = {
  http,
};
