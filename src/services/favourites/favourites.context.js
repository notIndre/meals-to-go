import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addFave = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const removeFave = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFaves: addFave,
        removeFromFaves: removeFave,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
