import { useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import useCrypto from "../hooks/useCrypto";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import Crypto_Search from "../components/search-components/Crypto_Search";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";
import CryptoTreeChart from "../components/crypto-component/CryptoTreeChart";
import { useDispatch } from "react-redux";
import { setCryptoPagination } from "../features/crypto_slice/crypto_slice";
// import CryptoPageIntro from "../components/crypto-component/CryptoPageIntro";
// import CryptoSecondIntro from "../components/crypto-component/CryptoSecondIntro";
// import LearnCrypto from "../components/crypto-component/LearnCrypto";
import CryptoBlogs from "../components/crypto-component/CryptoBlogs";
import CryptoStackTable from "../components/crypto-stack-table/CryptoStackTable";

const Crypto_page = () => {
  const dispatch = useDispatch();
  const { cryptoSelector, LocalCryptoList } = useCrypto();

  const cryptoData = useMemo(() => {
    return cryptoSelector.coinlist.filter(
      (c) =>
        c.id
          .toLowerCase()
          .includes(cryptoSelector.cryptoSearch.toLowerCase()) ||
        c.symbol
          .toLowerCase()
          .includes(cryptoSelector.cryptoSearch.toLowerCase()) ||
        c.name.toLowerCase().includes(cryptoSelector.cryptoSearch.toLowerCase())
    );
  }, [
    cryptoSelector.cryptoSearch,
    cryptoSelector.pagination,
    cryptoSelector.coinlist,
    LocalCryptoList,
  ]);

  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="crypto-main-page"
    >
      {/* <CryptoPageIntro /> */}
      {/* <CryptoSecondIntro /> */}
      {/* <LearnCrypto /> */}
      <Crypto_Search />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, type: "tween" }}
        viewport={{ once: true }}
        className="crypto-table-container"
      >
        <AnimatePresence>
          {cryptoSelector.displayType === "line" && (
            <CryptoTableRow
              crypto_data={cryptoData.slice(
                (cryptoSelector.pagination.current_page - 1) *
                  cryptoSelector.pagination.offset,
                cryptoSelector.pagination.offset *
                  cryptoSelector.pagination.current_page
              )}
              header={false}
            />
          )}
        </AnimatePresence>
        {/* <AnimatePresence>
          {cryptoSelector.displayType === "tree" && (
            <CryptoTreeChart
              width={"100%"}
              height={800}
              data={cryptoData.slice(
                (cryptoSelector.pagination.current_page - 1) *
                  cryptoSelector.pagination.offset,
                cryptoSelector.pagination.offset *
                  cryptoSelector.pagination.current_page
              )}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {cryptoSelector.displayType === "stack" && (
            <CryptoStackTable
              cryptoData={cryptoData.slice(
                (cryptoSelector.pagination.current_page - 1) *
                  cryptoSelector.pagination.offset,
                cryptoSelector.pagination.offset *
                  cryptoSelector.pagination.current_page
              )}
            />
          )}
        </AnimatePresence> */}
      </motion.div>
      {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "tween" }}
        className="pagination-container"
        viewport={{ once: true }}
      >
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={(e) => {
            dispatch(
              setCryptoPagination({
                current_page: e.selected + 1,
                offset: cryptoSelector.pagination.offset,
                total_pages: Math.ceil(
                  cryptoData.length / cryptoSelector.pagination.offset
                ),
              } as typeof cryptoSelector.pagination)
            );
            console.log(cryptoData);
          }}
          pageRangeDisplayed={1}
          marginPagesDisplayed={1}
          pageCount={Math.ceil(
            cryptoData.length / cryptoSelector.pagination.offset
          )}
          previousLabel="Previous"
          renderOnZeroPageCount={null}
          containerClassName="crypto-pagination"
          pageLinkClassName="crypto-pagination-links"
          activeLinkClassName="activeClassName"
          onPageActive={() => {
            window.scroll({ top: 1000 });
            toast.warn("you are already at this page");
          }}
          nextClassName="crypto-pagination-nav"
          previousClassName="crypto-pagination-nav"
          breakClassName="crypto-pagination-breaks"
        />
      </motion.div> */}
      {/* <CryptoBlogs /> */}
    </motion.div>
  );
};

export default Crypto_page;
