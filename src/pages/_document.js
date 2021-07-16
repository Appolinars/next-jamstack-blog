import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
            crossOrigin="anonymous"
          />
          <script defer src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
