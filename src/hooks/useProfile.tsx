import useLocalStorage from "./useLocalStorage";

export interface Iprofile {
  name: string;
  email: string;
  profile_pic: string;
  description: string;
  profession: string;
  Birth: string;
  Address: string;
  Experience: number;
  works: { title: string; value: number | string }[];
  socials: { title: string; href: string }[];
}

const useProfile = () => {
  const [localProfile, setLocalProfile] = useLocalStorage<Iprofile>("profile", {
    description:
      "I am a highly skilled frontend developer with expertise in next.js-ts and vite-react-ts projects. I thrive in remote work environments and bring a strong work ethic and attention to detail to every project I undertake.",
    email: "MamadMehdi.Aziz.10@Gmail.com",
    name: "Mohammad Mehdi Azizi",
    profile_pic: "https://avatars.githubusercontent.com/u/105161078?v=4",
    profession: "senior front end developer",
    Birth: "September,13,2002",
    Address: "Pasadena, California",
    Experience: 1,
    works: [],
    socials: [],
  });
  return { localProfile, setLocalProfile };
};

export default useProfile;
