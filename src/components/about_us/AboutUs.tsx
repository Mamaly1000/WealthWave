import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination } from "swiper";
import bgImage from "./../../assets/about-us/12322bd8-c76a-4b5a-989f-a562a91c53f7.png";
import { values } from "../../utils/about-us-values";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";
import Divider from "../ntf-components/Divider";
import { CSSProperties } from "react";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { useSelector } from "react-redux";
export default function AboutUs() {
  const themeSelector = useSelector(selecttheme);

  return (
    <motion.div
      variants={componentViewMotion}
      initial="hidden"
      whileInView="view"
      viewport={{ once: true }}
      className="about-us-section"
    >
      <Swiper
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        modules={[Parallax, Pagination]}
        className="mySwiper"
        spaceBetween={100}
        autoHeight={true}
        style={
          {
            "--swiper-pagination-bullet-inactive-color": "rgba(0 0 0/.9)",
            "--swiper-pagination-color": themeSelector.btnColor,
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as CSSProperties
        }
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -40 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="title"
                data-swiper-parallax="-300"
              >
                About{" "}
                <motion.span
                  animate={{ color: themeSelector.btnColor }}
                  className="bold"
                >
                  {" "}
                  W
                </motion.span>
                ealth
                <motion.span
                  animate={{ color: themeSelector.btnColor }}
                  className="bold"
                >
                  {" "}
                  W
                </motion.span>
                ave
              </motion.div>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -40 }}
                className="subtitle"
              >
                Our Story :
              </motion.div>
              <Divider height={5} width={250} />
              <div className="text" data-swiper-parallax="-100">
                <motion.p
                  initial={{ x: -40, opacity: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    x: isActive ? 0 : -40,
                    color: themeSelector.plainTextColor,
                  }}
                  transition={{ duration: 0.5, delay: 0.5, type: "tween" }}
                >
                  Once upon a time, there was a group of friends who were
                  passionate about staying up to date with the latest news,
                  investing in crypto currencies, and collecting NFTs. However,
                  they found it difficult to find a single platform that catered
                  to all their interests. That's when they decided to take
                  matters into their own hands and create a website that would
                  not only provide them with the latest news and updates on
                  crypto and NFTs but also allow them to create their own blogs
                  and connect with like-minded individuals. They worked
                  tirelessly, pouring all their energy and resources into the
                  project, determined to create a platform that would be an
                  all-in-one solution for anyone interested in the world of
                  crypto and NFTs. And finally, after months of hard work, their
                  website was born. Today, their website is a thriving community
                  of crypto enthusiasts, investors, and creators who come
                  together to share their knowledge, insights, and experiences.
                  Whether you're a seasoned investor or just getting started in
                  the world of crypto, this website has something for everyone.
                  So why not join the community today and be a part of this
                  exciting journey?
                </motion.p>
              </div>
            </>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {({ isActive }) => (
            <>
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -40 }}
                transition={{ duration: 0.5, type: "tween" }}
                className="title"
                data-swiper-parallax="-300"
              >
                Values & Unique Selling Proposition
              </motion.div>
              <Divider height={5} width={250} />
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -40 }}
                transition={{ duration: 0.6, delay: 0.3, type: "tween" }}
                className="subtitle"
              >
                We believe in providing accurate, evidence-based information
                that is accessible to everyone. We are committed to creating a
                safe, supportive community where people can share their
                experiences and find the help they need.
              </motion.div>
              <div className="text-card-container" data-swiper-parallax="-100">
                {values.map((v, index) => {
                  return (
                    <motion.div
                      initial={{ y: 40, opacity: 0 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : 40,
                        background: themeSelector.containerColor,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index / 10 + 0.1,
                        type: "tween",
                      }}
                      className="card"
                      key={index}
                      style={{ animationDelay: `${index / 10 + 0.1}` }}
                    >
                      <img src={v.icon} className="card-icon" />
                      <motion.span
                        animate={{ color: themeSelector.headerColor }}
                        className="card-topic"
                      >
                        {v.title}
                      </motion.span>
                      <motion.span
                        animate={{ color: themeSelector.plainTextColor }}
                        className="card-desc"
                      >
                        {" "}
                        {v.description}
                      </motion.span>
                    </motion.div>
                  );
                })}
              </div>
            </>
          )}
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
}
