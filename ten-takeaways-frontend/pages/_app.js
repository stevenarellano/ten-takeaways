import "/styles/globals/globals.scss";
import Head from "next/head";
import { Navbar } from '../components';


function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Ten Takeaways</title>
                <meta
                    name="description"
                    content="A webapp summarizing a few books I like."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Navbar />
                <Component {...pageProps} />
            </main>

        </>
    );
}

export default MyApp;
