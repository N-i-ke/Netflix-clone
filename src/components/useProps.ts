import { useEffect, useState } from "react";
import axios from "../axios";
import { Movie } from "../type.ts";

export const useProps = (fetchUrl: string) => {
  const [movies, setMovies] = useState<Movie[]>([]); // ①APIの取得はuseEffectを使う

  useEffect(() => {
    async function fetchData() {
    const request = await axios.get(fetchUrl);
    console.log(request.data.results)
      // ②データの整形
      const movies = request.data.results.map((movie: Movie) => ({
        id: movie.id,
        name: movie.name,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      }));
        console.log(movies)
      setMovies(movies);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return movies;
};
