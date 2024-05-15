import { SorByTypesEnum, sortOrderType } from "../../utils/sortGames";
import CardsList from "./CardsList/CardsList";
import css from "./Store.module.css";
import StoreFooter from "./StoreFooter/StoreFooter";

const gamesListTypes: {
  title?: string;
  sortBy: SorByTypesEnum;
  sortOrder: sortOrderType;
}[] = [
  {
    title: "Last Release",
    sortBy: SorByTypesEnum.releaseDate,
    sortOrder: "asc",
  },
  {
    title: "Discounted games",
    sortBy: SorByTypesEnum.releaseDate,
    sortOrder: "asc",
  },
  {
    title: "Most Popular Games",
    sortBy: SorByTypesEnum.releaseDate,
    sortOrder: "asc",
  },
  {
    title: "Free Games",
    sortBy: SorByTypesEnum.releaseDate,
    sortOrder: "asc",
  },
  {
    title: "Open Beta test",
    sortBy: SorByTypesEnum.releaseDate,
    sortOrder: "asc",
  },
  {
    title: "Most Rated ",
    sortBy: SorByTypesEnum.releaseDate,
    sortOrder: "asc",
  },
];

const Store = () => {
  const games = Array.from({ length: 10 }, (_, i) => {
    return i + 1;
  });

  return (
    <>
      <section className={css.section}>
        <div className={css.container}>
          <ul className={css.storeGrid}>
            {gamesListTypes.map(({ title, sortBy, sortOrder }) => (
              <li key={title}>
                <CardsList
                  games={games}
                  sortBy={sortBy}
                  sortOrder={sortOrder}
                  title={title}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <StoreFooter />
    </>
  );
};

export default Store;
