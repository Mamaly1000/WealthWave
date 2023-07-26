const Divider = ({ width, height }: { width: number; height: number }) => {
  return (
    <div
      className="nft-divider"
      style={{
        maxWidth: `${width}px`,
        maxHeight: `${height}px`,
        width: `${width}px`,
        height: `${height}px`,
      }}
    ></div>
  );
};

export default Divider;
