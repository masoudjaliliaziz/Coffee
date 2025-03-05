import React from "react";
type props = {
  text: string;
};
function VerticalDivider({ text }: props) {
  return (
    <div className="divider divider-vertical  py-16 ">
      <div className="badge p-5 font-bold text-lg badge-neutral">{text}</div>
    </div>
  );
}

export default VerticalDivider;
