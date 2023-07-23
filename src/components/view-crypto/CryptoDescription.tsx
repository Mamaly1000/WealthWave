import { useState } from "react";
import { motion } from "framer-motion";
import useCrypto from "../../hooks/useCrypto";
import moment from "moment";

const CryptoDescription = () => {
  const { cryptoSelector } = useCrypto();
  const selectedCoin = cryptoSelector.selectedCoin;
  const [displayChild, setDisplayChild] = useState<boolean>(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.4, type: "tween" }}
      exit={{
        opacity: 0,
        x: -50,
        transition: {
          duration: 0.3,
        },
      }}
      className="selected-coin-description"
      onAnimationComplete={() => {
        setDisplayChild(true);
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, type: "tween" }}
        className="description-top-section"
      >
        <motion.img src={selectedCoin.image.large} />
        <motion.div className="description-top-section-context">
          <motion.h2 className="description-name">
            {selectedCoin.name} <span>{selectedCoin.symbol}</span>
          </motion.h2>
          <motion.div className="description-tags">
            <motion.span>
              last updated :{" "}
              {selectedCoin.last_updated
                ? moment(selectedCoin.last_updated).format("YYYY/MM/DD-HH:MM")
                : "N/A"}
            </motion.span>
            <motion.span>
              contract address :{" "}
              {selectedCoin!.contract_address
                ? selectedCoin!.contract_address
                : "N/A"}
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
      {displayChild && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7, type: "tween" }}
          className="description-bottom-section"
        >
          <p
            dangerouslySetInnerHTML={{ __html: selectedCoin.description.en }}
          ></p>
          {selectedCoin.additional_notices.length > 0 && (
            <>
              <h4>Additional Notices</h4>
              {selectedCoin.additional_notices.map((p, index) => {
                return (
                  <p
                    dangerouslySetInnerHTML={{
                      __html: p,
                    }}
                    key={index}
                  ></p>
                );
              })}
            </>
          )}
          {selectedCoin.public_notice !== null && (
            <>
              <h4>Public Notices</h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: selectedCoin.public_notice,
                }}
              ></p>
            </>
          )}
        </motion.div>
      )}
    </motion.div>
  );
};

export default CryptoDescription;
