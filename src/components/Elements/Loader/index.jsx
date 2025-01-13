import React from 'react';

const Loader = () => {
  return (
    <div className="animate-pulse">
      <div className="flex justify-between pt-3 pb-3">
        <div className="flex">
          <div className="bg-gray-200 me-3 h-16 w-16 rounded-lg"></div>
          <div className="flex flex-col justify-center">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-8 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
      <div className="flex justify-between pt-3 pb-3">
        <div className="flex">
          <div className="bg-gray-200 me-3 h-16 w-16 rounded-lg"></div>
          <div className="flex flex-col justify-center">
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-32"></div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-8 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;