import TvFullDetails from "../../components/TvFullDetails";

import {useRouter} from 'next/router';
import useSwr from 'swr';

export default function TvDetails() {
  const router = useRouter()
  const fetcher = url => fetch(url).then(res => res.json())
  const { id } = router.query

  const { data } = useSwr(`/api/tv/${id}`, fetcher)

  return (
    <TvFullDetails data={data}/>
  )
}