import classes from './footer.module.scss';
import TouchBox from '~/components/touchBox/touchBox';
const Footer = () => {
  const footerText = '2023 portfolio - developed by Tommy Huang';
  const touchBox = [
    {
      text: 'Line',
      img: '/images/line.svg',
      link: 'https://line.me/ti/p/~199610006',
    },
    {
      text: 'WhatsApp',
      img: '/images/whatsApp.svg',
      link: 'https://wooo.tw/jxJbtFd',
    },
    {
      text: 'Facebook',
      img: '/images/facebook.svg',
      link: 'https://wooo.tw/TC9nNre',
    },
  ];
  return (
    <footer className={classes['footer-page']}>
      <div className={classes['footer-page__wrap']}>
        <div className={classes['footer-page__box-wrap']}>
          <h3>{true ? '聯絡方式' : 'Let’s Get In Touch'} </h3>
          <div className={classes['footer-page__separator']} />
          <div className={classes['footer-page__touch-box']}>
            {touchBox.map((e, i) => {
              return <TouchBox key={i} info={e} />;
            })}
          </div>
        </div>
      </div>

      <p className={classes['footer-page__text']}>{footerText}</p>
    </footer>
  );
};

export default Footer;
