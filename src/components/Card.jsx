import React from 'react';

const Card = ({src}) => {
  return (
    <>
      <div className="md:w-[400px] w-[90%] sm:w-[60%] md:h-[400px] overflow-hidden h-[270px] bg-[#2727275e] rounded-xl shadow-lg">
        <img src={src} className='w-full h-full object-cover ' alt="" />
      </div>
    </>
  );
}

export default Card;
