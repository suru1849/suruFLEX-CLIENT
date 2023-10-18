import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAdd = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const name = form.name.value.toUpperCase();
    const brandName = form.brandName.value.toUpperCase();
    const type = form.type.value.toUpperCase();
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;

    // clear target
    form.reset();
    console.log(typeof name);
    const product = {
      image,
      name,
      brandName,
      type,
      price,
      description,
      rating,
    };

    console.log(product);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="min-h-[90vh] flex justify-center items-center  bg-[url('https://i.ibb.co/s2d2C7G/Mass-Circles.png')] text-white">
      <form onSubmit={handleAdd} className="w-3/4 space-y-3 my-6 ">
        {/* image */}
        <div>
          <label className="block mb-2 text-sm font-medium">Image</label>
          <input
            type="text"
            name="image"
            id="error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
            placeholder="Import image link"
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
            />
          </div>
        </div>
        {/* short description */}
        <div>
          <label className="block mb-2 text-sm font-medium">Description</label>
          <input
            type="text"
            name="description"
            id="error"
            className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500 w-full"
            placeholder="Write description"
          />
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
          />
        </div>
        {/* add */}
        <div className="pt-2">
          <input className="w-full btn btn-neutral" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
