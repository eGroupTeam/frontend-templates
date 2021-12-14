import React from "react";
import { useRouter } from "next/router";
import { BrowserRouter, StaticRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";

const RouterRoot = function RouterRoot() {
  const router = useRouter();
  if (typeof window !== "undefined") {
    return (
      <BrowserRouter basename={router.locale}>
        <PrivateRoutes />
      </BrowserRouter>
    );
  }
  return (
    <StaticRouter basename={router.locale}>
      <PrivateRoutes />
    </StaticRouter>
  );
};

export default RouterRoot;
