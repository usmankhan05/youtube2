import React, { useState } from "react";

const Description = ({disc}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex items-center mx-auto p-4 bg-gray-100 rounded-xl mt-2 text-sm">
      <div
        className={`text-sm leading-relaxed overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? "max-h-full" : "max-h-16"
        }`}
      >
        {disc}
      </div>
      <button
        onClick={toggleDescription}
        className="backdrop-blur-lg bg-gray-100 rounded absolute bottom-2 right-2 font-semibold px-3 py-1"
      >
        {isExpanded ? "Show Less" : "See More"}
      </button>
    </div>
  );
};

export default Description;
