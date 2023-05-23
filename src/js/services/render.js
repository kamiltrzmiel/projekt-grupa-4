import translateIdToGenre from './genre';
import placeholder from '../../assets/placeholder.jpg';

export function render(data, renderElement, renderVotes) {
  renderElement.innerHTML = '';
  const markup = data
    .map(({ id, title, poster_path, vote_average, release_date, genre_ids }) => {
      poster_path
        ? (poster_path = `https://image.tmdb.org/t/p/w500/${poster_path}`)
        : (poster_path = placeholder);
      return `
        <figure
          class="posters__box"
          tabindex="0"
          role="button"
          aria-label="${title}"
          data-id="${id}"
        >
          <img src="${poster_path}" alt="${title}" class="posters__img" />
          <figcaption>
            <h3 id="poster-title" class="posters__title">${title}</h3>
            <p class="posters__details">
              ${genre_ids.map(genre => ` ${translateIdToGenre(genre)}`)}
              |
              ${new Date(release_date).getFullYear()}
              ${renderVotes ? `<span class="posters__ranking">${vote_average}</span>` : ''}
            </p>
          </figcaption>
        </figure>
      `;
    })
    .join('');
  renderElement.insertAdjacentHTML('beforeend', markup);
}
