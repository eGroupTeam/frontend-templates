import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import MuiLink from "@eGroupTeam/material/Link";

import { Post } from "interfaces";
import Layout from "components/Layout";
import { List, ListItem, ListItemText } from "@eGroupTeam/material";
import { fetcher } from "@eGroupTeam/hooks/fetchers";

type Props = {
  posts: Post[];
};

const WithStaticProps = function WithStaticProps({ posts }: Props) {
  return (
    <Layout title="Post List | Next.js + TypeScript Example">
      <h1>Post List</h1>
      <p>
        Example fetching data from inside <code>getStaticProps()</code>.
      </p>
      <p>You are currently on: /posts</p>
      <List>
        {posts.map((el) => (
          <ListItem key={el.id}>
            <ListItemText>{el.title}</ListItemText>
          </ListItem>
        ))}
      </List>
      <p>
        <Link href="/">
          <MuiLink cursor="pointer">Go home</MuiLink>
        </Link>
      </p>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const posts: Post[] = await fetcher
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.data);
  return { props: { posts } };
};

export default WithStaticProps;
