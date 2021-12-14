import React from "react";
import Layout from "components/Layout";
import MuiLink from "@eGroupTeam/material/Link";
import Link from "next/link";

const HookFormExamples = function () {
  return (
    <Layout title="React Hook Form Examples">
      <h1>React Hook Form Examples</h1>
      <p>React Hook Form Examples</p>
      <p>You are currently on: /react-hook-form-examples</p>
      <ul>
        <li>
          <Link href="react-hook-form-examples/basic">
            <MuiLink cursor="pointer">Basic Example</MuiLink>
          </Link>{" "}
        </li>
      </ul>
    </Layout>
  );
};

export default HookFormExamples;
