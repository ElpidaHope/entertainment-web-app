import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/router';

import logo from '/public/tmdb.svg';
import style from '../styles/components/Layout.module.scss';



const Layout = ({children}) => {
  const router = useRouter()
  return (
    <div className={style.main}>
      <nav>
        <Link href="/">
          <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33 27"><path d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z" fill="#FC4747"/></svg>
        </Link>

        <div className={style.links}>
          <Link href='/'>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className={router.pathname === "/" ? style.active : ''}><path d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z" fill="" /></svg>
          </Link>
          <Link href='/movies'>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className={router.pathname === "/movies" ? style.active : ''}><path d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"  fill="" /></svg>
          </Link>
          <Link href='/tv'>
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" className={router.pathname === "/tv" ? style.active : ''}><path d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z" fill="" /></svg>
          </Link>
        </div>

        <div className={style.avatar}>
          <Image src='/assets/image-avatar.png' alt="image-avatar" width={24} height={24}/>
        </div>
      </nav>

      <main>
        {children}
      </main>
      <footer>
        <p>API from</p>
        <Image src={logo} width={100} height={50} alt="logo"/>
      </footer>
    </div>
  )
}

export default Layout