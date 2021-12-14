import FixedCenter from "@eGroupTeam/material-layout/FixedCenter";
import { CircularProgress } from "@mui/material";
import PrivateLayout from "components/PrivateLayout";
import React from "react";
import usePosts from "utils/usePosts";

const Home = () => {
  const { data } = usePosts();

  if (!data) {
    return (
      <FixedCenter>
        <CircularProgress />
      </FixedCenter>
    );
  }

  return (
    <PrivateLayout>
      Posts:
      <br />
      {JSON.stringify(data, undefined, 4)}
    </PrivateLayout>
  );
};

export default Home;
