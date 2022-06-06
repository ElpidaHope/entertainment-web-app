import style from '../styles/components/Heading.module.scss';
import Link from 'next/link';

const Heading = ({status, type, toLink}) => {
  return (
    <div className={style.main}>
      <div className={style.title}>
        <h1>{status}</h1>
        <p>{type}</p>
      </div>
      <p className={style.seeMore}><Link href={`${toLink}/[id]`} as={`${toLink}/${1}`}>See More</Link></p>
    </div>
  )
}

export default Heading