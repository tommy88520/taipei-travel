import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Fragment } from 'react';
import LargeSwiper from '~/components/swiper/swiper';
import CardList from '~/components/cardList/cardList';

export default function Home() {
  const HomePage = () => {
    return (
      <div className='home-container'>
        <LargeSwiper />
        <CardList />
      </div>
    );
  };
  return (
    <Fragment>
      <Head>
        <title>Peter Huang的包車旅遊</title>
        <meta name='description' content='I post about programming and web development.' />
      </Head>
      <HomePage />
    </Fragment>
  );
}
