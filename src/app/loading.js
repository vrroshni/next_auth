import React from 'react';

const Loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex animate-spin rounded-full border-4 border-solid border-current border-r-transparent">
        <span  role="status" className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
