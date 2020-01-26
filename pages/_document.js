import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    
                    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Coming+Soon|Gaegu|Just+Me+Again+Down+Here&display=swap" rel="stylesheet"/> 
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
