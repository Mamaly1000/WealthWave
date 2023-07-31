import profile_Icon from "./../assets/sideBar_Icons/profile.svg";
import crypto_Icon from "./../assets/sideBar_Icons/crypto.svg";
import news_Icon from "./../assets/sideBar_Icons/news.svg";
import blog_Icon from "./../assets/sideBar_Icons/blog.svg";

import redditIcon from "./../assets/social-medias/icons8-reddit.svg";
import facebookIcon from "./../assets/social-medias/icons8-facebook.svg";
import twitterIcon from "./../assets/social-medias/icons8-twitter.svg";
import instagramIcon from "./../assets/social-medias/icons8-instagram.svg";
import pinterestIcon from "./../assets/social-medias/icons8-pinterest.svg";
import telegramIcon from "./../assets/social-medias/icons8-telegram-app.svg";
import linkedInIcon from "./../assets/social-medias/icons8-linkedin.svg";
import { CommentType } from "../types/noteTypes";
import {
  btc_chart_data,
  dogecoin,
  eth_chart_data,
  injective_protocol,
  moon,
  ripple,
  solana_chart_data,
  staked_ether,
  usd_coin,
} from "./charts";
export const Footer_Links = [
  {
    header: "Customer Care",
    links: [
      "Contact Us",
      "FAQs",
      "Returns & Exchanges",
      "Shipping & Handling",
      "Damaged or Defected Items",
      "Cancelling or Changing an Order",
      "Terms of Service",
      "Privacy Policy",
    ],
  },
  {
    header: "Inside WealthWave",
    links: [
      "About Us",
      "GE Magazine",
      "Why Satin",
      "Contact Us",
      "Wholesale",
      "Careers",
    ],
  },
  {
    header: "Top Searches",
    links: [
      "Stockists",
      "Turban",
      "Shipping",
      "Slap",
      "Black",
      "Satin",
      "Sizing",
    ],
  },
  {
    header: "My Account",
    links: ["Sign In/Register", "My Wishlist", "My Cart"],
  },
];
export const SideBar_links = [
  {
    title: "Profile",
    icon: profile_Icon,
    route: "/profile",
  },
  {
    title: "Crypto Currencies",
    icon: crypto_Icon,
    route: "/crypto",
  },
  {
    title: "NFT",
    icon: "https://img.icons8.com/pastel-glyph/64/000000/nft.png",
    route: "/nfts",
  },
  {
    title: "News",
    icon: news_Icon,
    route: "/news",
  },
  {
    title: "Blogs",
    icon: blog_Icon,
    route: "/myBlogs",
  },
];
export const randomUserData = [
  {
    name: "Lila Patel",
    email: "lila.patel@example.com",
  },
  {
    name: "Isaac Gomez",
    email: "isaac.gomez@example.com",
  },
  {
    name: "Samantha Lee",
    email: "samantha.lee@example.com",
  },
  {
    name: "Ethan Brown",
    email: "ethan.brown@example.com",
  },
  {
    name: "Avery Johnson",
    email: "avery.johnson@example.com",
  },
  {
    name: "Madison Davis",
    email: "madison.davis@example.com",
  },
  {
    name: "Elijah Wilson",
    email: "elijah.wilson@example.com",
  },
  {
    name: "Olivia Robinson",
    email: "olivia.robinson@example.com",
  },
  {
    name: "Caleb Wright",
    email: "caleb.wright@example.com",
  },
  {
    name: "Aria Hernandez",
    email: "aria.hernandez@example.com",
  },
  {
    name: "Noah Garcia",
    email: "noah.garcia@example.com",
  },
  {
    name: "Sophia Smith",
    email: "sophia.smith@example.com",
  },
  {
    name: "Mason Anderson",
    email: "mason.anderson@example.com",
  },
  {
    name: "Aaliyah Thomas",
    email: "aaliyah.thomas@example.com",
  },
  {
    name: "Logan Martinez",
    email: "logan.martinez@example.com",
  },
  {
    name: "Emma Brown",
    email: "emma.brown@example.com",
  },
  {
    name: "Jackson Taylor",
    email: "jackson.taylor@example.com",
  },
  {
    name: "Avery Hernandez",
    email: "avery.hernandez@example.com",
  },
  {
    name: "Evelyn Davis",
    email: "evelyn.davis@example.com",
  },
  {
    name: "William Rodriguez",
    email: "william.rodriguez@example.com",
  },
];
export const dummyComments: CommentType[] = [
  {
    name: "John Doe",
    email: "johndoe@email.com",
    comment:
      "This website has been a game changer for me in terms of staying up to date on the latest crypto news and trends. It's user-friendly and informative, making it easy for even a beginner like me to navigate.",
    profilePicUrl: "https://xsgames.co/randomusers/assets/avatars/male/46.jpg",
    date: "2021/02/22 20:21PM",
    liked: 21,
    disliked: 43,
    saved: false,
  },

  {
    name: "Jane Smith",
    email: "janesmith@email.com",
    comment:
      "I love the fact that this website not only provides news and updates on crypto and NFTs, but also allows users to create their own blogs and share their thoughts with the community. It's a great way to connect with like-minded individuals.",
    profilePicUrl:
      "https://media.licdn.com/dms/image/D4E03AQHPA61sNOqeDg/profile-displayphoto-shrink_800_800/0/1683294132906?e=2147483647&v=beta&t=sOHO9_U_zwn50pH8O0Hroo86Z1TnOHq9U3bWvCX3sog",
    date: "2022/12/05 12:30PM",
    liked: 9,
    disliked: 11,
    saved: false,
  },

  {
    name: "Mark Johnson",
    email: "markjohnson@email.com",
    comment:
      "The profile section of this website is a great way to showcase my interests and connect with others who share similar passions. It's easy to use and allows me to personalize my experience on the site.",
    profilePicUrl:
      "https://menlocoa.org/wp-content/uploads/2012/10/Tinyen-RSp.jpg",
    date: "2023/05/13 10:21aM",
    liked: 24,
    disliked: 40,
    saved: false,
  },

  {
    name: "Sara Lee",
    email: "saralee@email.com",
    comment:
      "I appreciate how this website offers a comprehensive look at the world of crypto and NFTs, while also providing a platform for users to engage with each other and share their own experiences. It's a valuable resource for anyone interested in this exciting industry.",
    profilePicUrl:
      "https://media.licdn.com/dms/image/C5603AQFV2EOeBolFsw/profile-displayphoto-shrink_800_800/0/1582151184490?e=2147483647&v=beta&t=FagPODbSgp6j2no8wquLWmNNuiEzXB7LZkOhjR2zCvY",
    date: "2020/07/17 15:13PM",
    liked: 120,
    disliked: 65,
    saved: false,
  },

  {
    name: "David Kim",
    email: "davidkim@email.com",
    comment:
      "The design of this website is sleek and modern, making it a pleasure to navigate. It's clear that a lot of thought went into creating a user-friendly experience, and it shows.",
    profilePicUrl: "https://xsgames.co/randomusers/assets/avatars/male/74.jpg",
    date: "2021/02/22 20:21PM",
    liked: 53,
    disliked: 18,
    saved: false,
  },
  {
    name: "Emily Chen",
    email: "emilychen@email.com",
    comment:
      "I've learned so much about crypto and NFTs since discovering this website. The articles are informative and well-written, and I always come away with a deeper understanding of the industry.",
    profilePicUrl:
      "https://www.herbertsmithfreehills.com/.imaging/mte/hsf-corporate-site-theme/person-profile/dam/feed/contact/laurence-vincent_WEB.jpg/jcr:content/laurence-vincent_WEB.jpg",
    date: "2023/12/12 21:21PM",
    liked: 70,
    disliked: 7,
    saved: false,
  },
];
export const default_charts_data = [
  btc_chart_data,
  solana_chart_data,
  eth_chart_data,
  ripple,
  dogecoin,
  usd_coin,
  injective_protocol,
  staked_ether,
  moon,
];
export const socialMedia = [
  {
    name: "reddit",
    pic: redditIcon,
  },
  {
    name: "facebook",
    pic: facebookIcon,
  },
  {
    name: "twitter",
    pic: twitterIcon,
  },
  {
    name: "instagram",
    pic: instagramIcon,
  },
  {
    name: "pinterest",
    pic: pinterestIcon,
  },
  {
    name: "telegram",
    pic: telegramIcon,
  },
  {
    name: "linkedIn",
    pic: linkedInIcon,
  },
];
