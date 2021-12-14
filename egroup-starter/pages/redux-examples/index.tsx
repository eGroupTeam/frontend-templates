import React from "react";
import Layout from "components/Layout";
import MuiLink from "@eGroupTeam/material/Link";
import Link from "next/link";

const ReduxExampleList = function ReduxExampleList() {
  return (
    <Layout title="Redux Examples">
      <h1>Redux Example List</h1>
      <p>Redux Examples.</p>
      <p>You are currently on: /redux-examples</p>
      <ul>
        <li>
          <Link href="redux-examples/basic">
            <MuiLink cursor="pointer">Basic Example</MuiLink>
          </Link>{" "}
        </li>
      </ul>
    </Layout>
  );
};

export default ReduxExampleList;
