import React from "react";
import css from "./CardsList.module.css";
import Card from "../Card/Card";
import {
  SorByTypesEnum,
  sortGames,
  sortOrderType,
} from "../../../utils/sortGames";

const CardsList = ({
  games,
  sortBy,
  sortOrder,
  title,
}: {
  title?: string;
  games: any[];
  sortBy: SorByTypesEnum;
  sortOrder: sortOrderType;
}) => {
  const sortedArray = sortGames(games, sortBy, sortOrder);

  return (
    <div className={css.list}>
      <p className={css.subtitle}>{title}</p>
      <ul className={css.itemsList}>
        {sortedArray?.map((item, index) => {
          return (
            <li key={index}>
              <Card
                title={"Alien: Isolation"}
                price={{
                  oldPrice: 899,
                  current: 255,
                  currency: "UAH",
                  discount: 75,
                }}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardsList;
