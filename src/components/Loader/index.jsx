import React from "react";
import { HashLoader } from "react-spinners";

const Loader = ({ isLoading }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HashLoader color={"#fff"} isLoading={isLoading} size={80} />
    </div>
  );
};

export default Loader;
