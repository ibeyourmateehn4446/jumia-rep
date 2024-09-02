import { Link } from "react-router-dom";
import SalesItem from "./SalesItem";

const Sales = () => {
  return (
    <div className="bg-white mt-4 p-4 rounded-md grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 md:gap-y-4 md:gap-x-3">
      <Link to={"/"}>
        <SalesItem image={"/images/clearance.png"} title="Clearance Sale" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/newarrival.gif"} title="New Arrival" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/appliances.png"} title="Appliances Deals" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/special.png"} title="Special Offers" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/phonestab.png"} title="Phones & Tablets Deals" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/fashion.gif"} title="Fashion Deals" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/computing.png"} title="Computing" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/electronics.png"} title="Electronic Deals" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/mobile.png"} title="Mobile Accessories" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/generator.png"} title="Generators" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/beauty.png"} title="Beauty Deals" />
      </Link>
      <Link to={"/"}>
        <SalesItem image={"/images/home.png"} title="Home Essentials" />
      </Link>
    </div>
  );
};

export default Sales;
