// Tag.js
import React from "react";

const Tag = ({ children }) => {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200">
      {children}
    </span>
  );
};

export default Tag;
