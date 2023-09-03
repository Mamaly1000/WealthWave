import { DraggableDirection, ToastPosition, toast } from "react-toastify";
import { useContextFunction } from "../../context/AppContext";
import Divider from "../ntf-components/Divider";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";

export type toastTypes =
  | "autoClose"
  | "closeOnClick"
  | "draggable"
  | "draggableDirection"
  | "draggablePercent"
  | "hideProgressBar"
  | "newestOnTop"
  | "pauseOnFocusLoss"
  | "pauseOnHover"
  | "rtl"
  | "theme"
  | "position";
const ToastTheme = () => {
  const contextData = useContextFunction();
  const themeSelector = useSelector(selecttheme);
  const data: { title: toastTypes; value: any[] }[] = [
    {
      title: "closeOnClick",
      value: [true, false],
    },
    {
      title: "draggable",
      value: [true, false],
    },
    {
      title: "draggableDirection",
      value: ["x", "y"],
    },
    {
      title: "draggablePercent",
      value: [10, 20, 30, 40, 50, 100],
    },
    {
      title: "hideProgressBar",
      value: [true, false],
    },
    {
      title: "newestOnTop",
      value: [true, false],
    },
    {
      title: "pauseOnFocusLoss",
      value: [true, false],
    },
    {
      title: "pauseOnHover",
      value: [true, false],
    },
    {
      title: "rtl",
      value: [true, false],
    },
    { title: "theme", value: ["light", "dark", "colored"] },
    {
      title: "position",
      value: [
        "top-right",
        "top-center",
        "top-left",
        "bottom-right",
        "bottom-center",
        "bottom-left",
      ],
    },
  ];
  const toastHandler = (type: toastTypes, value: string | boolean | number) => {
    switch (type) {
      case "autoClose":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          autoClose: value as number,
        });
        break;
      case "closeOnClick":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          closeOnClick: value as boolean,
        });
        break;
      case "draggable":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          draggable: value as boolean,
        });
        break;
      case "draggableDirection":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          draggableDirection: value as DraggableDirection,
        });
        break;
      case "draggablePercent":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          draggablePercent: value as number,
        });
        break;
      case "hideProgressBar":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          hideProgressBar: value as boolean,
        });
        break;
      case "newestOnTop":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          newestOnTop: value as boolean,
        });
        break;
      case "pauseOnFocusLoss":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          pauseOnFocusLoss: value as boolean,
        });
        break;
      case "pauseOnHover":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          pauseOnHover: value as boolean,
        });
        break;
      case "position":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          position: value as ToastPosition,
        });
        break;
      case "rtl":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          rtl: value as boolean,
        });
        break;
      case "theme":
        contextData!.setLocalToast({
          ...contextData!.localToast,
          theme: value as "light" | "dark" | "colored",
        });
        break;
      default:
        contextData!.setLocalToast(contextData!.localToast);
    }
  };
  const getToastValue = (type: toastTypes, value: unknown): boolean => {
    let result: boolean = false;
    switch (type) {
      case "autoClose":
        result =
          contextData!.localToast.autoClose === (value as number)
            ? true
            : false;
        break;
      case "closeOnClick":
        result =
          contextData!.localToast.closeOnClick === (value as boolean)
            ? true
            : false;
        break;
      case "draggable":
        result =
          contextData!.localToast.draggable === (value as boolean)
            ? true
            : false;
        break;
      case "draggableDirection":
        result =
          contextData!.localToast.draggableDirection ===
          (value as DraggableDirection)
            ? true
            : false;
        break;
      case "draggablePercent":
        result =
          contextData!.localToast.draggablePercent === (value as number)
            ? true
            : false;
        break;
      case "hideProgressBar":
        result =
          contextData!.localToast.hideProgressBar === (value as boolean)
            ? true
            : false;
        break;
      case "newestOnTop":
        result =
          contextData!.localToast.newestOnTop === (value as boolean)
            ? true
            : false;
        break;
      case "pauseOnFocusLoss":
        result =
          contextData!.localToast.pauseOnFocusLoss === (value as boolean)
            ? true
            : false;
        break;
      case "pauseOnHover":
        result =
          contextData!.localToast.pauseOnHover === (value as boolean)
            ? true
            : false;
        break;
      case "position":
        result =
          contextData!.localToast.position === (value as ToastPosition)
            ? true
            : false;
        break;
      case "rtl":
        result =
          contextData!.localToast.rtl === (value as boolean) ? true : false;
        break;
      case "theme":
        result =
          contextData!.localToast.theme ===
          (value as "light" | "dark" | "colored")
            ? true
            : false;
        break;
    }
    return result;
  };
  return (
    <div className="toast-theme-container">
      <span className="header">
        <Divider height={40} width={3} /> toast theme section
      </span>
      {data.map((d, index) => {
        return (
          <div className="item" key={index}>
            <span className="title">{d.title}</span>
            <div className="options-container">
              {d.value.map((v, index) => {
                return (
                  <motion.button
                    animate={{
                      background: !getToastValue(d.title, v)
                        ? themeSelector.hoverColor
                        : themeSelector.btnColor,
                    }}
                    onClick={() => {
                      toastHandler(d.title, v);
                      toast.success("toast updates successfuly !");
                    }}
                    className="option"
                    key={index}
                  >
                    {v.toString()}
                  </motion.button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ToastTheme;
