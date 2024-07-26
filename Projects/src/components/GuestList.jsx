// src/components/GuestList.js
import { useState, useEffect, useRef } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function GuestList() {
  const [feedbacks, setFeedbacks] = useState([]);
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "feedback"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const feedbackArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbacks(feedbackArray);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const speed = 1; // 스크롤 속도 (더 작게 하면 더 느려짐)

    const scroll = () => {
      container.scrollTop += speed;
      if (container.scrollTop >= container.scrollHeight / 2) {
        container.scrollTop = 0;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current); // 클린업 함수로 애니메이션 프레임 취소
      }
      container.scrollTop = 0; // 클린업 함수로 스크롤 위치 초기화
    };
  }, [feedbacks]);

  return (
    <div className="w-full max-w-xl mb-6 p-4 bg-white shadow-lg rounded-lg mx-auto">
      <h2 className="text-2xl mt-[20px] xl:text-2xl lg:text-xl md:text-base sm:text-base m:text-sm font-pretendard-bold mb-8 text-center">
        2024 경희대학교 패션쇼를 빛내준 분들에게 하고싶은 말이 있다면
        적어주세요!
      </h2>
      <div className="relative overflow-hidden h-80 bg-gray-100 border rounded-lg mb-8">
        <div
          ref={containerRef}
          className="absolute w-full"
          style={{
            overflow: "hidden",
            height: "100%",
            willChange: "transform",
          }}
        >
          {feedbacks.concat(feedbacks).map((feedback, index) => (
            <div
              key={`${feedback.id}-${index}`}
              className="p-4 border-b"
              style={{ backgroundColor: feedback.color || "#FFF8DB" }}
            >
              <p className="text-[#987070] text-[16px] xl:text-[16px] lg:text-[14px] md:text-[14px] sm:text-[12px] m:text-[12px] font-pretendard-regular">
                {feedback.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GuestList;
