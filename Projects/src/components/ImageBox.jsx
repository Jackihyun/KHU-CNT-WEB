// src/components/ImageBox.js

function ImageBox({ src }) {
  return (
    <div className="w-full h-full">
      <img src={src} alt="image" className="object-cover w-full h-full" />
    </div>
  );
}

export default ImageBox;
