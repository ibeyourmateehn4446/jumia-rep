import { Link } from "react-router-dom";

const BannerItem = ({ href, image, alt }) => {
  return (
    <Link to={href}>
      <img src={image} alt={alt} className="rounded-md hover:scale-[1.01]" />
    </Link>
  );
};

export default BannerItem;
