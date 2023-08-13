const NewsSearch = ({
  value,
  onchange,
}: {
  value: string;
  onchange: (e: any) => void;
}) => {
  return (
    <div className="news-search-component">
      <input
        type="text"
        placeholder="search ..."
        value={value}
        onChange={onchange}
      />
    </div>
  );
};

export default NewsSearch;
