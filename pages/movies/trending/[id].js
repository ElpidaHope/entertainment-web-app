import AllResults from '../../../components/AllResults';

import useSwr from 'swr';
import { useRouter } from 'next/router';
import Pagination from '../../../components/Pagination';

const TrendingMovies = () => {
  const fetcher = url => fetch(url).then(res => res.json())
  const router = useRouter()
  const { id } = router.query

  const currentPage = Number(id)
  const { data } = useSwr(`/api/movies/trending/${currentPage}`, fetcher)
  const results = data && data.results
  const totalPages = data && data.total_pages
  const isFirst = currentPage === 1;
  const isLast = data ? currentPage === data.total_pages : false

  return (
    <>
      <AllResults name="Trending" type="movie" results={results}/>
      <Pagination currentPage={currentPage} prevHref={`/movies/trending/${currentPage - 1}`} nextHref={`/movies/trending/${currentPage + 1}`} isFirst={isFirst} isLast={isLast} toPrevious={() => currentPage - 1} toNext={() => currentPage + 1} totalPages={totalPages}/>
    </>

  )
}

export default TrendingMovies;