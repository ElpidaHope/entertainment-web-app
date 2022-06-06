// import AllResults from '../../../components/AllResults';
import AllResults from '../../components/AllResults';
import Pagination from '../../components/Pagination';

export default function SearchAll({data, id, page}) {
  
  const currentPage = Number(page)
  const results = data && data.results
  const totalPages = data && data.total_pages;
  const totalResults = data && data.total_results
  const isFirst = currentPage === 1
  const isLast = data ? currentPage === totalPages : false
  return (
    <>
      <AllResults name={`Found ${totalResults} results for '${id}'`} results={results}/>
      <Pagination currentPage={currentPage} prevHref={`/search/${id}?pages=${currentPage - 1}`} nextHref={`/search/${id}?page=${currentPage + 1}`} isFirst={isFirst} isLast={isLast} toPrevious={() => currentPage - 1} toNext={() => currentPage + 1} totalPages={totalPages}/>
    </>
  )
}

export async function getServerSideProps (context) {
  const {id, page} = context.query
  const url = `https://api.themoviedb.org/3/search/multi/?api_key=09f21591e8b68886e7ff5c7bcf85cafd&&query=${id}&page=${page}`;

  const response = await fetch(url)
  const data = await response.json()

  return {
    props: {
      data,
      id,
      page
    }
  }
}