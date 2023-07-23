import { motion } from "framer-motion";
import { tagsMotion } from "../../motions/viewCryptoMotions";
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
                >
                  {d as string | number}
                </motion.span>
              );
            })
          : ""}
        {typeof row.data === "object" && row.name === "community"
          ? row.data.map((d, index) => {
              return (
                <motion.span
                  variants={tagsMotion(index + 40, 0.5)}
                  whileInView="visible"
                  initial="hidden"
                  key={index}
                >
                  <img src={d.pic} /> {d.name}
                </motion.span>
              );
            })
          : ""}
        {typeof row.data === "object" &&
        row.name === "sentiment votes percentage"
          ? row.data.map((d, index) => {
              return (
                <motion.span
                  variants={tagsMotion(index + 40, 0.5)}
                  whileInView="visible"
                  initial="hidden"
                  key={index}
                >
                  {d.name} : {d.data}
                </motion.span>
              );
            })
          : ""}
        {typeof row.data === "object" && row.name === "scores"
          ? row.data.map((d, index) => {
              return (
                <motion.span
                  variants={tagsMotion(index + 40, 0.5)}
                  whileInView="visible"
                  initial="hidden"
                  key={index}
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
