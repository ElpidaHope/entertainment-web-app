import Collection from '../components/Collection'
import Search from '../components/Search'

export default function Home() {
  const trendingLimit = 10
  const normalLimit = 8
  return (
    <>
      <Search placeholder="Search for movies or TV series" type='all'/>
      <Collection status="Trending" type="movie" endpoint='api/movies/trending' limit={trendingLimit} toLink='/movies/trending'/>
      <Collection status="Popular" type="movie" endpoint='api/movies/popular' limit={normalLimit} toLink='/movies/popular'/>
      <Collection status="Top Grossing" type="movie" endpoint='api/movies/top-grossing' limit={normalLimit} toLink='movies/top-grossing'/>
      <Collection status="Top Rated" type="movie" endpoint='api/movies/top-rated' limit={normalLimit} toLink='movies/top-rated'/>
      <Collection status="Trending" type="TV Series" endpoint='api/tv/trending' limit={normalLimit} toLink='tv/trending'/>
      <Collection status="Popular" type="TV Series" endpoint='api/tv/popular' limit={normalLimit} toLink='tv/popular'/>
      <Collection status="Top Rated" type="TV Series" endpoint='api/tv/top-rated' limit={normalLimit} toLink='tv/top-rated'/>
      <Collection status="Airing" type="TV Series" endpoint='api/tv/airing' limit={normalLimit} toLink='tv/airing'/>
    </>
  )
}



