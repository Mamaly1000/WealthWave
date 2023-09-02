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
import homepageIcon from "./../assets/sideBar_Icons/home.svg";
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
import { darkdashboardIcon } from "../assets/dashboard/dashboardIcons";
import {
  blogGif,
  blogVector,
  cryptoGif,
  cryptoVector,
  dashboardVector,
  newsGif,
  newsVector,
  nftGif,
  nftVector,
  profileGif,
} from "../assets/main-slider/main_slider_pics";
import {
  emailIcon,
  githubIcon,
  whatsappIcon,
} from "../assets/social-medias/social";
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
export const SideBar_links: {
  title: string;
  icon: string;
  route: string;
}[] = [
  { title: "Home Page", icon: homepageIcon, route: "/" },
  {
    title: "dashboard",
    icon: darkdashboardIcon,
    route: "/dashboard",
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
export const sliderData: {
  title: string;
  pathName: string;
  bg_color: string;
  bg_pic: string;
  btn_text: string;
  btn_pic: string;
}[] = [
  {
    title:
      "Track the latest prices and trends of your favorite cryptocurrencies with our real-time data and charts with just one click !",
    pathName: "/crypto",
    btn_text: "Explore Now",
    bg_color: "   linear-gradient(to right, #6a11cb 0%, #2575fc 100%) ",
    bg_pic: cryptoVector,
    btn_pic: cryptoGif,
  },
  {
    title:
      "Discover the world of non-fungible tokens (NFTs) and explore unique digital assets that you won't find anywhere else.",
    pathName: "/nfts",
    bg_color: "  linear-gradient(to top, #09203f 0%, #537895 100%) ",
    btn_text: "Browse Now",
    bg_pic: nftVector,
    btn_pic: nftGif,
  },
  {
    title:
      "share your thoughts and insights on the world of cryptocurrency and news by contributing to our blog section .",
    pathName: "/myBlogs",
    btn_text: "Read More",
    bg_color:
      " linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%) ",
    bg_pic: blogVector,
    btn_pic: blogGif,
  },
  {
    title:
      "Stay informed with the latest news and updates in the crypto and NFT space, curated by our team of experts.",
    pathName: "/news",
    btn_text: "Learn More",
    bg_color:
      "  linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%) ",
    bg_pic: newsVector,
    btn_pic: newsGif,
  },
  {
    title:
      "Create your own personalized profile and keep track of your favorite crypto assets, NFT collections, and more.",
    pathName: "/dashboard",
    btn_text: "Sign Up Now",
    bg_color: " linear-gradient(to right, #434343 0%, black 100%) ",
    bg_pic: dashboardVector,
    btn_pic: profileGif,
  },
];
export const candleseries = [
  {
    name: "Apple Stock",
    data: [
      {
        x: new Date(1538778600000),
        y: [6629.81, 6650.5, 6623.04, 6633.33],
      },
      {
        x: new Date(1538780400000),
        y: [6632.01, 6643.59, 6620, 6630.11],
      },
      {
        x: new Date(1538782200000),
        y: [6630.71, 6648.95, 6623.34, 6635.65],
      },
      {
        x: new Date(1538784000000),
        y: [6635.65, 6651, 6629.67, 6638.24],
      },
      {
        x: new Date(1538785800000),
        y: [6638.24, 6640, 6620, 6624.47],
      },
      {
        x: new Date(1538787600000),
        y: [6624.53, 6636.03, 6621.68, 6624.31],
      },
      {
        x: new Date(1538789400000),
        y: [6624.61, 6632.2, 6617, 6626.02],
      },
      {
        x: new Date(1538791200000),
        y: [6627, 6627.62, 6584.22, 6603.02],
      },
      {
        x: new Date(1538793000000),
        y: [6605, 6608.03, 6598.95, 6604.01],
      },
      {
        x: new Date(1538794800000),
        y: [6604.5, 6614.4, 6602.26, 6608.02],
      },
      {
        x: new Date(1538796600000),
        y: [6608.02, 6610.68, 6601.99, 6608.91],
      },
      {
        x: new Date(1538798400000),
        y: [6608.91, 6618.99, 6608.01, 6612],
      },
      {
        x: new Date(1538800200000),
        y: [6612, 6615.13, 6605.09, 6612],
      },
      {
        x: new Date(1538802000000),
        y: [6612, 6624.12, 6608.43, 6622.95],
      },
      {
        x: new Date(1538803800000),
        y: [6623.91, 6623.91, 6615, 6615.67],
      },
      {
        x: new Date(1538805600000),
        y: [6618.69, 6618.74, 6610, 6610.4],
      },
      {
        x: new Date(1538807400000),
        y: [6611, 6622.78, 6610.4, 6614.9],
      },
      {
        x: new Date(1538809200000),
        y: [6614.9, 6626.2, 6613.33, 6623.45],
      },
      {
        x: new Date(1538811000000),
        y: [6623.48, 6627, 6618.38, 6620.35],
      },
      {
        x: new Date(1538812800000),
        y: [6619.43, 6620.35, 6610.05, 6615.53],
      },
      {
        x: new Date(1538814600000),
        y: [6615.53, 6617.93, 6610, 6615.19],
      },
      {
        x: new Date(1538816400000),
        y: [6615.19, 6621.6, 6608.2, 6620],
      },
      {
        x: new Date(1538818200000),
        y: [6619.54, 6625.17, 6614.15, 6620],
      },
      {
        x: new Date(1538820000000),
        y: [6620.33, 6634.15, 6617.24, 6624.61],
      },
      {
        x: new Date(1538821800000),
        y: [6625.95, 6626, 6611.66, 6617.58],
      },
      {
        x: new Date(1538823600000),
        y: [6619, 6625.97, 6595.27, 6598.86],
      },
      {
        x: new Date(1538825400000),
        y: [6598.86, 6598.88, 6570, 6587.16],
      },
      {
        x: new Date(1538827200000),
        y: [6588.86, 6600, 6580, 6593.4],
      },
      {
        x: new Date(1538829000000),
        y: [6593.99, 6598.89, 6585, 6587.81],
      },
      {
        x: new Date(1538830800000),
        y: [6587.81, 6592.73, 6567.14, 6578],
      },
      {
        x: new Date(1538832600000),
        y: [6578.35, 6581.72, 6567.39, 6579],
      },
      {
        x: new Date(1538834400000),
        y: [6579.38, 6580.92, 6566.77, 6575.96],
      },
      {
        x: new Date(1538836200000),
        y: [6575.96, 6589, 6571.77, 6588.92],
      },
      {
        x: new Date(1538838000000),
        y: [6588.92, 6594, 6577.55, 6589.22],
      },
      {
        x: new Date(1538839800000),
        y: [6589.3, 6598.89, 6589.1, 6596.08],
      },
      {
        x: new Date(1538841600000),
        y: [6597.5, 6600, 6588.39, 6596.25],
      },
      {
        x: new Date(1538843400000),
        y: [6598.03, 6600, 6588.73, 6595.97],
      },
      {
        x: new Date(1538845200000),
        y: [6595.97, 6602.01, 6588.17, 6602],
      },
      {
        x: new Date(1538847000000),
        y: [6602, 6607, 6596.51, 6599.95],
      },
      {
        x: new Date(1538848800000),
        y: [6600.63, 6601.21, 6590.39, 6591.02],
      },
      {
        x: new Date(1538850600000),
        y: [6591.02, 6603.08, 6591, 6591],
      },
      {
        x: new Date(1538852400000),
        y: [6591, 6601.32, 6585, 6592],
      },
      {
        x: new Date(1538854200000),
        y: [6593.13, 6596.01, 6590, 6593.34],
      },
      {
        x: new Date(1538856000000),
        y: [6593.34, 6604.76, 6582.63, 6593.86],
      },
      {
        x: new Date(1538857800000),
        y: [6593.86, 6604.28, 6586.57, 6600.01],
      },
      {
        x: new Date(1538859600000),
        y: [6601.81, 6603.21, 6592.78, 6596.25],
      },
      {
        x: new Date(1538861400000),
        y: [6596.25, 6604.2, 6590, 6602.99],
      },
      {
        x: new Date(1538863200000),
        y: [6602.99, 6606, 6584.99, 6587.81],
      },
      {
        x: new Date(1538865000000),
        y: [6587.81, 6595, 6583.27, 6591.96],
      },
      {
        x: new Date(1538866800000),
        y: [6591.97, 6596.07, 6585, 6588.39],
      },
      {
        x: new Date(1538868600000),
        y: [6587.6, 6598.21, 6587.6, 6594.27],
      },
    ],
  },
];
export const contacts_links: { route: string; icon: string }[] = [
  {
    route: "https://github.com/Mamaly1000",
    icon: githubIcon,
  },
  {
    route: "https://wa.me/989214508479",
    icon: whatsappIcon,
  },
  {
    route: "mailto:mamadmehdi.aziz.10@gmail.com",
    icon: emailIcon,
  },
  {
    route: "https://t.me/Mamaly1000",
    icon: telegramIcon,
  },
  {
    route: "https://twitter.com/mamaly100",
    icon: twitterIcon,
  },
];
