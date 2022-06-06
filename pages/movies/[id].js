import MovieFullDetails from "../../components/MovieFullDetails";

import useSwr from 'swr';
import { useRouter } from "next/router";

const DisplayMovie = () => {
  const router = useRouter()
  const { id } = router.query
  const fetcher = url => fetch(url).then(res => res.json())

  const { data } = useSwr(`/api/movies/${id}`, fetcher)

  return (
    <MovieFullDetails data={data}/>
  )
};

export default DisplayMovie;