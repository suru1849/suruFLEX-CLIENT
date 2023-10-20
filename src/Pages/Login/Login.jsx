import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuthData from "../../Hooks/useAuthData/useAuthData";
import Swal from "sweetalert2";

const Login = () => {
  const { googleSignIn, logIn } = useAuthData();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    logIn(email, password)
      .then(() => {
        // target-clear
        form.reset();

        // notify
        Swal.fire({
          title: "Success!",
          text: "Log in successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Error!",
          text: "Invalid email or password",
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  // Google
  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Log in successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };

  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/fdxXC4j/Animated-Shape.png')] py-5 ">
      <div className="hero-content flex flex-col ">
        <div className="text-center my-3">
          <h1 className="text-5xl font-bold font-Bebas-neue text-red-700">
            Login now!
          </h1>
        </div>
        <div className="card flex-shrink-0 min-w-[60vh] shadow-2xl bg-gray-500 ">
          <form onSubmit={handleLogin} className="card-body mb-0 pb-0">
            {/* Name and Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
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

            <div className="form-control mt-6">
              <input
                className="btn btn-primary font-bold"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          {/* google login */}
          <div className="text-center card-body ">
            <button
              onClick={handleGoogle}
              className="btn btn-outline font-bold min-w-[49vh]"
            >
              Log in with <FcGoogle className="text-2xl"></FcGoogle>
            </button>
            <p className="text-black text-center font-medium mt-2">
              Don't have any account?{" "}
              <Link to="/register" className="text-red-900">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
