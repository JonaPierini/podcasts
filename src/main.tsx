import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PodcastApp } from "./PodcastApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PodcastApp />
  </StrictMode>
);
