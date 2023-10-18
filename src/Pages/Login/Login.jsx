import useDataData from "../../Hooks/useDataData/useDataData";

const Login = () => {
  const { Email } = useDataData();

  console.log(Email);

  return <div>login</div>;
};

export default Login;
