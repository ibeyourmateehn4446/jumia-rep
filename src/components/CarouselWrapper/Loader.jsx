import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { MdOutlineStar } from "react-icons/md";

const Loader = () => {
  return (
    <div className="my-1 cursor-pointer bg-white flex flex-col hover:shadow-md hover:scale-[1.01] h-[200px] w-[140px] md:w-[165px] focus:outline-0 rounded-md p-1 lg:p-0">
      <div className="h-[95%] w-[100%] flex flex-col items-center justify-center bg-[#D4D4D6] rounded-t-md">
        <div className="h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center">
          <MdOutlineStar className="text-[#D4D4D6] text-[35px]" />
        </div>
      </div>
      <SkeletonTheme baseColor="#D4D4D6">
        <Skeleton className="w-[80px] md:w-[100%] h-[10px]" />
      </SkeletonTheme>
    </div>
  );
};

export default Loader;
