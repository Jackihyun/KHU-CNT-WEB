import DesignerCard from "./DesignerCard";
// 초성으로 디자이너 검색하는 컴포넌트
function DesignerSearch({ designers }) {
  // const [search, setSearch] = useState('');

  const filteredDesigners = designers.filter(designer =>
    designer.name.startsWith(search)
  );
  return (
    <div className="flex">
      <div>
        <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
        {filteredDesigners.map(designer => (
          <DesignerCard key={designer.id} {...designer} />
        ))}
      </div>
    </div>
  );
}

export default DesignerSearch;