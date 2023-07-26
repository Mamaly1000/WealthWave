import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import Divider from "../components/ntf-components/Divider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { viewFromDown, viewFromLeft } from "../motions/viewCryptoMotions";
import TopNFTPost from "../components/ntf-components/TopNFTPost";
import useNFT from "../hooks/useNFT";

const Nft_Page = () => {
  const { getNftLst, nftSelector } = useNFT();
  const fetchNfts = getNftLst("get-all-nfts", true, true, true, false, 5000);
  return (
    <motion.div
      variants={removingPageMotion}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="nfts-page"
    >
      <section className="nft-page-intro">
        <motion.section
          initial={{ opacity: 1, x: 0 }}
          animate={{
            opacity: 1,
            x: [-5, 0, 5],
          }}
          transition={{
            repeatType: "mirror",
            repeat: Infinity,
            duration: 5,
            ease: "circInOut",
          }}
          className="intro-context"
        >
          <div className="part">
            <p>
              Discover the world of unique digital assets with our NFT tracker
            </p>

            <Divider width={5} height={30} />
            <h1>WealthWave</h1>
          </div>
          <div className="part">
            <h1>Track nfts</h1>
            <Divider width={5} height={30} />
            <p>
              Experience the power of blockchain technology with our NFT
              platform
            </p>
          </div>
        </motion.section>
        <motion.section className="nft-intro-image">
          <motion.div className="image-part-1"></motion.div>
          <motion.div className="image-part-2"></motion.div>
          <motion.div className="image-part-3"></motion.div>
          <motion.div className="image-part-4"></motion.div>
        </motion.section>
      </section>
      <div className="nft-page-content">
        <div className="top-nft">
          <motion.h2
            variants={viewFromLeft(1, 0.3)}
            initial="hidden"
            whileInView="visible"
          >
            Top NFTs
          </motion.h2>
          <motion.div
            variants={viewFromDown(1.2, 0.4)}
            initial="hidden"
            whileInView="visible"
            className="swiper-container"
          >
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {!fetchNfts.isLoading &&
                nftSelector.nft_list.slice(0, 10).map((nft, index) => {
                  return (
                    <SwiperSlide>
                      <TopNFTPost index={index} nft={nft} key={index} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </motion.div>
        </div>
      </div>
      <div className="nft-page-explore"> page explore </div>
      <div className="nft-page-artists"> top artists </div>
    </motion.div>
  );
};

export default Nft_Page;
