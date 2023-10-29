import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { Slider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { singleFilterType } from "../../features/crypto_slice/crypto_slice";
const Custom_range_input = ({
  min = 0,
  max = 100,
  minVal = 40,
  maxVal = 60,
  setValue,
  filterItem,
}: {
  min?: number;
  max?: number;
  minVal: number;
  maxVal: number;
  setValue: Dispatch<SetStateAction<singleFilterType>>;
  filterItem: singleFilterType;
}) => {
  const theme = useSelector(selecttheme);
  function handleChanges(_event: any, newValue: any) {
    setValue({
      ...filterItem,
      value: {
        max: newValue[1],
        min: newValue[0],
        strValue: "",
        type: filterItem.value.type,
      },
    });
  }
  const RangeComponent = styled.div`
    & .MuiSlider-rail {
      background: ${theme.btnColor};
    }
    & .MuiSlider-track {
      background: ${theme.btnColor};
    }
    & .css-187mznn-MuiSlider-root {
      color: ${theme.btnColor};
    }
    & .MuiSlider-valueLabelOpen {
      color: ${theme.headerColor};
    }
  `;

  return (
    <RangeComponent style={{ width: "100%", padding: "20px" }}>
      <Slider
        max={max}
        min={min}
        value={[minVal, maxVal]}
        valueLabelDisplay="auto"
        onChangeCommitted={handleChanges}
      />
      The selected range is{" "}
      <span style={{ borderBottom: `2px solid ${theme.btnColor}` }}>
        {minVal}
      </span>{" "}
      -{" "}
      <span style={{ borderBottom: `2px solid ${theme.btnColor}` }}>
        {maxVal}
      </span>
    </RangeComponent>
  );
};
export default Custom_range_input;
