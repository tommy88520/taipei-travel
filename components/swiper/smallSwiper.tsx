import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import Card from '~/components/card/card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './smallSwiper.module.scss';

interface iSmallSwiper {
  text: string;
}
const SmallSwiper: React.FC<iSmallSwiper> = ({ text }) => {
  const data = [
    {
      id: 1,
      image: '/images/first.jpg',
      title: '為什麼你應該使用 OSS（物件存儲服務）而不是直接存在本地？',
      date: '2023-10-06',
      content:
        '最近身邊有許多朋友剛學習了一些後端開發的基本概念，迫不及待開始做了許多很有意思的專案，而當他們準備為他們的專案的後端加入儲存檔案的功能時，他們都會遇到一個問題：**我該如何儲存使用者上傳的檔案？** ...',
      isFeatured: true,
    },
    {
      id: 2,
      image: '/images/first.jpg',
      title: '為什麼你應該使用 OSS（物件存儲服務）而不是直接存在本地？',
      date: '2023-10-06',
      content:
        '最近身邊有許多朋友剛學習了一些後端開發的基本概念，迫不及待開始做了許多很有意思的專案，而當他們準備為他們的專案的後端加入儲存檔案的功能時，他們都會遇到一個問題：**我該如何儲存使用者上傳的檔案？** ...',
      isFeatured: false,
    },
    {
      id: 3,
      image: '/images/first.jpg',
      title: '為什麼你應該使用 OSS（物件存儲服務）而不是直接存在本地？',
      date: '2023-10-06',
      content:
        '最近身邊有許多朋友剛學習了一些後端開發的基本概念，迫不及待開始做了許多很有意思的專案，而當他們準備為他們的專案的後端加入儲存檔案的功能時，他們都會遇到一個問題：**我該如何儲存使用者上傳的檔案？** ...',
      isFeatured: false,
    },
    {
      id: 4,
      image: '/images/first.jpg',
      title: '為什麼你應該使用 OSS（物件存儲服務）而不是直接存在本地？',
      date: '2023-10-06',
      content:
        '最近身邊有許多朋友剛學習了一些後端開發的基本概念，迫不及待開始做了許多很有意思的專案，而當他們準備為他們的專案的後端加入儲存檔案的功能時，他們都會遇到一個問題：**我該如何儲存使用者上傳的檔案？** ...',
      isFeatured: false,
    },
    {
      id: 5,
      image: '/images/first.jpg',
      title: '為什麼你應該使用 OSS（物件存儲服務）而不是直接存在本地？',
      date: '2023-10-06',
      content:
        '最近身邊有許多朋友剛學習了一些後端開發的基本概念，迫不及待開始做了許多很有意思的專案，而當他們準備為他們的專案的後端加入儲存檔案的功能時，他們都會遇到一個問題：**我該如何儲存使用者上傳的檔案？** ...',
      isFeatured: false,
    },
    {
      id: 6,
      image: '/images/first.jpg',
      title: '為什麼你應該使用 OSS（物件存儲服務）而不是直接存在本地？',
      date: '2023-10-06',
      content:
        '最近身邊有許多朋友剛學習了一些後端開發的基本概念，迫不及待開始做了許多很有意思的專案，而當他們準備為他們的專案的後端加入儲存檔案的功能時，他們都會遇到一個問題：**我該如何儲存使用者上傳的檔案？** ...',
      isFeatured: false,
    },
    {
      id: 7,
      image: '/images/first.jpg',
      title: '為什麼你應該使用 OSS（物件存儲服務）而不是直接存在本地？',
      date: '2023-10-06',
      content:
        '最近身邊有許多朋友剛學習了一些後端開發的基本概念，迫不及待開始做了許多很有意思的專案，而當他們準備為他們的專案的後端加入儲存檔案的功能時，他們都會遇到一個問題：**我該如何儲存使用者上傳的檔案？** ...',
      isFeatured: false,
    },
  ];
  return (
    <section className={classes.container}>
      <h2>{text}</h2>
      <Swiper
        loop={true}
        autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[Pagination, Autoplay, EffectFade]}
        className={classes.swiper}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={classes['container-slide']}>
              <Card card={item} onlyCard />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SmallSwiper;
