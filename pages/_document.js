import Document, { Html, Head, Main, NextScript } from "next/document";
import { Fragment } from "react";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Fragment>
            <div id="notifications"></div>
          </Fragment>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
