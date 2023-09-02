import { useDispatch } from "react-redux";
import {
  bgColors,
  btnColors,
  dividerColors,
  headerColors,
} from "../../Data/themes";
import DashboardSection from "../dashboard/DashboardSection";
import Header from "../header-component/Header";
import ThemeContainer from "./ThemeContainer";
import ThemePreview from "./ThemePreview";
import {
  setBtnColorTheme,
  setContainerColorTheme,
  setDividerColorTheme,
  setHeaderColorTheme,
  setHoverColorTheme,
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
        <ThemeContainer
          styleColor={contextData!.localTheme.bgColor}
          height={40}
          title="background gradients"
          width={3}
          onChangeComplete={(color) => {
            dispatch(setbgColorTheme(color.hex));
            contextData!.setLocalTheme({
              ...contextData!.localTheme,
              bgColor: color.hex,
            });
          }}
        >
          {bgColors.map((color, index) => {
            return (
              <div
                className="color-item"
                key={index}
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
        <ThemeContainer
          styleColor={contextData!.localTheme.btnColor}
          height={40}
          title="buttons background color"
          width={3}
          onChangeComplete={(color) => {
            dispatch(setBtnColorTheme(color.hex));
            contextData!.setLocalTheme({
              ...contextData!.localTheme,
              btnColor: color.hex,
            });
          }}
        >
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
          {headerColors.map((color) => {
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
        </ThemeContainer>{" "}
        <ThemeContainer
          styleColor={contextData!.localTheme.hoverColor}
          height={40}
          title="buttons hover color"
          width={3}
          onChangeComplete={(color) => {
            dispatch(setHoverColorTheme(color.hex));
            contextData!.setLocalTheme({
              ...contextData!.localTheme,
              hoverColor: color.hex,
            });
          }}
        >
          {btnColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    hoverColor: "#" + color,
                  });
                  dispatch(setHoverColorTheme("#" + color));
                }}
                style={{ background: "#" + color }}
              >
                {contextData!.localTheme.hoverColor === "#" + color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}{" "}
          {headerColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    hoverColor: "#" + color,
                  });
                  dispatch(setHoverColorTheme("#" + color));
                }}
                style={{ background: "#" + color }}
              >
                {contextData!.localTheme.hoverColor === "#" + color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
        </ThemeContainer>{" "}
        <ThemeContainer
          styleColor={contextData!.localTheme.headerColor}
          height={40}
          title="Header color"
          width={3}
          onChangeComplete={(color) => {
            dispatch(setHeaderColorTheme(color.hex));
            contextData!.setLocalTheme({
              ...contextData!.localTheme,
              headerColor: color.hex,
            });
          }}
        >
          {btnColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    headerColor: "#" + color,
                  });
                  dispatch(setHeaderColorTheme("#" + color));
                }}
                style={{ background: "#" + color }}
              >
                {contextData!.localTheme.headerColor === "#" + color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
          {headerColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    headerColor: "#" + color,
                  });
                  dispatch(setHeaderColorTheme("#" + color));
                }}
                style={{ background: "#" + color }}
              >
                {contextData!.localTheme.headerColor === "#" + color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
        </ThemeContainer>{" "}
        <ThemeContainer
          styleColor={contextData!.localTheme.plainTextColor}
          height={40}
          title="plain text color"
          width={3}
          onChangeComplete={(color) => {
            dispatch(setPlainTextColorTheme(color.hex));
            contextData!.setLocalTheme({
              ...contextData!.localTheme,
              plainTextColor: color.hex,
            });
          }}
        >
          {btnColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    plainTextColor: "#" + color,
                  });
                  dispatch(setPlainTextColorTheme("#" + color));
                }}
                style={{ background: "#" + color }}
              >
                {contextData!.localTheme.plainTextColor === "#" + color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
          {headerColors.map((color) => {
            return (
              <div
                className="color-item"
                key={color}
                onClick={() => {
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    plainTextColor: "#" + color,
                  });
                  dispatch(setPlainTextColorTheme("#" + color));
                }}
                style={{ background: "#" + color }}
              >
                {contextData!.localTheme.plainTextColor === "#" + color && (
                  <img src={tickIcon} />
                )}
              </div>
            );
          })}
        </ThemeContainer>{" "}
        <ThemeContainer
          styleColor={contextData!.localTheme.containerColor}
          height={40}
          title="Main containers background color"
          width={3}
          onChangeComplete={(color) => {
            dispatch(setContainerColorTheme(color.hex));
            contextData!.setLocalTheme({
              ...contextData!.localTheme,
              containerColor: color.hex,
            });
          }}
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
        <ThemeContainer
          styleColor={contextData!.localTheme.containerColor}
          height={40}
          title="Main containers background color"
          width={3}
          onChangeComplete={(color) => {
            dispatch(setContainerColorTheme(color.hex));
            contextData!.setLocalTheme({
              ...contextData!.localTheme,
              containerColor: color.hex,
            });
          }}
          displaycustome={false}
        >
          {dividerColors.map((color, index) => {
            return (
              <div
                className="color-item"
                style={{ background: color.color }}
                key={index}
                onClick={() => {
                  dispatch(setDividerColorTheme(color.classname));
                  contextData!.setLocalTheme({
                    ...contextData!.localTheme,
                    divider: color.classname,
                  });
                }}
              >
                {contextData!.localTheme.divider === color.classname && (
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
