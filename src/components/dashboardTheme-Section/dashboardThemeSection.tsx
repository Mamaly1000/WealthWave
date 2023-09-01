import { useDispatch } from "react-redux";
import { bgColors, btnColors, headerColors } from "../../Data/themes";
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
import useTheme from "../../hooks/useTheme";
import { tickIcon } from "../../assets/dashboard/icons/icons";
const DashboardThemeSection = () => {
  const { localTheme, setLocalTheme } = useTheme();
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
                  setLocalTheme({ ...localTheme, bgColor: color });
                  dispatch(setbgColorTheme(color));
                }}
              >
                {localTheme.bgColor === color && <img src={tickIcon} />}
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
                  setLocalTheme({ ...localTheme, btnColor: "#" + color });
                  dispatch(setBtnColorTheme("#" + color));
                }}
                style={{ background: "#" + color }}
              >
                {localTheme.btnColor === "#" + color && <img src={tickIcon} />}
              </div>
            );
          })}
          {bgColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                onClick={() => {
                  setLocalTheme({ ...localTheme, btnColor: color });
                  dispatch(setBtnColorTheme(color));
                }}
                style={{ background: color }}
              >
                {localTheme.btnColor === color && <img src={tickIcon} />}
              </div>
            );
          })}
        </ThemeContainer>{" "}
        <ThemeContainer height={40} title="Header color" width={3}>
          <ChromePicker
            className="picker"
            color={localTheme.headerColor}
            onChangeComplete={(color) =>
              setLocalTheme({
                ...localTheme,
                headerColor: color.hex,
              })
            }
            disableAlpha={true}
            styles={{
              default: {
                body: {
                  background: localTheme.containerColor,
                },
              },
            }}
          />
        </ThemeContainer>{" "}
        <ThemeContainer height={40} title="plain text color" width={3}>
          <ChromePicker
            className="picker"
            color={localTheme.plainTextColor}
            onChangeComplete={(color) => {
              setLocalTheme({
                ...localTheme,
                plainTextColor: color.hex,
              });
            }}
            disableAlpha={true}
            styles={{
              default: {
                body: {
                  background: localTheme.containerColor,
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
                  setLocalTheme({ ...localTheme, containerColor: "#" + color });
                  dispatch(setContainerColorTheme("#" + color));
                }}
              >
                {localTheme.containerColor === "#" + color && (
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
                  setLocalTheme({ ...localTheme, containerColor: color });
                  dispatch(setContainerColorTheme(color));
                }}
              >
                {localTheme.containerColor === color && <img src={tickIcon} />}
              </div>
            );
          })}
        </ThemeContainer>{" "}
      </div>
      <div className="theme-right-side-container">
        <ThemePreview localTheme={localTheme} />
      </div>
    </DashboardSection>
  );
};

export default DashboardThemeSection;
