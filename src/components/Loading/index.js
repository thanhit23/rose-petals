import React from 'react';

function Loading() {
  return (
    <div className="z-[100] a fixed z-[1000] top-0 w-full h-full flex justify-center items-center bg-[rgba(0,0,0,0.1)]">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
