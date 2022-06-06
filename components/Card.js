import Image from 'next/Image';
import Link from 'next/link';

import style from '../styles/components/Collection.module.scss';



const Card = ({status, each, type, movieId}) => {
  const handleShowDetails = () => {
    if (type === "movie") {
      getDetailsMovie(movieId)
    }
    if (type === "TV Series") {
      getDetailsTv(movieId)
    }
  }
  return (
    <Link href={type === "movie" ? `/movies/[id]` : `/tv/[id]`} as={type === "movie" ? `/movies/${movieId}` : `/tv/${movieId}`}>
      <div className={style.outer} onClick={handleShowDetails}>
              <div className={style.secondOuter}>
                <div className={status === "Trending" ? style.imageContainerTrend : style.imageContainerNorm}>
                    <Image src={`https://image.tmdb.org/t/p/original${each.backdrop_path}`} alt={each.name || each.title} layout='fill' objectFit='cover' blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`} placeholder="blur"/>
                </div>
              </div>
              <div className={status === "Trending" ? style.textTrend : style.textNorm}>
                <div className={style.top}>
                  <p>{extractYear(each.release_date) || extractYear(each.first_air_date)}</p>
                  <div className={style.category}>
                      {type === "movie" ? <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z" fill="#FFF" opacity=".75"/></svg> : <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z" fill="#FFF" opacity=".75"/></svg>}
                    <p>{type}</p>
                  </div>
                </div>
                <h2>{each.name || each.title}</h2>
              </div>
            </div>
    </Link>
  )
}

const extractYear = (year) => {
  return year && year.substring(0,4)
}

const getDetailsMovie = async (id) => {
  const response = await fetch(`/api/movies/${id}`)
  const data = await response.json()
  console.log(data)
}

const getDetailsTv = async (id) => {
  const res = await fetch(`/api/tv/${id}`)
  const data = await res.json()
  console.log(data)
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

export default Card;