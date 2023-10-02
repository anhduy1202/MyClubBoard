import React from "react";

const CollgeIcon = (props) => {
  const { imgSrc, position } = props;
  return (
    <div
      className={`${position} drop-shadow-[10px_20px_20px_rgba(249,225,221,1)] absolute w-20 h-20 bg-white animate-float rounded-[50%] flex items-center justify-center`}
    >
      <img src={imgSrc} alt="" className="w-14 h-14 rounded-[50%]" />
    </div>
  );
};

export default CollgeIcon;
