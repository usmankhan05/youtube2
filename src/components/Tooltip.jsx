import React from 'react';

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute mt-3 left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex whitespace-nowrap z-50 bg-black/70 text-white text-xs rounded py-2 px-2">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
