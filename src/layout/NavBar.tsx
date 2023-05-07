import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContextFunction } from "../context/AppContext";

const NavBar = ({ showSideBar, setShowSideBar }) => {
  const contextData = useContextFunction();

  return (
    <div
      className="navBar-container"
      style={{
        background: contextData!.scrollH ? "rgba(30 64 175/0.4)" : "rgba(30 64 175/0.2)",
      }}
    >
      <button
        style={{
          scale: contextData!.scrollH ? "1" : "1.2",
          transition: "scale .13s linear",
          display: "flex",
        }}
        className="main-navbar-btn"
        onClick={() => setShowSideBar(true)}
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
      <Link
        to="/"
        className="navbar-logo"
        style={{
          scale: contextData!.scrollH ? "1.2" : "0",
          transition: "scale .13s linear",
        }}
      >
        <span>W</span>ealth<span>W</span>ave
      </Link>
      <div>
        <button
          className="main-navbar-btn"
          style={{
            scale: contextData!.scrollH ? "1" : "1.2",
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
            scale: contextData!.scrollH ? "0" : "1.2",
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
            scale: contextData!.scrollH ? "0" : "1.2",
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
            scale: contextData!.scrollH ? "0" : "1.2",
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
