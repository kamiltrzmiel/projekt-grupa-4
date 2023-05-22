import translateIdToGenre from './genre';

export function render(data, renderElement) {
  const markup = data
    .map(
      ({
        id,
        title,
        poster_path,
        vote_average,
        release_date,
        genre_ids,
      }) => {
        return `
        <figure
          class="posters__box"
          tabindex="0"
          role="button"
          aria-label="${title}"
          data-id="${id}"
        >
          <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="placeholder" class="posters__img" />
          <figcaption>
            <h3 id="poster-title" class="posters__title">${title}</h3>
            <p class="posters__details">
              ${genre_ids.map(genre => ` ${translateIdToGenre(genre)}`)}
              |
              ${new Date(release_date).getFullYear()} <span class="posters__ranking">${vote_average}</span>
            </p>
          </figcaption>
        </figure>
      `;
      }
    )
    .join('');
  renderElement.insertAdjacentHTML('beforeend', markup);
}
