import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import MuiLink from "@eGroupTeam/material/Link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/router";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = function Layout({
  children,
  title = "This is the default title",
}: Props) {
  const router = useRouter();
  const [, setCookie] = useCookies();

  const handleClick = (e) => {
    e.preventDefault();
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
            <MuiLink cursor="pointer">Home</MuiLink>
          </Link>{" "}
          |{" "}
          <MuiLink cursor="pointer" onClick={handleClick}>
            Private Pages
          </MuiLink>{" "}
          |{" "}
          <Link href="/about">
            <MuiLink cursor="pointer">About</MuiLink>
          </Link>{" "}
          |{" "}
          <Link href="/posts">
            <MuiLink cursor="pointer">Post List</MuiLink>
          </Link>{" "}
          |{" "}
          <Link href="/redux-examples">
            <MuiLink cursor="pointer">Redux Examples</MuiLink>
          </Link>{" "}
          |{" "}
          <Link href="/react-hook-form-examples">
            <MuiLink cursor="pointer">React Hook Form Examples</MuiLink>
          </Link>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
