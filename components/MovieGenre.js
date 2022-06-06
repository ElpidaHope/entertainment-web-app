import useSwr from 'swr';
import { useRouter } from 'next/router';

import style from '../styles/components/MovieGenre.module.scss';

import Search from './Search';

const MovieGenre = () => {

  const router = useRouter()

  const searchByGenre = (id,genre) => {
    router.push(`/movies/genre/${id}?name=${genre}&page=1`)
  }

  const fetcher = url => fetch(url).then(res => res.json())
  const { data } = useSwr('https://api.themoviedb.org/3/genre/movie/list?api_key=09f21591e8b68886e7ff5c7bcf85cafd', fetcher)
  const genres = data && data.genres

  return (
      <>
        <Search placeholder="Search for Movies" type={'movie'}/>
        <div className={style.container}>
          {genres && genres.map(genre => (
            <div key={genre.id} onClick={() => searchByGenre(genre.id, genre.name)}>
              <h3>{genre.name}</h3>
            </div>
          ))}
        </div>
      </>
  )
}

export default MovieGenre