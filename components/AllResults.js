import Search from "./Search"
import CardCollection from "./CardCollection"

import style from '../styles/components/AllResults.module.scss';

const AllResults = ({name, type, results}) => {
  return (
    <>
      <Search placeholder={`Search for ${type === 'movie' ? "Movies" : "TV Series"}`} type={type}/>
      <h1 className={style.text}>{name} {type === 'movie' ? "Movies" : "TV Series"}</h1>
      <CardCollection results={results} type={type}/>
    </>

  )
}

export default AllResults