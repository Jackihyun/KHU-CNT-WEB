// src/components/Alert.js
import { useEffect } from "react";

function Alert({ message, onClose }) {
  useEffect(() => {
    if (message) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [message]);

  if (!message) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 text-white px-4 py-3 rounded-lg shadow-lg z-50">
        <div className="flex items-center justify-between">
          <span className="text-nowrap">{message}</span>
          <button onClick={onClose} className="ml-4 font-pretendard-semibold">
            X
          </button>
        </div>
      </div>
    </>
  );
}

export default Alert;
