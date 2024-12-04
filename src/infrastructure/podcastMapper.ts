import { Entry } from "./podcastInterfaces";

export interface Podcast {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  genre: string;
  url: string;
}

export class PodcastMapper {
  // Convierte el podcast de la API a una estructura más conveniente
  static applePodcastToEntity(applePodcast: Entry): Podcast {
    return {
      id: applePodcast.id.attributes["im:id"],
      title: applePodcast["im:name"].label,
      author: applePodcast["im:artist"].label,
      description: applePodcast.summary.label,
      image: applePodcast["im:image"][2].label, // Usamos la imagen de mayor tamaño
      genre: applePodcast.category.attributes.term,
      url: applePodcast.link.attributes.href,
    };
  }
}
