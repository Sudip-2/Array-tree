import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
      />
    </div>
  );
};

export default Loader;
