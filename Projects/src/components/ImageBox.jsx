// src/components/ImageBox.js
import React from 'react';

function ImageBox({ src }) {
  return (
    <div className="w-full h-full">
      <img src={src} alt="image" className="object-cover w-full h-full" />
    </div>
  );
}

export default ImageBox;
