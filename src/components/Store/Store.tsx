import { SorByTypesEnum } from "../../utils/sortGames";
import CardsList from "./CardsList/CardsList";
import css from "./Store.module.css";

const Store = () => {
  const games = Array.from({ length: 10 }, (_, i) => {
    return i + 1;
  });

  //   const _gamesListTypes = [
  //     { title: "Last Release", sortBy: SorByTypesEnum.releaseDate, sortOrder: 'asc },
  //     {
  //       title: "Discounted games",sortBy: SorByTypesEnum.releaseDate, sortOrder: 'asc
  //     },
  //     { title: "Most Popular Games", sortBy: SorByTypesEnum.releaseDate, sortOrder: 'asc },
  //     { title: "Free Games", sortBy: SorByTypesEnum.releaseDate, sortOrder: 'asc },
  //     { title: "Open Beta test", sortBy: SorByTypesEnum.releaseDate, sortOrder: 'asc },
  //     { title: "Most Rated ", sortBy: SorByTypesEnum.releaseDate, sortOrder: 'asc},
  //   ];

  return (
    <section className={css.section}>
      <div className={css.container}>
        <CardsList
          games={games}
          sortBy={SorByTypesEnum.releaseDate}
          sortOrder="asc"
          title="Last Release"
        />
      </div>
    </section>
  );
};

export default Store;
