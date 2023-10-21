import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Budget_child_container from "./Budget_child_container";
import Section_Header from "./Section_Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { CSSProperties } from "styled-components";
import { selecttheme } from "../../../features/theme_slice/theme_slice";
import {
  selectUserActions,
  setAccounts,
} from "../../../features/user-actions-slice/actions_slice";
import { Autoplay, Pagination } from "swiper";
import AccountItem from "./AccountItem";

const Budget_Accounts = () => {
  const [activeACC, setActiveACC] = useState("");
  const dispatch = useDispatch();
  const theme = useSelector(selecttheme);
  const UserActions = useSelector(selectUserActions);
  return (
    <Budget_child_container classname="mid-container accounts-container">
      <Section_Header text="your Accounts" />
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        spaceBetween={5}
        modules={[Autoplay, Pagination]}
        className="accounts-slider"
        style={
          {
            "--swiper-pagination-bullet-inactive-color": "rgba(0 0 0/.9)",
            "--swiper-pagination-color": theme.btnColor,
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
          } as CSSProperties
        }
        pagination={{ enabled: true }}
      >
        {UserActions.budget.accounts.map((account, index) => {
          return (
            <SwiperSlide key={account.account_number}>
              {({ isActive }) => (
                <AccountItem
                  setActiveACC={setActiveACC}
                  isActive={isActive}
                  acc={account}
                  i={index}
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="actions-container">
        <button
          onClick={() =>
            dispatch(setAccounts({ type: "delete", account_number: activeACC }))
          }
          className="delete-acc-btn"
        >
          delete account
        </button>
      </div>
    </Budget_child_container>
  );
};

export default Budget_Accounts;
