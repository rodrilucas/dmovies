import { delay } from "../utils/delay";

const BASE_URL = "http://localhost:3000/api/v1/movies";

export async function fetchMovies(query, page, limit, sort) {
  const isSearch = Boolean(query);
  const endpoint = isSearch ? `${BASE_URL}/search` : BASE_URL;

  const params = new URLSearchParams({
    ...(isSearch && { query }),
    ...(page && { page }),
    ...(limit && { limit }),
    ...(sort && { sort_by: sort }),
  });

  const url = `${endpoint}?${params.toString()}`;

  const response = await Promise.all([
    fetch(url, {
      headers: {
        "x-api-key": import.meta.env.VITE_API_KEY,
      },
    }),
    delay(2000),
  ]).then(([res]) => res);

  if (!response.ok)
    throw new Error(data.message || "Aconteceu algum erro ao procurar filmes.");

  return response.json();
}
