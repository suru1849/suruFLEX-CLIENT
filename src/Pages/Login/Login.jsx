import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuthData from "../../Hooks/useAuthData/useAuthData";

const Login = () => {
  const { googleSignIn } = useAuthData();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // clear target
    form.reset();

    const user = {
      email,
      password,
    };

    console.log(user);
  };

  // Google
  const handleGoogle = () => {
    googleSignIn()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
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
