import { motion } from "framer-motion";
import { removingPageMotion } from "../motions/motions";
import Divider from "../components/ntf-components/Divider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import {
  viewFromDown,
  viewFromLeft,
  viewFromRight,
  viewFromTop,
} from "../motions/viewCryptoMotions";
import TopNFTPost from "../components/ntf-components/TopNFTPost";
import useNFT from "../hooks/useNFT";
import BestSellerNFTPost from "../components/ntf-components/BestSellerNFTPost";
import CountUp from "react-countup";
import { useMemo, useState } from "react";
import { Artists } from "../Data/Artists";
import ArtistComponent from "../components/ntf-components/ArtistComponent";
import NftSearchComponent from "../components/search-components/NftSearchComponent";
import NftListComponent from "../components/ntf-components/NftListComponent";
import NFTPagination from "../components/ntf-components/NFTPagination";
import Header from "../components/header-component/Header";

const Nft_Page = () => {
  const { getNftLst, nftSelector } = useNFT();
  const [displayExploreImage, setDisplayExploreImage] =
    useState<boolean>(false);
  const fetchNfts = getNftLst("get-all-nfts", true, true, true, false, 5000);
  const nftData = useMemo(() => {
    return nftSelector.nft_list
      .slice(nftSelector.pagination.offset, nftSelector.pagination.offset + 10)
      .filter(
        (nft) =>
          nft.id.toLowerCase().includes(nftSelector.nftSearch.toLowerCase()) ||
          nft.name.toLowerCase().includes(nftSelector.nftSearch.toLowerCase())
      );
  }, [nftSelector.nftSearch, nftSelector.pagination.offset, fetchNfts]);
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
            delay: 3,
            repeatType: "mirror",
            repeat: Infinity,
            duration: 5,
            ease: "circInOut",
          }}
          className="intro-context"
        >
          <div className="part">
            <motion.p variants={viewFromTop(3, 0.5)}>
              Discover the world of unique digital assets with our NFT tracker
            </motion.p>

            <Divider width={5} height={30} />
            <motion.h1 variants={viewFromRight(3, 0.5)}>WealthWave</motion.h1>
          </div>
          <div className="part">
            <motion.h1 variants={viewFromLeft(3, 0.5)}>Track nfts</motion.h1>
            <Divider width={5} height={30} />
            <motion.p variants={viewFromDown(3, 0.5)}>
              Experience the power of blockchain technology with our NFT
              platform
            </motion.p>
          </div>
        </motion.section>
        <motion.section className="nft-intro-image">
          <motion.div
            variants={viewFromLeft(3, 0.5)}
            className="image-part-1"
          ></motion.div>
          <motion.div
            variants={viewFromLeft(4, 0.5)}
            className="image-part-2"
          ></motion.div>
          <motion.div
            variants={viewFromLeft(5, 0.5)}
            className="image-part-3"
          ></motion.div>
          <motion.div
            variants={viewFromLeft(6, 0.5)}
            className="image-part-4"
          ></motion.div>
        </motion.section>
      </section>
      <section className="nft-page-content">
        <div className="best-sellers-nft">
          <Header
            btnText="track more coins"
            header={false}
            height={5}
            onclick={() => {}}
            text="Best Sellers NFTs"
            width={250}
          />
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
                nftSelector.nft_list.slice(10, 20).map((nft, index) => {
                  return (
                    <SwiperSlide>
                      <BestSellerNFTPost index={index} nft={nft} key={index} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </motion.div>
        </div>
        <motion.div
          variants={viewFromDown(5, 1)}
          initial="hidden"
          whileInView="visible"
          className="nft-page-topwork-explore"
          onAnimationComplete={() => {
            setDisplayExploreImage(true);
          }}
        >
          {displayExploreImage && (
            <div className="explore-images-container">
              <div className="image-left-section">
                <motion.div
                  variants={viewFromTop(2, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  className="small-card"
                ></motion.div>
                <motion.div
                  className="big-card"
                  variants={viewFromLeft(3, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                ></motion.div>
                <motion.div
                  variants={viewFromTop(3, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  className="small-card last-card"
                ></motion.div>
                <motion.div
                  variants={viewFromDown(3, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  className="medium-card"
                ></motion.div>
              </div>
              <div className="image-right-section">
                <motion.div
                  className="medium-card"
                  variants={viewFromTop(3, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                ></motion.div>
                <motion.div
                  variants={viewFromTop(3, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  className="small-card"
                ></motion.div>
                <motion.div
                  className="big-card"
                  variants={viewFromLeft(3, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                ></motion.div>
                <motion.div
                  variants={viewFromTop(3, 0.5)}
                  initial="hidden"
                  whileInView="visible"
                  className="small-card last-card"
                ></motion.div>
              </div>
            </div>
          )}
          {displayExploreImage && (
            <motion.div
              variants={viewFromDown(3, 0.4)}
              initial="hidden"
              animate="visible"
              className="explre-data-container"
            >
              <div className="explore-top-section">
                <h3>
                  Discover the Beauty and Rarity of Digital Art with Our NFT
                  Tracker
                </h3>
                <p>
                  Digital art is beautiful and rare, and our NFT tracker allows
                  you to discover it fully. With our platform, you can explore a
                  world of unique digital art that is authenticated through
                  blockchain technology.
                </p>
              </div>
              <div className="explre-bottom-section">
                <div className="benefit">
                  <span className="light">Active Artists</span>
                  <span className="bold">
                    <CountUp delay={1} end={100} />K
                  </span>
                  <Divider height={1} width={40} />
                </div>
                <div className="benefit">
                  <span className="light">Collectors</span>
                  <span className="bold">
                    <CountUp delay={1} end={100} />K
                  </span>
                  <Divider height={1} width={40} />
                </div>
                <div className="benefit">
                  <span className="light">Investors</span>
                  <span className="bold">
                    <CountUp delay={1} end={100} />K
                  </span>
                  <Divider height={1} width={40} />
                </div>
                <div className="benefit">
                  <span className="light">Gamers</span>
                  <span className="bold">
                    <CountUp delay={1} end={100} />K
                  </span>
                  <Divider height={1} width={40} />
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
        <div className="top-nft">
          <Header
            btnText="track more coins"
            header={false}
            height={5}
            onclick={() => {}}
            text="Top NFTs"
            width={250}
          />
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
      </section>
      <section className="nft-page-artists">
        <div className="artists-left-container">
          <h2>our top artists</h2>
          <Divider height={1} width={10} />
          <p>
            Elevate your collection with our high-quality and authenticated NFT
            designs. Our talented artists create pieces that are not only
            visually stunning but also backed by the security and transparency
            of blockchain technology.
          </p>
        </div>
        <motion.div
          variants={viewFromDown(1.2, 0.4)}
          initial="hidden"
          whileInView="visible"
          className="artists-right-container"
        >
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={10}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {Artists.map((artist, index) => {
              return (
                <SwiperSlide>
                  <ArtistComponent artist={artist} key={index} index={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </section>
      <NftSearchComponent />
      <NftListComponent data={nftData} />
      <NFTPagination />
    </motion.div>
  );
};

export default Nft_Page;
