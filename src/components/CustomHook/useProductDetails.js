import axios from "axios";
import { useQuery } from "react-query";

const fetchProductDetails = (productID) => {
  return axios.get(
    `https://jumia-clone-d9ecf-default-rtdb.firebaseio.com/second/${productID}.json`
  );
};

export const useProductDetails = (productID) => {
  return useQuery(
    ["product-details", productID],
    () => fetchProductDetails(productID),
    {
      refetchOnWindowFocus: false,
    }
  );
};
