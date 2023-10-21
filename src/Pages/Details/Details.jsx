import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import useAuthData from "../../Hooks/useAuthData/useAuthData";
import Swal from "sweetalert2";

const Details = () => {
  const [product, setProduct] = useState({});
  const { user } = useAuthData();
  const loadedData = useLoaderData();
  const { id } = useParams();
  const navigaet = useNavigate();

  useEffect(() => {
    const data = loadedData.find((item) => item._id === id);
    setProduct(data);
  }, []);

  const { image, description, name, rating } = product || {};

  const handleAddToCart = () => {
    const cart = {
      user: user.email,
      product: product,
    };

    fetch(
      "https://entertainment-and-media-server-n5uzosdjn-sleepings-projects.vercel.app/addToCart",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Added!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

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
          <div>
            <button onClick={handleAddToCart} className="btn btn-primary">
              Add To Cart
            </button>
            <button
              onClick={() => navigaet(-1)}
              className="btn btn-secondary ml-3"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
