import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import useCrypto from "../hooks/useCrypto";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { toast } from "react-toastify";
import Crypto_Search from "../components/search-components/Crypto_Search";
import TopCryptoCard from "../components/crypto-component/TopCryptoCard";
import CryptoTableRow from "../components/cryto-table/CryptoTableRow";
import CryptoTreeChart from "../components/crypto-component/CryptoTreeChart";
import { useDispatch } from "react-redux";
import {
  setCryptoPageOffSet,
  setCurrentCryptoPage,
} from "../features/crypto_slice/crypto_slice";
import TrendCryptoComponent from "../components/cryto-table/TrendCryptoComponent";
const Crypto_page = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { cryptoSelector } = useCrypto();
  const [DisplayType, setDisplayType] = useState<"line" | "tree">("line");

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
  }, [cryptoSelector.cryptoSearch, cryptoSelector.pagination.offset]);

  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="crypto-main-page"
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 3, type: "tween" }}
        className="page-header"
      >
        Cryptocurrency Prices by Market Cap
      </motion.h1>
      <TrendCryptoComponent />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3, duration: 0.5, type: "tween" }}
        className="component-title"
      >
        Top Cryptocurrencies
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          type: "tween",
        }}
        viewport={{ once: true }}
        className="top-crypto"
      >
        <Swiper
          className="top-crypto"
          spaceBetween={10}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
        >
          {cryptoSelector.coinlist.slice(0, 10).map((coin, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => nav(`/crypto/${coin.id}`)}
              >
                <TopCryptoCard coin={coin} index={index} key={index} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
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
    </motion.div>
  );
};

export default Crypto_page;
