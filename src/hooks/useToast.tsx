import { DraggableDirection, ToastPosition } from "react-toastify";
import useLocalStorage from "./useLocalStorage";

export interface ToastInterface {
  position: ToastPosition;
  autoClose: number;
  hideProgressBar: boolean;
  newestOnTop: boolean;
  closeOnClick: boolean;
  rtl: boolean;
  pauseOnFocusLoss: boolean;
  draggable: boolean;
  pauseOnHover: boolean;
  draggableDirection: DraggableDirection;
  draggablePercent: number;
  theme: "light" | "dark" | "colored";
}

const useToast = () => {
  const [localToast, setLocalToast] = useLocalStorage<ToastInterface>(
    "wealthwave-toast",
    {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true,
      draggableDirection: "x",
      draggablePercent: 20,
      theme: "dark",
    }
  );
  return { localToast, setLocalToast };
};

export default useToast;
