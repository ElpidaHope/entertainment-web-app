import Image from 'next/image';

import Rating from 'react-rating';
import { FaRegStar, FaStar, FaImdb } from 'react-icons/fa';
import { AiOutlineLink } from 'react-icons/ai';

import style from '../styles/components/MovieFullDetails.module.scss';

const MovieFullDetails = ({data}) => {
  return (

    data && <div className={style.container}>
      <div className={style.poster}>
        <Image src={`https://image.tmdb.org/t/p/original${data.details.poster_path}`} alt={data.original_title} layout='fill' objectFit='contain' blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} placeholder="blur"/>
      </div>
      <div className={style.details}>
        <h1>{data.details.original_title}</h1>
        <p>{data.details.tagline}</p>
        <div className={style.rating}>
          <h2>{(data.details.vote_average / 2).toFixed(1)}</h2>
          <Rating
            initialRating={Math.floor(data.details.vote_average / 2).toFixed(1)}
            emptySymbol={<FaRegStar/>}
            fullSymbol={<FaStar />}
            readonly />
        </div>
        <div className={style.moreDetails}>
          <div className={style.length}>
            <p>Length</p>
            <p>{data.details.runtime + `min`}</p>
          </div>
          <div className={style.language}>
            <p>Language</p>
            <p>{data.details.spoken_languages.name ? data.details.spoken_languages[0].name : 'N/A'}</p>
          </div>

          <div className={style.year}>
            <p>Year</p>
            <p>{data.details.release_date}</p>
          </div>
          <div className={style.status}>
            <p>Status</p>
            <p>{data.details.status}</p>
          </div>
        </div>

        <div className={style.genres}>
          <p>Genres</p>
          <div className={style.eachGenre}>
            {data.details.genres.map(genre => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </div>
        </div>

        <article>
          <p>Description</p>
          <p>
           {data.details.overview}
          </p>
        </article>

        <div className={style.casts}>
          <p>Cast</p>
          <div className={style.allCast}>
            {data.credits.cast.map(each => (
              <p key={each.id}>{each.name}</p>
            ))}
          </div>
        </div>

        <div className={style.website}>
          {data.details.homepage ? <a href={data.details.homepage} target="_blank" rel='noreferrer'>
            <button>
              <AiOutlineLink />
              <p>Website</p>
            </button>
          </a> : null}
          <a href={`https://www.imdb.com/title/${data.details.imdb_id}`} target="_blank" rel='noreferrer'>
            <button>
              <p>IMDB</p>
              <FaImdb />
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

export default MovieFullDetails;