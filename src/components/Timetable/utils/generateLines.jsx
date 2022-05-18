export const generateLinesHorizontal = ({ min, max }) => {
  const size = max - min;
  const lines = [];
  for (let i = 0; i < size; i++) {
    lines.push(
      <span key={i}>
        <div className="hours">
          {i + min < 10 ? 0 : ''}
          {i + min}-{i + min + 1 < 10 ? 0 : ''}
          {i + min + 1}
        </div>
      </span>
    );
  }
  return lines;
};

export const generateLinesVertical = ({ size }) => {
  const lines = [];
  for (let i = 0; i < size; i++) {
    lines.push(<span key={i}></span>);
  }
  return lines;
};
