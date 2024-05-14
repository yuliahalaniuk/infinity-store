import css from "./Card.module.css";

const Card = ({
  imgSrc,
  title,
  price,
}: {
  imgSrc?: string;
  title?: string;
  price: {
    current?: number;
    currency?: string;
    discount?: number;
    oldPrice?: number;
  };
}) => {
  return (
    <div className={css.cardBox}>
      <div className={css.imgBox}>
        <img src={imgSrc} alt={title} />
      </div>
      <div className={css.infoBox}>
        <p className={css.itemTitle}>{title}</p>
        <p className={css.priceLine}>
          <p className={css.discount}>{`${price.discount} %`}</p>
          <p className={css.priceOld}>
            {" "}
            {`${price.oldPrice} ${price.currency}`}
          </p>
          <p className={css.priceCur}>
            {` ${price.currency} ${price.current}`}{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Card;
