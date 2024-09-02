import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { useQuery } from "react-query";

import FifthSection from "../FifthSection/FifthSection";
import FirstSection from "../FirstSection/FirstSection";
import FourthSection from "../FourthSection/FourthSection";
import SecondSection from "../SecondSection/SecondSection";
import SeventhSection from "../SeventhSection/SeventhSection";
import SixthSection from "../SixthSection/SixthSection";
import ThirdSection from "../ThirdSection/ThirdSection";
import { setUser } from "../Store/Features/UserSlice";
import { setProduct } from "../Store/Features/ProductSlice";
import Footer from "../Footer/Footer";
import Sales from "../Sales/Sales";
import WhatBanner from "../WhatBanner/WhatBanner";

const Home = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems.cartItems);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          setUser({
            email: authUser.email,
            name: authUser.displayName,
            image: authUser.photoURL,
          })
        );
      } else {
        dispatch(setUser(null));
      }
    });
  }, []);

  // const [products, setProducts] = useState([]);

  const fetchData = () => {
    return axios.get(
      "https://jumia-clone-d9ecf-default-rtdb.firebaseio.com/second.json"
    );
  };

  const { isLoading, data } = useQuery("fetch-products", fetchData, {
    refetchOnWindowFocus: false,
    staleTime: 3600000,
    cacheTime: 3600000,
  });

  const loadedData = data?.data;

  const loadedProducts = [];

  useEffect(() => {
    for (const key in loadedData) {
      loadedProducts.push({
        id: key,
        title: loadedData[key].title,
        label: loadedData[key].label,
        price: loadedData[key].price,
        percent: loadedData[key].percent,
        image: loadedData[key].imageURL,
        category: loadedData[key].category,
      });
      const copy = Object.assign([], loadedProducts);
      dispatch(setProduct(copy));
    }
  }, [loadedData]);

  return (
    <>
      <div className="my-4 w-full px-[0px] lg:px-[55px]">
        <FirstSection />
        <Sales />
        <WhatBanner />
        <SecondSection />
        <ThirdSection isLoading={isLoading} />
        <FourthSection isLoading={isLoading} />
        <FifthSection isLoading={isLoading} />
        <SixthSection />
        <SeventhSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;
