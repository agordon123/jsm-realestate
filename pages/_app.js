import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react'
import Router from 'next/router'
import Head from 'next/head';
import Nprogress from 'nprogress';

import Layout from '../components/Layout';


function MyApp({ Component, pageProps }) {

  Nprogress.configure({showSpinner:false})

  Router.events.on('routeChangeStart'),() =>{
    Nprogress.start();
  }

  Router.events.on('routeChangeComplete',()=>{
    Nprogress.done();
  })
  return (
  <>
  <Head>
   
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;

