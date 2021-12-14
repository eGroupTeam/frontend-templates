import React from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheets } from "@mui/styles";
import createEgTheme from "@eGroupTeam/material/stylesheet/createEgTheme";

const egTheme = createEgTheme();

interface DocumentProps {
  lang: string;
}
export default class Document extends NextDocument<DocumentProps> {
  // `getInitialProps` belongs to `_document` (instead of `_app`),
  // it's compatible with static-site generation (SSG).
  static async getInitialProps(ctx: DocumentContext) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await NextDocument.getInitialProps(ctx);
    return {
      ...initialProps,

      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="icon" href="/logo192.webp" />
          <meta name="theme-color" content={egTheme.palette.primary.main} />
          <link rel="apple-touch-icon" href="/logo192.webp" />
          {/*
            manifest.json provides metadata used when your web app is installed on a
            user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          */}
          <link rel="manifest" href="/manifest.json" />

          {/* FB 網域認證 */}
          <meta 
            name="facebook-domain-verification" 
            content="0nhoilk01sbhuznizbl4n00bu8141l" 
          />
          
          {/* 告訴爬蟲多久回來一次 */}
          <meta name="revisit-after" content="1 days" />

          {/* 搜尋引擎登記 */}
          <meta
            name="google-site-verification"
            content="IykqChnStKYdnhksHQANAuKa0DVF2BBFEElqVTylmSA"
          />
          <meta
            name="msvalidate.01"
            content="D05E1782FEF56AA295AD3CA7FA4DFE90"
          />

          {/* 網站的影音內容的語言不一定是文字的語言 */}
          <meta httpEquiv="Content-Language" charSet={this.props.locale} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
