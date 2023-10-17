import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import Header from "../header-component/Header";
type ValuePiece = Date | null;

type datevalue = ValuePiece | [ValuePiece, ValuePiece];
const DateComponent = ({
  title,
  placeholder,
  value,
  onchange,
}: {
  title: string;
  placeholder: string;
  value: string | number;
  onchange: (e: any) => void;
}) => {
  const [calenderValue, setCalendarValue] = useState<datevalue>(new Date());

  return (
    <div className="input-group">
      <Header
        btnText=""
        header={false}
        height={30}
        width={3}
        onclick={() => {}}
        text={title}
      />
      <DatePicker
        onChange={(e) => {
          setCalendarValue(e);
          onchange(e);
        }}
        value={calenderValue}
        calendarClassName="calendar-container"
        maxDate={new Date(Date.now())}
        tileClassName="tile-class"
        defaultActiveStartDate={new Date(Date.now())}
      />
    </div>
  );
};

export default DateComponent;
