import ReactPaginate from "react-paginate";
import useNFT from "../../hooks/useNFT";
import { useDispatch } from "react-redux";
import {
  setCurrentNFTPage,
  setNFTPageOffSet,
} from "../../features/nft_slice/nft_slice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const NFTPagination = () => {
  const { nftSelector } = useNFT();
  const dispatch = useDispatch();
  return (
    <motion.div className="nft-list-pagination">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        onPageChange={(e) => {
          const newOffset = (e.selected * 10) % nftSelector.nft_list.length;
          dispatch(setCurrentNFTPage(newOffset / 10 + 1));
          dispatch(setNFTPageOffSet(newOffset));
          window.scroll({ top: 2550 });
        }}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={nftSelector.pagination.total_pages}
        previousLabel="Previous"
        renderOnZeroPageCount={null}
        containerClassName="crypto-pagination"
        pageLinkClassName="crypto-pagination-links"
        activeLinkClassName="activeClassName"
        onPageActive={() => {
          window.scroll({ top: 2550 });
          toast.warn("you are already at this page");
        }}
        nextClassName="crypto-pagination-nav"
        previousClassName="crypto-pagination-nav"
        breakClassName="crypto-pagination-breaks"
      />
    </motion.div>
  );
};

export default NFTPagination;
