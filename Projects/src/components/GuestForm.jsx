// src/components/GuestForm.js
import { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Alert from "./Alert";

const colorPalette = [
  // "#FFCDD2",
  // "#F8BBD0",
  // "#E1BEE7",
  // "#D1C4E9",
  // "#C5CAE9",
  // "#BBDEFB",
  // "#B3E5FC",
  // "#B2EBF2",
  // "#B2DFDB",
  // "#C8E6C9",
  "#CD6629",
  "#F7805C",
  "#FF9D8E",
  "#FFBEC2",
];

function GuestForm() {
  const [message, setMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState(colorPalette[0]);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (alertMessage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [alertMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) {
      setAlertMessage("내용을 입력해주세요.");
      return;
    }
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "feedback"), {
        message,
        color: selectedColor,
        timestamp: new Date(),
      });
      setMessage("");
      setAlertMessage("저장되었습니다.");
    } catch (e) {
      setAlertMessage("오류가 발생했습니다. 다시 시도해주세요.");
    }
    setIsSubmitting(false);
  };

  const closeAlert = () => {
    setAlertMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-xl flex flex-col items-center p-4 bg-white shadow-lg rounded-lg mx-auto"
    >
      {alertMessage && <Alert message={alertMessage} onClose={closeAlert} />}
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="여기에 적어주세요."
        className="w-full h-24 p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-300 text-[16px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[12px] m:text-[12px] font-pretendard-regular"
      />
      <div className="mb-4">
        <h3 className="text-md text-center text-[16px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[12px] m:text-[12px] font-pretendard-regular p-3">
          배경색 선택
        </h3>
        <div className="flex flex-wrap gap-2 p-3">
          {colorPalette.map((color) => (
            <button
              key={color}
              type="button"
              className={`w-8 h-8 sm:w-6 sm:h-6 m:w-6 m:h-6 rounded-full ${
                selectedColor === color
                  ? "ring-2 ring-offset-2 ring-blue-500"
                  : ""
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>
      <button
        type="submit"
        className={`px-4 py-2 text-[16px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[12px] m:text-[12px] text-pretendard-medium text-gray-500 rounded hover:bg-[#7D8ABC] ${
          isSubmitting ? "bg-gray-400" : "bg-[#FFC7ED]"
        }`}
        disabled={isSubmitting}
      >
        {isSubmitting ? "저장 중..." : "저장"}
      </button>
    </form>
  );
}

export default GuestForm;
