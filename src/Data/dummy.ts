import profile_Icon from "./../assets/sideBar_Icons/profile.svg";
import crypto_Icon from "./../assets/sideBar_Icons/crypto.svg";
import news_Icon from "./../assets/sideBar_Icons/news.svg";
import blog_Icon from "./../assets/sideBar_Icons/blog.svg";

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
