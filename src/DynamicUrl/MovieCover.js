import React from "react";

export default function MovieCover(cover) {
  return new URL(`../assets/movie-covers/${cover}`, import.meta.url).href;
}
