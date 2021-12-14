import React from "react";
import Link from "next/link";
import MuiLink from "@eGroupTeam/material/Link";
import Layout from "../components/Layout";

const AboutPage = function AboutPage() {
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <MuiLink cursor="pointer">Go home</MuiLink>
        </Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
