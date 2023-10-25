import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import { images } from '~/lib/images';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import classes from './swiper.module.scss';

export default function LargeSwiper() {
  return (
    <section className={classes.container}>
      <div className={classes['container-outer']}>
        <Swiper
          // navigation
          autoplay={{ delay: 2500 }}
          pagination={{ type: 'bullets' }}
          modules={[Pagination, Autoplay, EffectFade]}
          onSwiper={(swiper) => console.log(swiper)}
          effect='fade'
          className={classes['container-wrap']}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={classes['container-slide']}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={608}
                  height={400}
                  layout='responsive'
                  className={classes['container-image']}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
