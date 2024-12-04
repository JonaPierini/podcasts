import axios from "axios";

const podcastApi = axios.create({
  baseURL: `https://itunes.apple.com/us/rss`,
  headers: {
    "Content-Type": "application/json",
  },
});

podcastApi.interceptors.request.use(async (config) => {
  const token = await localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export { podcastApi };
