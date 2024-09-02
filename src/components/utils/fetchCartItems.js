export const fetchItems = () => {
  const cartInfo =
    JSON.parse(localStorage.getItem("cartItems")) !== null
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [];
  return cartInfo;
};
