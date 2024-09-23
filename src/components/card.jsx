import React from "react";

const Card = ({ title, className }) => {
  return (
    <div className={`relative h-[300px] w-[300px] rounded-md ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <h2 className="text-lg font-bold text-white justify-center text-nowrap">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
