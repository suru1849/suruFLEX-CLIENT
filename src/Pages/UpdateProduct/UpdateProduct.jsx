import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const [product, setProduct] = useState({});
  const loadedData = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const data = loadedData.find((item) => item._id === id);
    setProduct(data);
  }, []);

  const { _id, image, rating, price, type, brandName, name } = product || {};

  const brandname = [
    "DISNEY",
    "NETFLIX",
    "WARNER BROS",
    "AMAZON PRIME",
    "SONY PICTURES",
    "MARVEL",
  ];

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const name = form.name.value.toUpperCase();
    const brandName = form.brandName.value.toUpperCase();
    const type = form.type.value.toUpperCase();
    const price = form.price.value;
    const rating = form.rating.value;

    // Verify brand name
    const index = brandname.indexOf(brandName);
    if (index < 0) {
      Swal.fire({
        title: "INCORECT BRAND NAME!",
        text: "Please enter correct brand name",
        icon: "error",
        confirmButtonText: "OPPS",
      });
      return;
    }

    const category = index + 1;

    const product = {
      category,
      image,
      name,
      brandName,
      type,
      price,
      rating,
    };

    // SERVER
    fetch(
      `https://entertainment-and-media-server-n5uzosdjn-sleepings-projects.vercel.app/products/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(product),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Updated!",
            text: "Product Updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });

          navigate(-1);
        }
      });

    // clear target
    form.reset();
  };

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center  bg-[url('https://i.ibb.co/s2d2C7G/Mass-Circles.png')] text-white">
      <div>
        <p className="text-3xl font-bold font-Bebas-neue my-7">
          Update Product
        </p>
      </div>
      <form
        onSubmit={handleUpdate}
        className="w-3/4 space-y-3 my-6 bg-gray-600 p-6 rounded-xl"
      >
        {/* image */}
        <div>
          <label className="block mb-2 text-sm font-medium">Image</label>
          <input
            type="text"
            name="image"
            id="error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            placeholder="Import image link"
            defaultValue={image}
          />
        </div>
        {/* name and brand-name */}
        <div className="md:flex gap-5">
          <div className="md:w-1/2">
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              id="error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block  p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 w-full "
              placeholder="Insert name"
              defaultValue={name}
              required
            />
          </div>
          <div className="md:w-1/2">
            <label className="block mb-2 text-sm font-medium">Brand Name</label>
            <input
              type="text"
              name="brandName"
              id="error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 w-full"
              placeholder="Insert brand name"
              defaultValue={brandName}
              required
            />
          </div>
        </div>
        {/* type and price */}
        <div className="md:flex gap-5">
          <div className="md:w-1/2">
            <label className="block mb-2 text-sm font-medium">Type</label>
            <input
              type="text"
              name="type"
              id="error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block  p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 w-full "
              placeholder="Insert type"
              defaultValue={type}
              required
            />
          </div>
          <div className="md:w-1/2">
            <label className="block mb-2 text-sm font-medium">Price</label>
            <input
              type="text"
              name="price"
              id="error"
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 w-full"
              placeholder="Insert price"
              defaultValue={price}
              required
            />
          </div>
        </div>

        {/* ratting */}
        <div>
          <label className="block mb-2 text-sm font-medium">Rating</label>
          <input
            type="text"
            name="rating"
            id="error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 w-full"
            placeholder="Insert rating"
            defaultValue={rating}
          />
        </div>
        {/* update */}
        <div className="pt-2">
          <input
            className="w-full btn btn-neutral"
            type="submit"
            value="Update"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
