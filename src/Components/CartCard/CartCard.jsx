import PropTypes from "prop-types";

const CartCard = ({ product, id, handleDelete }) => {
  const { image, name, brandName, type, price, rating } = product || {};

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
          <button onClick={() => handleDelete(id)} className="btn btn-warning">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.object,
  id: PropTypes.string,
};

export default CartCard;
