import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import useCrypto from "../hooks/useCrypto";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import Crypto_Search from "../components/search-components/Crypto_Search";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";
import CryptoTreeChart from "../components/crypto-component/CryptoTreeChart";
import { useDispatch } from "react-redux";
import {
  setCryptoPageOffSet,
  setCurrentCryptoPage,
} from "../features/crypto_slice/crypto_slice";
import CryptoPageIntro from "../components/crypto-component/CryptoPageIntro";
import CryptoSecondIntro from "../components/crypto-component/CryptoSecondIntro";
import LearnCrypto from "../components/crypto-component/LearnCrypto";
import CryptoBlogs from "../components/crypto-component/CryptoBlogs";
import CryptoStackTable from "../components/crypto-stack-table/CryptoStackTable";

const Crypto_page = () => {
  const dispatch = useDispatch();
  const { cryptoSelector } = useCrypto();
  const [DisplayType, setDisplayType] = useState<"line" | "tree" | "stack">(
    "line"
  );

  const cryptoData = useMemo(() => {
    return cryptoSelector.coinlist
      .slice(
        cryptoSelector.pagination.offset,
        cryptoSelector.pagination.offset + 10
      )
      .filter(
        (c) =>
          c.id
            .toLowerCase()
            .includes(cryptoSelector.cryptoSearch.toLowerCase()) ||
          c.symbol
            .toLowerCase()
            .includes(cryptoSelector.cryptoSearch.toLowerCase()) ||
          c.name
            .toLowerCase()
            .includes(cryptoSelector.cryptoSearch.toLowerCase())
      );
  }, [
    cryptoSelector.cryptoSearch,
    cryptoSelector.pagination.offset,
    cryptoSelector.coinlist,
  ]);

  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="crypto-main-page"
    >
      <CryptoPageIntro />
      <CryptoSecondIntro />
      <LearnCrypto />
      <Crypto_Search
        DisplayType={DisplayType}
        setDisplayType={setDisplayType}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, type: "tween" }}
        viewport={{ once: true }}
        className="crypto-table-container"
      >
        <AnimatePresence>
          {DisplayType === "line" && (
            <CryptoTableRow crypto_data={cryptoData} header={false} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {DisplayType === "tree" && (
            <CryptoTreeChart width={"100%"} height={800} data={cryptoData} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {DisplayType === "stack" && (
            <CryptoStackTable cryptoData={cryptoData} />
          )}
        </AnimatePresence>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "tween" }}
        className="pagination-container"
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={(e) => {
            const newOffset =
              (e.selected * 10) % cryptoSelector.coinlist.length;
            dispatch(setCurrentCryptoPage(newOffset / 10 + 1));
            dispatch(setCryptoPageOffSet(newOffset));
            window.scroll({ top: 850 });
          }}
          forcePage={
            cryptoSelector.pagination.current_page === 1
              ? cryptoSelector.pagination.current_page + 1
              : cryptoSelector.pagination.current_page - 1
          }
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={cryptoSelector.pagination.total_pages}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="crypto-pagination"
          pageLinkClassName="crypto-pagination-links"
          activeLinkClassName="activeClassName"
          onPageActive={() => {
            window.scroll({ top: 850 });
            toast.warn("you are already at this page");
          }}
          nextClassName="crypto-pagination-nav"
          previousClassName="crypto-pagination-nav"
          breakClassName="crypto-pagination-breaks"
        />
      </motion.div>
      <CryptoBlogs />
    </motion.div>
  );
};

export default Crypto_page;
