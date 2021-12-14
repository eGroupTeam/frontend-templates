import React from "react";
import Link from "next/link";
import MuiLink from "@eGroupTeam/material/Link";
import Layout from "../components/Layout";

const IndexPage = function IndexPage() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <p>
        <Link href="/about">
          <MuiLink cursor="pointer">About</MuiLink>
        </Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
