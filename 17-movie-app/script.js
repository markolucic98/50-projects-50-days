const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=96b7e1d8c0e4b9490dc0b7a16d02320d&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=96b7e1d8c0e4b9490dc0b7a16d02320d&query=""'

const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')

getMovie(API_URL)

async function getMovie(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie

    const movieEL = document.createElement('div')
    movieEL.classList.add('movie')

    movieEL.innerHTML = `<img
    src="${IMG_PATH + poster_path}"
    alt="${title}"
  />
  <div class="movie-info">
    <h3>${title}</h3>
    <span class="${getClasByVote(vote_average)}">${vote_average}</span>
  </div>
  <div class="overview">
  ${overview}
  </div>
</div>
`
    main.appendChild(movieEL)
  })
}

function getClasByVote(vote) {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 5) {
    return 'orange'
  } else {
    return 'red'
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovie(SEARCH_URL + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})
