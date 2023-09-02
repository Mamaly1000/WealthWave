import useLocalStorage from "./useLocalStorage";
export interface ThemeInterface {
  bgColor: string;
  containerColor: string;
  btnColor: string;
  headerColor: string;
  plainTextColor: string;
  hoverColor: string;
}
const useTheme = () => {
  const [localTheme, setLocalTheme] = useLocalStorage<ThemeInterface>(
    "wealthwave-theme",
    {
      bgColor: "linear-gradient(to top, #30cfd0 0%, #330867 100%)",
      btnColor: "",
      containerColor: "",
      headerColor: "#fff",
      plainTextColor: "#fff",
      hoverColor: "rgba(0 0 0/.2)",
    }
  );
  return { localTheme, setLocalTheme };
};

export default useTheme;
