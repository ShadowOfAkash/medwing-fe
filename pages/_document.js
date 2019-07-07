// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <style>{`
            body {
              margin: 0;
              background: #000;
              font-family: Montserrat;
            }

            #__next {
              width: 100vw;
              height: 100vh;
            }
            .control-panel {
              position: absolute;
              top: 0;
              left: 0;
              max-width: 320px;
              background: #fff;
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
              padding: 12px 24px;
              margin: 20px;
              font-size: 13px;
              line-height: 2;
              color: #6b6b76;
              text-transform: uppercase;
              outline: none;
            }
           `}</style>
           <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet" />
        </Head>
        <body className="map">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
