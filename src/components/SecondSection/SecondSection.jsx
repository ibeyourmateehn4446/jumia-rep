import SlideItem from "./SlideItem";
import Wrapper from "../CarouselWrapper/Wrapper";
import { useQuery } from "react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import LoadingSkeleton from "./LoadingSkeleton";

const SecondSection = () => {
  const [images, setImages] = useState([]);
  const width = window.innerWidth;
  let count;

  if (width > 1160) count = 8;
  if (width <= 1024) count = 6;
  if (width <= 768) count = 5;
  if (width <= 425) count = 3;
  if (width === 320) count = 2;

  const fetchData = () => {
    return axios.get(
      "https://jumia-clone-d9ecf-default-rtdb.firebaseio.com/first.json"
    );
  };

  const { isLoading, data } = useQuery("first", fetchData, {
    refetchOnWindowFocus: false,
    staleTime: 3600000,
    cacheTime: 3600000,
  });

  const loadedData = data?.data;

  const loadedImages = [];

  useEffect(() => {
    for (const key in loadedData) {
      loadedImages.push({
        id: key,
        title: loadedData[key].title,
        image: loadedData[key].imageURL,
      });
    }
    setImages(loadedImages);
  }, [loadedData]);

  return (
    <>
      {isLoading && (
        <div className="mx-2 lg:mx-0 my-4">
          <Wrapper count={count}>
            {Array(10)
              .fill(0)
              .map((_, idx) => {
                return <LoadingSkeleton />;
              })}
          </Wrapper>
        </div>
      )}
      {!isLoading && (
        <div className="mx-2 lg:mx-0 my-4">
          <Wrapper count={count}>
            {images.map((image) => {
              return (
                <SlideItem
                  key={image.id}
                  title={image.title}
                  image={image.image}
                />
              );
            })}
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default SecondSection;
