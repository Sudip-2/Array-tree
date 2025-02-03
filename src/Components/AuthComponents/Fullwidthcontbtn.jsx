import React from "react";

const Fullwidthcontbtn = ({ disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="w-full disabled:bg-purple-400 bg-loginBtnClr py-[15px] rounded-full text-white font-bold hover:bg-purple-800"
    >
      Continue
    </button>
  );
};

export default Fullwidthcontbtn;
