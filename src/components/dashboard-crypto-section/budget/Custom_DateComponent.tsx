import { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
type ValuePiece = Date | null;
type datevalue = ValuePiece | [ValuePiece, ValuePiece];

const Custom_DateComponent = ({
  label,
  onchange,
}: {
  onchange: (e: any) => void;
  label: string;
}) => {
  const theme = useSelector(selecttheme);
  const [calenderValue, setCalendarValue] = useState<datevalue>(new Date());

  return (
    <Div theme={theme}>
      <div className="component-header">{label}</div>
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
    </Div>
  );
};

export default Custom_DateComponent;
const Div = styled.div`
  z-index: 9000;
  padding-block: 10px;
  min-width: 100%;
  position: relative;
  .calendar-container {
    background: ${(props) => props.theme.modalColor};
    color: ${(props) => props.theme.btnColor};
    border-color: ${(props) => props.theme.btnColor};
    border-radius: 4px;
    z-index: 900000;
  }
  .tile-class {
    color: ${(props) => props.theme.btnColor};
    background: ${(props) => props.theme.modalColor};
    padding: 5px;
    padding-block: 10px;
    border-radius: 4px;
    margin: 0px;
  }

  .react-calendar__navigation > button {
    color: ${(props) => props.theme.btnColor} !important;
    font-size: 0.7rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    white-space: nowrap;
    padding-inline: 1px;
    font-weight: 700;
  }
  .react-calendar__navigation {
    display: flex;
    align-items: center;
    justify-content: between;
  }
  .react-date-picker {
    min-width: 100% !important;
    padding: 16.5px 0px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.btnColor};
    & > .react-date-picker__inputGroup {
      float: left;
      max-width: fit-content;
      padding-inline: 0px;
      border-width: 0;
    }
    .react-date-picker__wrapper {
      border-width: 0;
    }
    .react-date-picker__button__icon,
    .react-date-picker__button:enabled:focus {
      color: ${(props) => props.theme.btnColor};
      stroke: ${(props) => props.theme.btnColor};
      &:hover,
      &:active,
      &:focus,
      &:enabled {
        color: ${(props) => props.theme.headerColor};
        stroke: ${(props) => props.theme.headerColor} !important;
      }
    }
  }
  .component-header {
    position: absolute;
    top: -2%;
    left: 5%;
    font-size: 0.9rem;
    text-transform: capitalize;
    font-weight: 400;
    padding-inline: 5px;
    background-color: ${(props) => props.theme.modalColor};
    z-index: 10;
  }
`;
