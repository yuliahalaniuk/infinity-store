export enum SorByTypesEnum {
  name = "name",
  releaseDate = "releaseDate",
  rating = "rating",
  price = "price",
}

export type sortOrderType = "asc" | "desc";

export function sortGames(
  games: any[],
  sortBy: SorByTypesEnum,
  sortOrder: sortOrderType
) {
  if (sortBy === "name") {
    games.sort((a, b) => {
      if (a.name < b.name) return sortOrder === "asc" ? -1 : 1;
      if (a.name > b.name) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  } else if (sortBy === "releaseDate") {
    games.sort((a, b) => {
      const dateA = new Date(a.releaseDate);
      const dateB = new Date(b.releaseDate);
      if (dateA < dateB) return sortOrder === "asc" ? -1 : 1;
      if (dateA > dateB) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  } else if (sortBy === "rating") {
    games.sort((a, b) => {
      if (a.rating < b.rating) return sortOrder === "asc" ? -1 : 1;
      if (a.rating > b.rating) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  } else if (sortBy === "price") {
    games.sort((a, b) => {
      if (a.price < b.price) return sortOrder === "asc" ? -1 : 1;
      if (a.price > b.price) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }
  return games;
}
