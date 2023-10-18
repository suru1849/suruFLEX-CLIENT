import { useState } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import useDataData from "../../Hooks/useDataData/useDataData";

const Banner = () => {
  const [navigate, setNavigate] = useState(false);
  const { setEmail } = useDataData();

  const handleEnter = () => {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    const regularExpression =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // email validation check
    if (!email) {
      Swal.fire({
        title: "Empty email!",
        text: "Please enter email address",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (!regularExpression.test(email)) {
      Swal.fire({
        title: "Invalid email!",
        text: "Please enter a valid email address",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      setNavigate(true);
      setEmail(email);
    }
  };

  return (
    <div className=" bg-[url('https://i.ibb.co/Sn7FJns/Wave.png')] min-h-[20vh]  bg-center text-white text-center py-7 space-y-2 border-2 border-red-50">
      <div>
        <h1 className="text-4xl md:text-5xl text-red-600 font-bold font-Bebas-neue">
          Unlimited movies, TV shows,
        </h1>
        <h3 className="text-lg md:text-xl font-medium font-Bebas-neue">
          Enter your email to create or restart your membership.
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-1 justify-center items-center">
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            className="input w-full max-w-xs text-black"
            id="email"
          />
        </form>
        <div>
          <button onClick={handleEnter} className="btn btn-accent">
            Enter
          </button>
          {navigate && <Navigate to="/login"></Navigate>}
        </div>
      </div>
    </div>
  );
};

export default Banner;
