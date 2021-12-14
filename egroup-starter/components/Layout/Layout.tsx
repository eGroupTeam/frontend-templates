import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useCookies } from 'react-cookie'
import { useRouter } from 'next/router'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  const router = useRouter();
  const [, setCookie] = useCookies();
  
  const handleClick = (e) => {
    e.preventDefault()
    setCookie("hasLoginCookie", "true");
    router.push("/me");
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          {' '}|{' '}
          <a href="" onClick={handleClick}>Private Pages</a>
          {' '}|{' '}
          <Link href="/about">
            <a>About</a>
          </Link>
          {' '}|{' '}
          <Link href="/posts">
            <a>Post List</a>
          </Link>
          {' '}|{' '}
          <Link href="/redux-examples">
            <a>Redux Examples</a>
          </Link>
          {' '}|{' '}
          <Link href="/react-hook-form-examples">
            <a>React Hook Form Examples</a>
          </Link>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
      </footer>
    </div>
  )
}

export default Layout
