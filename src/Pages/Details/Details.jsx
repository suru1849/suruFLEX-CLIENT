import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const [product, setProduct] = useState({});
  const loadedData = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    const data = loadedData.find((item) => item._id === id);
    setProduct(data);
  }, []);

  const { image, description, name, rating } = product || {};

  console.log(image);

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="hero min-h-[100vh]  bg-center"
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-Bebas-neue text-red-700 font-bold">
            {name}
          </h1>
          <p className="mb-5 font-bold">Rating: {rating}</p>
          <p className="mb-5 font-bold">{description}</p>
          <button className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
