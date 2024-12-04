import { podcastApi } from "../config/api/podcastApi";
import { Podcast, PodcastMapper } from "../infrastructure/podcastMapper";

export const getProducts = async (): Promise<Podcast[]> => {
  try {
    const { data } = await podcastApi.get(
      `/toppodcasts/limit=100/genre=1310/json`
    );
    return data.feed.entry.map(PodcastMapper.applePodcastToEntity);
  } catch (error) {
    console.log(error);
    throw new Error("Error getting products");
  }
};
