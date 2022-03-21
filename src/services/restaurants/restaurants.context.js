import { useState, useEffect, useMemo, createContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantsContext.Provider value={{ restaurants: [] }}>
      {children}
    </RestaurantsContext.Provider>
  );
};

restaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedRestaurants) => {
    console.log(transformedRestaurants);
  })
  .catch((err) => {
    console.log(err);
  });
