import profile_Icon from "./../assets/sideBar_Icons/profile.svg";
import crypto_Icon from "./../assets/sideBar_Icons/crypto.svg";
import news_Icon from "./../assets/sideBar_Icons/news.svg";
import blog_Icon from "./../assets/sideBar_Icons/blog.svg";
import nftPic1 from "./../assets/nft/62545162b2e07568b0110187_FEATURED_IMAGE-nfts-myths-misconceptions.png";
import nftPic2 from "./../assets/nft/638dfe68d3dcc56e359db13d_1-phoenixes-nft-min.png";
import nftPic3 from "./../assets/nft/Bored_ape_NFT_1631274836067.webp";
import nftPic4 from "./../assets/nft/San-Jose-Feature.jpg";
import nftPic5 from "./../assets/nft/adidas-nft-bored-ape.jpg";
import nftPic7 from "./../assets/nft/bored-ape-nft-232-gID_4.png";
import nftPic8 from "./../assets/nft/d22d363b42bd80403a8a0847e21360116d15edfa.webp";
import nftPic9 from "./../assets/nft/e5fc935b60035305099554810357012a.webp";
import nftPic10 from "./../assets/nft/images.png";
import nftPic11 from "./../assets/nft/monkey-full-of-wounds-in-his-body-nft-art-vector-42614030.jpg";
import nftPic12 from "./../assets/nft/monkey-g412399084_1280.webp";
import nftPic13 from "./../assets/nft/30.jfif";
import nftPic14 from "./../assets/nft/strozzi-nft-db-500.webp";
import nftPic15 from "./../assets/nft/undefined.webp";
import nftPic16 from "./../assets/nft/unnamed-2.webp";
import nftPic17 from "./../assets/nft/23.jfif";
import nftPic18 from "./../assets/nft/24.png";
import nftPic19 from "./../assets/nft/26.jfif";
import nftPic20 from "./../assets/nft/27.webp";
import nftPic21 from "./../assets/nft/28.jpg";
import { CommentType } from "../types/noteTypes";
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
    route: "/nft",
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
export const nftPics = [
  nftPic1,
  nftPic2,
  nftPic3,
  nftPic4,
  nftPic5,
  nftPic7,
  nftPic8,
  nftPic9,
  nftPic10,
  nftPic11,
  nftPic12,
  nftPic13,
  nftPic14,
  nftPic15,
  nftPic16,
  nftPic17,
  nftPic18,
  nftPic19,
  nftPic20,
  nftPic21,
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
