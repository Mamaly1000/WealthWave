import { motion } from "framer-motion";
import { tagsMotion } from "../../motions/viewCryptoMotions";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
const InfoRow = ({
  row,
  index,
}: {
  index: number;
  row: {
    name: string;
    data: string | number | Array<object | string | number>;
  };
}) => {
  const themeSelector = useSelector(selecttheme);
  return (
    <div key={index} className="info-table-row">
      <motion.span className="row-title">{row.name}</motion.span>
      <div className="row-data">
        {typeof row.data !== "object" &&
          [
            "categories",
            "community",
            "sentiment votes percentage",
            "scores",
          ].includes(row.name) === false && (
            <motion.span
              variants={tagsMotion(index + 40, 0.5)}
              whileInView="visible"
              initial="hidden"
              style={{
                background: themeSelector.btnColor,
                color: themeSelector.headerColor,
              }}
            >
              {row.data}
            </motion.span>
          )}
        {typeof row.data === "object" && row.name === "categories"
          ? row.data.map((d, index) => {
              return (
                <motion.span
                  variants={tagsMotion(index + 40, 0.5)}
                  whileInView="visible"
                  initial="hidden"
                  key={index}
                  style={{
                    background: themeSelector.btnColor,
                    color: themeSelector.headerColor,
                  }}
                >
                  {d as string | number}
                </motion.span>
              );
            })
          : ""}
        {typeof row.data === "object" && row.name === "community"
          ? (
              row.data as {
                name: string;
                pic: string;
              }[]
            ).map((d, index) => {
              return (
                <motion.span
                  variants={tagsMotion(index + 40, 0.5)}
                  whileInView="visible"
                  initial="hidden"
                  key={index}
                  style={{
                    background: themeSelector.btnColor,
                    color: themeSelector.headerColor,
                  }}
                >
                  <img src={d?.pic} /> {d.name}
                </motion.span>
              );
            })
          : ""}
        {typeof row.data === "object" &&
        row.name === "sentiment votes percentage"
          ? (row.data as { name: string; data: number }[]).map((d, index) => {
              return (
                <motion.span
                  variants={tagsMotion(index + 40, 0.5)}
                  whileInView="visible"
                  initial="hidden"
                  key={index}
                  style={{
                    background: themeSelector.btnColor,
                    color: themeSelector.headerColor,
                  }}
                >
                  {d.name} : {d.data}
                </motion.span>
              );
            })
          : " "}
        {typeof row.data === "object" && row.name === "scores"
          ? (row.data as { name: string; data: number }[]).map((d, index) => {
              return (
                <motion.span
                  variants={tagsMotion(index + 40, 0.5)}
                  whileInView="visible"
                  initial="hidden"
                  key={index}
                  style={{
                    background: themeSelector.btnColor,
                    color: themeSelector.headerColor,
                  }}
                >
                  {d.name} : {d.data}
                </motion.span>
              );
            })
          : ""}
      </div>
    </div>
  );
};

export default InfoRow;
