import { useDispatch } from "react-redux";
import { bgColors, btnColors } from "../../Data/themes";
import DashboardSection from "../dashboard/DashboardSection";
import Header from "../header-component/Header";
import ThemeContainer from "./ThemeContainer";
import ThemePreview from "./ThemePreview";
import { ChromePicker } from "react-color";
import {
  setBtnColorTheme,
  setContainerColorTheme,
  setHeaderColorTheme,
  setPlainTextColorTheme,
  setbgColorTheme,
} from "../../features/theme_slice/theme_slice";
import { tickIcon } from "../../assets/dashboard/icons/icons";
import { useContextFunction } from "../../context/AppContext";
const DashboardThemeSection = () => {
  const contextData = useContextFunction(); 
  const dispatch = useDispatch();
  return (
    <DashboardSection classname="Dashboard-Theme-Section">
      <Header
        btnText=""
        onclick={() => {}}
        header={false}
        height={3}
        width={150}
        text="theme section"
      />
      <div className="theme-left-side-container">
        <ThemeContainer height={40} title="background gradients" width={3}>
          {bgColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                style={{ background: color }}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    bgColor: color,
                  });
                  dispatch(setbgColorTheme(color));
                }}
              >
                {contextData!.localTheme.bgColor === color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
        </ThemeContainer>{" "}
        <ThemeContainer height={40} title="buttons background color" width={3}>
          {btnColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    btnColor: "#" + color,
                  });
                  dispatch(setBtnColorTheme("#" + color));
                }}
                style={{ background: "#" + color }}
              >
                {contextData!.localTheme.btnColor === "#" + color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
          {bgColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    btnColor: color,
                  });
                  dispatch(setBtnColorTheme(color));
                }}
                style={{ background: color }}
              >
                {contextData!.localTheme.btnColor === color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
        </ThemeContainer>{" "}
        <ThemeContainer height={40} title="Header color" width={3}>
          <ChromePicker
            className="picker"
            color={contextData!.localTheme.headerColor}
            onChangeComplete={(color) => {
              dispatch(setHeaderColorTheme(color.hex));
              contextData!.setLocalTheme({
                ...contextData!.localTheme,
                headerColor: color.hex,
              });
            }}
            disableAlpha={true}
            styles={{
              default: {
                body: {
                  background: contextData!.localTheme.containerColor,
                },
              },
            }}
          />
        </ThemeContainer>{" "}
        <ThemeContainer height={40} title="plain text color" width={3}>
          <ChromePicker
            className="picker"
            color={contextData!.localTheme.plainTextColor}
            onChangeComplete={(color) => {
              dispatch(setPlainTextColorTheme(color.hex));
              contextData!.setLocalTheme({
                ...contextData!.localTheme,
                plainTextColor: color.hex,
              });
            }}
            disableAlpha={true}
            styles={{
              default: {
                body: {
                  background: contextData!.localTheme.containerColor,
                },
              },
            }}
          />
        </ThemeContainer>{" "}
        <ThemeContainer
          height={40}
          title="Main containers background color"
          width={3}
        >
          {btnColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                style={{ background: "#" + color }}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    containerColor: "#" + color,
                  });
                  dispatch(setContainerColorTheme("#" + color));
                }}
              >
                {contextData!.localTheme.containerColor === "#" + color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
          {bgColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                style={{ background: color }}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    containerColor: color,
                  });
                  dispatch(setContainerColorTheme(color));
                }}
              >
                {contextData!.localTheme.containerColor === color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
        </ThemeContainer>{" "}
      </div>
      <div className="theme-right-side-container">
        <ThemePreview localTheme={contextData!.localTheme} />
      </div>
    </DashboardSection>
  );
};

export default DashboardThemeSection;
