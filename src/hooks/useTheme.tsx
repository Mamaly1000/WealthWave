import useLocalStorage from "./useLocalStorage";
export interface ThemeInterface {
  bgColor: string;
  containerColor: string;
  btnColor: string;
  headerColor: string;
  plainTextColor: string;
  hoverColor: string;
  divider: string;
}
const useTheme = () => {
  const [localTheme, setLocalTheme] = useLocalStorage<ThemeInterface>(
    "wealthwave-theme",
    {
      bgColor: "linear-gradient(to right, #200122, #6f0000)",
      btnColor: "#a79632",
      containerColor: "linear-gradient(to right, #636363, #a2ab58)",
      divider: "divider-2",
      headerColor: "#ffffff",
      hoverColor: "rgba(0 0 0/.2)",
      plainTextColor: "#FFEEF4",
    }
  );
  return { localTheme, setLocalTheme };
};

export default useTheme;
