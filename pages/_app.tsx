import '~/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '~/components/layout/layout';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Tommy Huang</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
