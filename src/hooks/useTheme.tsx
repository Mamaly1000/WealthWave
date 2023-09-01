import useLocalStorage from "./useLocalStorage";
export interface ThemeInterface {
  bgColor: string;
  containerColor: string;
  btnColor: string;
  headerColor: string;
  plainTextColor: string;
}
const useTheme = () => {
  const [localTheme, setLocalTheme] = useLocalStorage<ThemeInterface>(
    "wealthwave-theme",
    {
      bgColor: "linear-gradient(to right, #000428, #004e92)",
      btnColor: "red",
      containerColor: "blue",
      headerColor: "#fff",
      plainTextColor: "#fff",
    }
  );
  return { localTheme, setLocalTheme };
};

export default useTheme;
