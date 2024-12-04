import { useEffect, useState } from "react";
import { getProducts } from "../../actions/get-product";
import { Podcast } from "../../infrastructure/podcastMapper";

export const PodcastsList = () => {
  const [podcasts, setPodcasts] = useState<Podcast[]>([]);

  const getData = () => {
    const response = getProducts()
      .then((e) => setPodcasts(e))
      .catch((e) => console.log(e));
    return response;
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(podcasts);

  return (
    <div>
      <h1>Podcasts</h1>
      {podcasts.length > 0 ? (
        <ul>
          {podcasts.map((podcast) => (
            <li key={podcast.id}>
              <h2>{podcast.title}</h2>
              <p>
                <strong>Author:</strong> {podcast.author}
              </p>
              <p>
                <strong>Genre:</strong> {podcast.genre}
              </p>
              <img
                src={podcast.image}
                alt={podcast.title}
                style={{ width: "200px", height: "auto" }}
              />
              <p>{podcast.description}</p>
              <a href={podcast.url} target="_blank" rel="noopener noreferrer">
                Listen Now
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No podcasts available.</p>
      )}
    </div>
  );
};
