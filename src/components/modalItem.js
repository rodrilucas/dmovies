import { formatDate, formatDateUTC } from "../utils/dates";

function createMovieRatingSection(voteAverage, voteCount) {
  return `
    <div class="flex mt-2">
      <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
      </svg>
      <p class="ms-2 text-sm font-bold text-gray-900 dark:text-white">Nota: ${
        voteAverage ? `${voteAverage.toFixed(1)} / 10` : "N/A"
      }</p>
      <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
      <p class="text-sm font-medium text-gray-900 hover:no-underline dark:text-white">${voteCount} Comentários</p>
    </div>
  `;
}

function createMovieImage(imageUrl, title) {
  return imageUrl
    ? `<img src="${imageUrl}" alt="${title}" class="md:w-1/2 object-cover">`
    : `<div class="md:w-1/2 min-h-[550px] max-h-100 bg-gray-700 flex items-center justify-center text-gray-400 text-center text-sm p-2"> Sem imagem disponível</div>`;
}

function createMovieInfo(movie, ratingSection) {
  return `
    <div class="p-6 flex-1 flex flex-col">
      <h2 class="text-2xl font-bold mb-4">${
        movie.title
      } <span class="text-[#dfdfd6]">${formatDateUTC(
    movie.release_date
  )}</span></h2>
      <p class="text-gray-400 mb-4">${
        movie.overview || "Sem descrição disponível."
      }</p>
      <p class="text-gray-500 text-sm mb-2"><strong>Data de Lançamento:</strong> ${formatDate(
        movie.release_date
      )}</p>
      ${ratingSection}
    </div>
  `;
}

export function modalItem(movie, imageUrl) {
  const ratingSection = createMovieRatingSection(
    movie.vote_average,
    movie.vote_count
  );
  const poster = createMovieImage(imageUrl, movie.title);
  const info = createMovieInfo(movie, ratingSection);

  return `
    ${poster}
    ${info}
  `;
}

