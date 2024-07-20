import React from "react";

const Tooltip = ({ text, children }) => {
  return (
    <div className="relative group flex items-center">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex items-center">
        <div className="p-2 text-sm text-tooltip-text-color bg-tooltip-bg-color rounded-lg shadow-lg justify-center">
          {text}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-tooltip-bg-color"></div>
        </div>
      </div>
    </div>
  );
};

export default Tooltip;
