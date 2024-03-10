import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {/* <script
            src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js"
            charset="UTF-8"></script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
