import { Link, useNavigate } from "react-router-dom";
import useDataData from "../../Hooks/useDataData/useDataData";
import useAuthData from "../../Hooks/useAuthData/useAuthData";
import Swal from "sweetalert2";

const Register = () => {
  const { Email, setEmail } = useDataData();
  const { createUser, handleUpdateProfile } = useAuthData();
  const navigate = useNavigate();

  console.log(Email);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;

    console.log(email, password);

    // passWordValidation
    if (password.length < 6) {
      Swal.fire({
        title: "Invalid!",
        text: "Password should at least 6 character",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        title: "Invalid!",
        text: "Password should include 'CAPITAL' letter",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }
    if (!/[@,$,#,-, ,%,^,*,!,(,)]/.test(password)) {
      Swal.fire({
        title: "Invalid!",
        text: "Password should include 'SPECIAL' letter",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    // clear target
    form.reset();

    // createUser
    createUser(email, password)
      .then(() =>
        handleUpdateProfile(name, image).then(() => {
          Swal.fire({
            title: "Success!",
            text: "Register successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          navigate("/");
        })
      )
      .catch(() =>
        Swal.fire({
          title: "Invalid!",
          text: "This email is already used",
          icon: "error",
          confirmButtonText: "Ok",
        })
      );

    // setDefault value to null
    setEmail("");
  };

  return (
    <div className="hero min-h-screen  bg-[url('https://i.ibb.co/H78qFyM/Polygon-Luminary.png')]">
      <div className="hero-content flex flex-col ">
        <div className="text-center my-3">
          <h1 className="text-5xl font-bold font-Bebas-neue text-red-700">
            Register to explore
          </h1>
        </div>
        <div className="card flex-shrink-0 min-w-[90vw] md:min-w-[55vw]  shadow-2xl bg-gray-500 ">
          <form onSubmit={handleLogin} className="card-body">
            {/* Name and Email */}
            <div className="md:flex gap-5">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  defaultValue={Email}
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter a strong password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter your image link"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary font-bold"
                type="submit"
                value="Register"
              />
              <p className="text-black text-center font-medium mt-2">
                Already have an account?{" "}
                <Link to="/login" className="text-red-900">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
