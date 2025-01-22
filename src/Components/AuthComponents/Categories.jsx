import { useState } from "react";

const Categories = ({ textH, textP, img, bgCLr, val, register }) => {

  const [focus,setFocus] = useState(false)

  return (
    <div className={`mt-4 h-[110px] outline outline-1 outline-gray-200 rounded-xl hover:outline-gray-500 cursor-pointer flex items-center px-4 justify-between focus:outline-2 focus:outline-gray-900`}
      onClick={(e) => {
        e.currentTarget.querySelector('input[type="radio"]').click();
        setFocus(!focus)
      }}
    >
      <input type="radio" value={val} {...register("choice", {
        required: true})} className="hidden"/>
      <div>
        <h3 className="font-bold text-lg">{textH}</h3>
        <p>{textP}</p>
      </div>

      <div className="max-w-20 max-h-30 rounded-lg"
        style={{
          background: bgCLr
        }}
      >
        <img src={img} alt="" className="w-full h-full object-cover rounded-lg border" />
      </div>

    </div>
  );
};

export default Categories;
