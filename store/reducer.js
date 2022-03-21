const initialState = {
  mostPopular: null,
  favourites: {
    items: [],
    itemsId: [],
  },
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "MOST_POPULAR_SUCCESS":
      newState.mostPopular = action.mostPopular;
  }
  switch (action.type) {
    case "ADD_FAVOURITES_SUCCESS":
      const recent_favourites = {};
      recent_favourites.items = [...state.favourites.items, action.item];
      recent_favourites.itemsId = [...state.favourites.itemsId, action.item.id];
      newState.favourites = recent_favourites;
  }

  return newState;
};

export default reducer;
