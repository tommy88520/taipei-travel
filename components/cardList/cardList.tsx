import Card from '~/components/card/card';
import classes from './cardList.module.scss';
const CardList = () => {
  const cardList = [
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
  ];
  return (
    <section className={classes.container}>
      {cardList.map((item) => {
        return <Card key={item.id} card={item} onlyCard={false} />;
      })}
    </section>
  );
};

export default CardList;
