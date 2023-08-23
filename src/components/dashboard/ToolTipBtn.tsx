import React from "react";
import { PlacesType, Tooltip } from "react-tooltip";

const ToolTipBtn = ({
  children,
  tooltip_id,
  classname,
  onclick,
  content,
  place,
}: {
  children: React.ReactNode;
  tooltip_id: string;
  classname: string;
  onclick: () => void;
  content: string;
  place: PlacesType | undefined;
}) => {
  return (
    <button
      data-tooltip-id={tooltip_id}
      onClick={onclick}
      className={classname}
    >
      {children}
      <Tooltip place={place} content={content} id={tooltip_id} />
    </button>
  );
};

export default ToolTipBtn;
