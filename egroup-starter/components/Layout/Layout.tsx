import React, { ReactNode } from "react";
import NextLink from "next/link";
import Head from "next/head";
import Link from "@eGroupTeam/material/Link";
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
      </Head>
      <header>
        <nav>
          <NextLink href="/">
            <Link cursor="pointer">Home</Link>
          </NextLink>{" "}
          |{" "}
          <Link cursor="pointer" onClick={handleClick}>
            Private Pages
          </Link>{" "}
          |{" "}
          <NextLink href="/posts">
            <Link cursor="pointer">Post List</Link>
          </NextLink>{" "}
          |{" "}
          <NextLink href="/redux-examples">
            <Link cursor="pointer">Redux Examples</Link>
          </NextLink>{" "}
          |{" "}
          <NextLink href="/react-hook-form-examples">
            <Link cursor="pointer">React Hook Form Examples</Link>
          </NextLink>
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
