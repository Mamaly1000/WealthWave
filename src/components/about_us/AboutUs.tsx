import React, { useRef } from "react";
import { Swiper, SwiperProps, SwiperRef, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay } from "swiper";
import bgImage from "./../../assets/about-us/12322bd8-c76a-4b5a-989f-a562a91c53f7.png";
import { values } from "../../utils/about-us-values";
import { motion } from "framer-motion";
import { componentViewMotion } from "../../motions/motions";
export default function AboutUs() {
  const sliderRef =
    useRef<
      React.FunctionComponent<React.RefAttributes<SwiperRef> & SwiperProps>
    >(null);
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
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Parallax, Pagination]}
        className="mySwiper"
        spaceBetween={100}
        autoHeight={true}
        ref={sliderRef}
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
          <div className="title" data-swiper-parallax="-300">
            About <span className="bold"> W</span>ealth
            <span className="bold"> W</span>ave
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Our Story :
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Once upon a time, there was a group of friends who were passionate
              about staying up to date with the latest news, investing in crypto
              currencies, and collecting NFTs. However, they found it difficult
              to find a single platform that catered to all their interests.
              That's when they decided to take matters into their own hands and
              create a website that would not only provide them with the latest
              news and updates on crypto and NFTs but also allow them to create
              their own blogs and connect with like-minded individuals. They
              worked tirelessly, pouring all their energy and resources into the
              project, determined to create a platform that would be an
              all-in-one solution for anyone interested in the world of crypto
              and NFTs. And finally, after months of hard work, their website
              was born. Today, their website is a thriving community of crypto
              enthusiasts, investors, and creators who come together to share
              their knowledge, insights, and experiences. Whether you're a
              seasoned investor or just getting started in the world of crypto,
              this website has something for everyone. So why not join the
              community today and be a part of this exciting journey?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Values & Unique Selling Proposition
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            We believe in providing accurate, evidence-based information that is
            accessible to everyone. We are committed to creating a safe,
            supportive community where people can share their experiences and
            find the help they need.
          </div>
          <div className="text-card-container" data-swiper-parallax="-100">
            {values.map((v, index) => {
              return (
                <div
                  className="card"
                  key={index}
                  style={{ animationDelay: `${index / 10 + 0.1}` }}
                >
                  <img src={v.icon} className="card-icon" />
                  <span className="card-topic">{v.title}</span>
                  <span className="card-desc"> {v.description}</span>
                </div>
              );
            })}
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Social Media Links
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Follow us on Facebook, Twitter, and Instagram for daily inspiration,
            tips, and resources.
          </div>
          <div className="links-container" data-swiper-parallax="-100">
            {socialLinks.map((link, index) => {
              return (
                <div className="social-link" key={index}>
                  <a href={link.link}>
                    <img src={link.icon} />
                  </a>
                </div>
              );
            })}
          </div>
        </SwiperSlide> */}
      </Swiper>
      <button
        className="next-slide-btn"
        onClick={() => {
          if (sliderRef) {
            sliderRef.current.swiper.slideNext();
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </button>
    </motion.div>
  );
}
