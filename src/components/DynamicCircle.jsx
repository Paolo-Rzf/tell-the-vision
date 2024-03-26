import React from "react";
import "css/DynamicCircle.css"

const DynamicCircle = () => {
  return (
    <nav className="absolute right-5 top-[50%] translate-y-1/2 h-fit z-[13]">
      <div class="conteneur">
        <div class="cercle"></div>
      </div>
    </nav>
  );
};

export default DynamicCircle;
