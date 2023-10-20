import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">error</h1>
      <button
        onClick={() => navigate(-1)}
        className="p-2 my-2 rounded-lg bg-red-500"
      >
        Back to home
      </button>
    </div>
  );
};

export default ErrorPage;
