import React from "react";

type LineButtonProps = {
  text: string;
};

const LineSpan: React.FC<LineButtonProps> = ({ text }) => {
  return (
    <span className="line-btn">
      {text}
    </span>
  );
};

export default LineSpan;