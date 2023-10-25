import Link from 'next/link';
import classes from './card.module.scss';

interface iCard {
  card: {
    id: number;
    image: string;
    title: string;
    date: string;
    content: string;
    isFeatured: boolean;
  };
  onlyCard: boolean;
}
const Card: React.FC<iCard> = ({ card, onlyCard }) => {
  const { id, content, title, date, image, isFeatured } = card;
  return (
    <div className={`${classes.container} ${isFeatured && classes['container-featured']}`}>
      <Link href={`/post/${title}`}>
        <div className={classes['container-link__wrap']}>
          <div className={classes['container-img']}>
            <img src={image} alt='' />
          </div>
          <h2 className={classes['container-title']}>{title}</h2>
          {!onlyCard && (
            <div>
              <p className={classes['container-date']}>{date}</p>
              <p className={classes['container-content']}>{content}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default Card;
