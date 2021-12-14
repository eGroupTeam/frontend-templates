import privateRoutes from "./private-routes";
import { ComponentType, FC } from "react";
import { ReactCookieProps, withCookies } from "react-cookie";
import { RouteComponentProps, withRouter } from "react-router";
import { renderRoutes } from "react-router-config";
import { compose } from "redux";

interface PrivateRoutesProps extends ReactCookieProps, RouteComponentProps {}

const PrivateRoutes: FC<PrivateRoutesProps> = ({ allCookies }) => {
  if (allCookies && allCookies.hasLoginCookie) {
    return renderRoutes(privateRoutes)
  }

  return null
};

export default compose<ComponentType>(withRouter, withCookies)(PrivateRoutes);
