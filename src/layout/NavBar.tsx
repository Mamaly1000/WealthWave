import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [screenW, setScreenW] = useState<boolean>(
    window.innerWidth > 450 ? true : false
  );
  const [scrollH, setScrollH] = useState<boolean>(
    window.scrollY > 300 ? true : false
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 450) {
        setScreenW(true);
      } else {
        setScreenW(false);
      }
    });
  }, [screenW]);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollH(true);
      } else {
        setScrollH(false);
      }
    });
  }, [scrollH]);

  return (
    <div
      className="navBar-container"
      style={{
        background: scrollH ? "rgba(30 64 175/0.4)" : "rgba(30 64 175/0.2)",
      }}
    >
      <button
        style={{
          scale: scrollH ? "1" : "1.2",
          transition: "scale .13s linear",
          display: "flex",
        }}
        className="main-navbar-btn"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div>
        <button
          className="main-navbar-btn"
          style={{
            scale: scrollH ? "1" : "1.2",
            transition: "scale .13s linear",
            display: "flex",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <button
          className="main-navbar-btn"
          style={{
            scale: scrollH ? "0" : "1.2",
            transition: "scale .13s linear",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
        <button
          style={{
            width: "fit-content",
            paddingInline: 10,
            scale: scrollH ? "0" : "1.2",
            transition: "scale .13s linear",
          }}
          className="main-navbar-btn"
        >
          sign in
        </button>
        <button
          style={{
            width: "fit-content",
            paddingInline: 10,
            color: "rgb(37 99 235)",
            background: "white",
            border: "1px solid rgb(37 99 235)",
            display: "flex",
            scale: scrollH ? "0" : "1.2",
            transition: "scale .13s linear",
          }}
          className="main-navbar-btn"
        >
          sign up
        </button>
      </div>
    </div>
  );
};

export default NavBar;
