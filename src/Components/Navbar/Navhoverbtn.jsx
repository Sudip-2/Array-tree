import React, { useState } from 'react';

const Navhoverbtn = ({ name , data}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='relative rounded-xl'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className={`text-navLinkGrey text-base font-medium px-[15px] py-[10px] hover:bg-navHoverGrey rounded-xl`}>
        {name}
      </button>

      {isHovered && (
        <div className='absolute w-[280px] h-[35px]'>
          <ul className='absolute w-[280px] top-[30px] bg-white p-[10px] leading-[45px] rounded-xl border'>
            {
              data.map((item,index) => {
                return(
                  <li className='hover:bg-gray-200 rounded-xl px-[10px] text-navLinkGrey cursor-pointer' key={index}>{item}</li>
                )
              })
            }
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navhoverbtn;
