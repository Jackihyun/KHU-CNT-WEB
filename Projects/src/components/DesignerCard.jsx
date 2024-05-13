
// 각각의 디자이너 카드
function DesignerCard({ name, englishName, image }) {
  return (
    <div className="flex flex-col justify-start">
      <img src={image} alt={name} className="w-[384px] h-[483px] bg-black" />
      <p className="font-pretendard-semibold text-[24px] text-black">{name}</p>
      <p className="font-pretendard-regular text-[24px] text-black">{englishName}</p>
    </div>
  );
}

export default DesignerCard;