import { useRouter } from 'next/router'
import { useState } from 'react';
import AllResults from '../../../components/AllResults';
import Pagination from '../../../components/Pagination';

export default function GetMovieGenre({data, id, name, page}) {

  const currentPage = Number(page)
  const results = data && data.results
  const totalPages = data && data.total_pages;
  // const totalResults = data && data.total_results
  const isFirst = currentPage === 1
  const isLast = data ? currentPage === totalPages : false
  
  return (
    <>
      <AllResults results={results} type="movie" name={name}/>
      <Pagination currentPage={currentPage} prevHref={`/movies/genre/${id}/?name=${name}&pages=${currentPage - 1}`} nextHref={`/movies/genre/${id}?name=${name}&page=${currentPage + 1}`} isFirst={isFirst} isLast={isLast} toPrevious={() => currentPage - 1} toNext={() => currentPage + 1} totalPages={totalPages}/>
    </>
  ) 

}

export async function getServerSideProps(context) {
  const {id, name, page} = context.query
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=09f21591e8b68886e7ff5c7bcf85cafd&with_genres=${id}&name=${name}&page=${page}`

  const response = await fetch(url)
  const data = await response.json()

  return {
    props: {
      data,
      id,
      name,
      page
    }
  }
}