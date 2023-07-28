import pic1 from "./../assets/avatars/pic-12.jpg";
import pic2 from "./../assets/avatars/pic-3.jpg";
import pic3 from "./../assets/avatars/pic-4.jpg";
import pic4 from "./../assets/avatars/pic-5.jpeg";
import pic5 from "./../assets/avatars/pic-16.jpg";
import pic6 from "./../assets/avatars/pic-7.jpg";
import pic7 from "./../assets/avatars/pic-8.jpg";
import pic8 from "./../assets/avatars/pic-19.jpg";
import pic9 from "./../assets/avatars/pic-10.jpg";
import pic10 from "./../assets/avatars/pic-11.jpg";

import bgPic1 from "../assets/bg-images/pic-1.avif";
import bgPic2 from "../assets/bg-images/pic-2.jpg";
import bgPic3 from "../assets/bg-images/pic-3.jpg";
import bgPic4 from "../assets/bg-images/pic-4.jpg";
import bgPic5 from "../assets/bg-images/pic-5.jpg";
import bgPic6 from "../assets/bg-images/pic-6.jpg";
import bgPic7 from "../assets/bg-images/pic-7.jpg";
import bgPic8 from "../assets/bg-images/pic-8.jpg";
import bgPic9 from "../assets/bg-images/pic-9.jpg";
import bgPic10 from "../assets/bg-images/pic-10.jpg";

export type ArtistType = {
  bgImage: string;
  profilePic: string;
  name: string;
  rate: number;
  description: string;
};

export const Artists: ArtistType[] = [
  {
    bgImage: bgPic1,
    profilePic: pic1,
    name: "Carolyn Jensen",
    rate: 4,
    description:
      "Unlock the potential of digital ownership with my unique and one-of-a-kind NFT designs.",
  },
  {
    bgImage: bgPic2,
    profilePic: pic2,
    name: "Cash Rodriguez",
    rate: 5,
    description:
      "Experience the beauty and rarity of digital art with my exclusive NFT creations.",
  },
  {
    bgImage: bgPic3,
    profilePic: pic3,
    name: "Evelyn Acosta",
    rate: 5,
    description:
      "Join the revolution of blockchain-based ownership with my cutting-edge NFT designs.",
  },
  {
    bgImage: bgPic4,
    profilePic: pic4,
    name: "Jensen West",
    rate: 4.5,
    description:
      "Explore the world of unique digital assets with my comprehensive NFT portfolio.",
  },
  {
    bgImage: bgPic5,
    profilePic: pic5,
    name: "Remi Berg",
    rate: 5,
    description:
      "Elevate your collection with my high-quality and authenticated NFT designs.",
  },
  {
    bgImage: bgPic6,
    profilePic: pic6,
    name: "Cayson Orr",
    rate: 4,
    description:
      "Discover the power of blockchain technology with my secure and transparent NFT creations.",
  },
  {
    bgImage: bgPic7,
    profilePic: pic7,
    name: "Alaiya Spears",
    rate: 4.5,
    description:
      "Track, trade, and own rare digital assets with my innovative NFT designs.",
  },
  {
    bgImage: bgPic8,
    profilePic: pic8,
    name: "Ameer Ali",
    rate: 5,
    description:
      "Join the elite community of NFT collectors with my exclusive and limited edition designs.",
  },
  {
    bgImage: bgPic9,
    profilePic: pic9,
    name: "Zelda Walter",
    rate: 5,
    description:
      "Experience the future of art and collectibles with my forward-thinking NFT creations.",
  },
  {
    bgImage: bgPic10,
    profilePic: pic10,
    name: "Lochlan Ahmed",
    rate: 5,
    description:
      "Discover the world of unique and valuable digital assets with my exceptional NFT designs.",
  },
];
