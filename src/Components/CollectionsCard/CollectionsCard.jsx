import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const CollectionsCard = ({ product }) => {
  const { _id, image, name, brandName, type, price, rating } = product || {};

  return (
    <div className="card card-side bg-white shadow-xl flex flex-col md:flex-row border border-gray-200 ">
      <figure>
        <img
          className="w-[250px] md:w-[200px] h-full rounded-xl"
          src={image}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-Bebas-neue text-2xl">{name}</h2>
        <p className="text-red-800 font-bold">{brandName}</p>
        <p>
          <span className="font-bold">Type</span> : {type}
        </p>
        <p>
          <span className="font-bold">Price</span> : ${price}
        </p>
        <p>
          <span className="font-bold">Rating</span> : {rating}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/details/${_id}`}>
            <button className="btn btn-secondary">Details</button>
          </Link>
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

CollectionsCard.propTypes = {
  product: PropTypes.object,
};

export default CollectionsCard;
