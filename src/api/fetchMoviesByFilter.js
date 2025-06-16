import { delay } from "../utils/delay";

export async function fetchMoviesByFilters(filters) {
  const BASE_URL = "https://dmoviesapi.onrender.com/api/v1/movies";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
    body: JSON.stringify(filters),
  };

  const [response] = await Promise.all([fetch(BASE_URL, options), delay(2000)]);

  if (!response.ok)
    throw new Error(data.message || "Aconteceu algum erro ao filtrar filmes.");

  return response.json();
}
