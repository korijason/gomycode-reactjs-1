// src/Image.js

import React from "react";
import product from "../product";

function Image() {
  return (
    <img
      src={product.imageUrl}
      alt={product.name}
      className="w-30  h-30 rounded-lg shadow-lg"
    />
  );
}

export default Image;
