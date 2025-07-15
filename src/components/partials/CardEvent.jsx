import React from "react";

const CardEvent = ({image,alt, title,type,bgColor,textColor,date,location}) => {
  return (
    <>
      <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
        <img
          src={image}
          alt={alt}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{title}</h3>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor}`}>
             {type}
            </span>
          </div>
          <p className="text-gray-400 mb-1">{date}</p>
          <p className="text-gray-300">{location}</p>
          <button className="mt-4 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

export default CardEvent;
