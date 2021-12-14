import React, { useEffect } from "react";
import { store } from "redux/configureAppStore";
import createEgTheme from "@eGroupTeam/material/stylesheet/createEgTheme";
import { withReduxDialog, withReduxSnackbar } from "@eGroupTeam/redux-modules";
import { AppProps as NextAppProps } from "next/app";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import Theme from "@eGroupTeam/material/Theme";
import Head from "next/head";
import AlertDialog from "@eGroupTeam/material-module/AlertDialog";
import Snackbar, { SnackbarProps } from "@eGroupTeam/material/Snackbar";

export const DIALOG = "globalAlertDialog";
export const SNACKBAR = "globalSnackbar";
const GlobalAlertDialog = withReduxDialog(DIALOG)(AlertDialog);
const GlobalSnackbar = withReduxSnackbar(SNACKBAR)<
  HTMLDivElement,
  SnackbarProps
>(Snackbar);

const egTheme = createEgTheme();

const App = function App({ Component, pageProps }: NextAppProps) {
  // Fixed material-ui style SSR issue.
  // Example:
  // https://github.com/mui-org/material-ui/tree/next/examples/nextjs
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>eGroupAI</title>
        <meta name="description" content="description" key="description" />
        <meta property="og:title" content="og:title" key="ogTitle" />
        <meta
          property="og:description"
          content="og:description"
          key="ogDescription"
        />
        <meta
          property="og:image"
          content="images/preview/2.webp"
          key="ogImage"
        />
        <meta
          property="og:url"
          content={process.env.NEXT_PUBLIC_SITE_URL}
          key="ogUrl"
        />
        <meta property="og:type" content="website" key="ogType" />
        <meta
          property="og:email"
          content="service@egroupai.com"
          key="ogEmail"
        />
      </Head>
      {/* facebook shared script */}
      {/* <Script
        id="fb"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '282679346954391'); fbq('track', 'PageView');`,
        }}
      /> */}
      <CookiesProvider>
        <Provider store={store}>
          <Theme theme={egTheme}>
            <GlobalAlertDialog />
            <GlobalSnackbar
              anchorOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              autoHideDuration={2000}
            />
            <Component {...pageProps} />
          </Theme>
        </Provider>
      </CookiesProvider>
    </>
  );
};

export default App;
