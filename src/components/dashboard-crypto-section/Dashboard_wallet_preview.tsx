import React from "react";
import { useSelector } from "react-redux";
import { Autoplay, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { selectCrypto } from "../../features/crypto_slice/crypto_slice";
import { BiPlus } from "react-icons/bi";
import { selectUserActions } from "../../features/user-actions-slice/actions_slice";
const Dashboard_wallet_preview = () => {
  const theme = useSelector(selecttheme);
  const {
    currentCurrency: { symbol },
  } = useSelector(selectCrypto);
  const userActions = useSelector(selectUserActions);
  return (
    <div style={{ color: theme.headerColor }} className="wallet-preview">
      <div className="budget-card">
        <h2>total balance</h2>
        <div className="card">
          <div className="balance">
            <div className="amount">
              {symbol}
              {(24432424).toLocaleString()}
            </div>
            <div className="growth">12%</div>
          </div>
          <button
            style={{
              background: theme.modalColor,
              border: `1px solid ${theme.btnColor}`,
            }}
          >
            <BiPlus />
            add funds
          </button>
        </div>
      </div>
      <div className="wallet-container">
        <h2>your wallets</h2>
        <Swiper
          slidesPerView={"auto"}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            reverseDirection: true,
          }}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          {userActions.cryptoWallet.map((wallet) => {
            return (
              <SwiperSlide
                key={wallet.walletAdd}
                style={{ borderColor: theme.btnColor }}
              >
                <div className="wallet-card">
                  <div className="top-section">
                    <img className="coin-image" src="/images/bitcoin.png" />
                    <span className="coin-name">bitcoin</span>
                  </div>
                  <div
                    style={{
                      background: theme.modalColor,
                      borderColor: theme.btnColor,
                    }}
                    className="bottom-section"
                  >
                    <div className="amount">1.5BTC</div>
                    <div className="growth">
                      <BiPlus />
                      13%
                    </div>
                    <div className="total">
                      {symbol}
                      {(324324).toLocaleString()}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Dashboard_wallet_preview;
