import Heading from "./Heading";
import CardCollection from './CardCollection';
import style from '../styles/components/Collection.module.scss';

import useSwr from "swr";



const Collection = ({status, type, toLink, endpoint, limit}) => {
  const url = `/${endpoint}`
  const fetcher = url => fetch(url).then(res => res.json())

  const { data } = useSwr(url, fetcher)
  const results = data && arrHelper(data.results, limit)
  

  return (
    <section className={style.section}>
      <Heading status={status} type={type} toLink={toLink}/>
      <CardCollection results={results} status={status} type={type}/>
    </section>
  )
}

function arrHelper(arr, limit) {
  return arr && arr.slice(0, limit)
}



export default Collection;