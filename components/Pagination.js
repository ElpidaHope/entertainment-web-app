import Link from 'next/link';
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti';

import style from '../styles/components/Pagination.module.scss';


const Pagination = ({currentPage, prevHref, nextHref, isFirst, isLast, toPrevious, toNext, totalPages}) => {
  return (
    <div className={style.container}>
      <Link href={prevHref} as={prevHref}>
        <a onClick={toPrevious} className={isFirst ? style.disable : ''}>
          <TiArrowLeftThick />
          <span>Prev</span>
        </a>
      </Link>
      <p>Page {currentPage} of {totalPages}</p>
      <Link href={nextHref} as={nextHref}>
        <a onClick={toNext} className={isLast ? style.disable : ''}>
          <span>Next</span>
          <TiArrowRightThick />
        </a>

      </Link>
    </div>
  )
}

export default Pagination