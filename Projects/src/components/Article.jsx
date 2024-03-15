import MainImage from "../assets/MainImage";
function Article() {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <p className="text-[56px] mb-[85px]">Life is more important than fashion<br/>So fashion is important</p>
        <p className="text-[14px]">본문 내용</p>
      </div>
      <img src={MainImage} alt="메인이미지" />
    
    </div>
  );
}

export default Article;