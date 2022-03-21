export const MOST_POPULAR = "MOST_POPULAR";
export const ADD_FAVOURITES = "ADD_FAVOURITES";

export const ADD_FAVOURITES_SUCCESS = "ADD_FAVOURITES_SUCCESS";
export const MOST_POPULAR_SUCCESS = "MOST_POPULAR_SUCCESS";

export const loadMostPopular = () => ({
  type: MOST_POPULAR,
});

export const addToFavourites = (item) => ({
  type: ADD_FAVOURITES,
  item,
});
