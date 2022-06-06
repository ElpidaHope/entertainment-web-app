import style from '../styles/components/Collection.module.scss';
import Card from './Card';


const CardCollection = ({status, type, results}) => {

  return (
    <section className={status === "Trending" ? style.containerBlock : style.wrapper}>
        {results && results.map(each => (
          <Card each={each} key={each.id} type={type} status={status} movieId={each.id}/>
        ))}
      </section>
  )
}



export default CardCollection