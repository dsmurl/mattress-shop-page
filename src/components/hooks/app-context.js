import React from "react";
import apiData from "../../data/mattresses.json";

export const AppContext = React.createContext({
  mattressSelection: {},
  setMattressSelection: () => null,
  cart: {},
  setCart: () => null,
  addToCart: () => null,
  apiData: {},
});

export const AppContextProvider = ({ children }) => {
  const [mattressSelection, setMattressSelection] = React.useState({});
  const [cart, setCart] = React.useState([]);

  const addToCart = React.useCallback((matt) => {
    const newCart = [...cart];
    newCart.push(matt);

    setCart(newCart);
  });

  const contextValue = React.useMemo(
    () => ({
      mattressSelection,
      setMattressSelection,
      cart,
      setCart,
      addToCart,
      apiData,
    }),
    [mattressSelection, setMattressSelection, cart, setCart, addToCart, apiData]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
