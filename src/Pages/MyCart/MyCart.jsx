import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import useAuthData from "../../Hooks/useAuthData/useAuthData";
import CartCard from "../../Components/CartCard/CartCard";
import Swal from "sweetalert2";

const MyCart = () => {
  const [carts, setCarts] = useState([]);
  const { user } = useAuthData();
  const loadedData = useLoaderData();

  useEffect(() => {
    const flitering = loadedData.filter((cart) => cart.user === user.email);

    setCarts(flitering);
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addToCart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              // update remaining
              const remaining = carts.filter((cart) => cart._id !== id);
              setCarts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen">
      {carts.length > 0 ? (
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 px-3 py-7">
          {carts?.map((cart) => (
            <CartCard
              key={cart._id}
              id={cart._id}
              handleDelete={handleDelete}
              product={cart.product}
            ></CartCard>
          ))}
        </div>
      ) : (
        <div className="text-red-600 font-extrabold text-2xl md:text-3xl flex justify-center items-center min-h-screen ">
          <p>Please, Added product to cart</p>
        </div>
      )}
    </div>
  );
};

export default MyCart;
