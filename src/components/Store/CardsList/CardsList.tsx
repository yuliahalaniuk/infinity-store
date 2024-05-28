import React from "react";
import css from "./CardsList.module.css";
import Card from "../Card/Card";
import {
  SorByTypesEnum,
  sortGames,
  sortOrderType,
} from "../../../utils/sortGames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  centerPadding: "20px",
  arrows: true,
  responsive: [
    {
      breakpoint: 1360,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <PrevArrow />,
  prevArrow: <NextArrow />,
};

const CardsList = ({
  games,
  sortBy,
  sortOrder,
  title,
}: {
  title?: string;
  games:
    | {
        title?: string;
        price?: {
          oldPrice?: number;
          current?: number;
          currency?: string;
          discount?: number;
        };
      }[]
    | any[];
  sortBy: SorByTypesEnum;
  sortOrder: sortOrderType;
}) => {
  const sortedArray = sortGames(games, sortBy, sortOrder);

  return (
    <div className={css.line}>
      <p className={css.subtitle}>{title}</p>

      <Slider {...settings}>
        {sortedArray?.map(({ title, price }, index) => {
          return (
            <div key={index}>
              <Card
                title={title || "Alien: Isolation"}
                price={{
                  oldPrice: price?.oldPrice || 899,
                  current: price?.current || 255,
                  currency: price?.currency || "UAH",
                  discount: price?.discount || 75,
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

function PrevArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        border: `solid $#000`,
        borderWidth: "0 3px 3px 0",
        display: "block",
        padding: "3px",
        transform: "rotate(-45deg)",
        WebkitTransform: "rotate(-45deg)",
      }}
    />
  );
}

function NextArrow(props: any) {
  const { className, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        border: `solid #000`,
        borderWidth: "0 3px 3px 0",
        display: "block",
        padding: "3px",
        transform: "rotate(135deg)",
        WebkitTransform: "rotate(135deg)",
      }}
    />
  );
}

export default CardsList;
