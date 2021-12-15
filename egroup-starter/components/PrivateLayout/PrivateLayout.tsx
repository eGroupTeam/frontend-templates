import React, { ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";
import { Link as PrivateLink } from "react-router-dom";
import MuiLink from "@eGroupTeam/material/Link";

type Props = {
  children?: ReactNode;
  title?: string;
};

const PrivateLayout = function PrivateLayout({
  children,
  title = "This is the default title",
}: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav>
          <Link href="/">
            <MuiLink cursor="pointer">Go home</MuiLink>
          </Link>{" "}
          | <PrivateLink to="/me">Private Home</PrivateLink> |{" "}
          <PrivateLink to="/me/dashboard">Private Dashboard</PrivateLink>
        </nav>
      </header>
      <h1>Private Pages</h1>
      <p>Example private page, only get cookie can login to this page.</p>
      <p>You are currently on: /me</p>
      {children}
      <footer>
        <hr />
        <span>I&aposm here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default PrivateLayout;
