export const fetchDetails = () => {
  const customerInfo =
    JSON.parse(localStorage.getItem("fullDetails")) !== null
      ? JSON.parse(localStorage.getItem("fullDetails"))
      : {};

  return customerInfo;
};
