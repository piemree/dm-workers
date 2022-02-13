import React from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
const Loading = () => {
  const state = useSelector((store) => store.root.loading);
  return (
    <div
      className={`absolute top-0 bottom-0 left-0 right-0 bg-black opacity-60 z-30 ${
        state ? "flex" : "hidden"
      }  items-center justify-center`}
    >
      <ClipLoader color={"red"} loading={true} size={100} />
    </div>
  );
};

export default Loading;
