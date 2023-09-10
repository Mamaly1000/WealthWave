import { toast } from "react-toastify";
import useLocalStorage from "./useLocalStorage";
import { v4 as uuidV4 } from "uuid";

export interface Iprofile {
  name: string;
  email: string;
  profile_pic: string;
  description: string;
  profession: string;
  Birth: string;
  Address: string;
  Experience: number;
  works: { title: string; value: number | string; id: string }[];
  socials: { title: string; href: string; id: string }[];
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
  const addWork = (work: { title: string; value: string }) => {
    let works = [...localProfile.works];
    const check = localProfile.works.findIndex((w) => w.title === work.title);
    if (check < 0) {
      works.push({ id: uuidV4(), title: work.title, value: work.value });
      setLocalProfile({ ...localProfile, works });
    } else {
      toast.error(`you already had ${work.title} skill`);
    }
  };
  const editWork = (work: { title: string; value: string; id: string }) => {
    const data = [...localProfile.works];
    const selectedWork = data.findIndex((w) => w.id === work.id);
    if (data.some((w) => w.title === work.title)) {
      toast.error(`you already added ${work.title} skill`);
    } else {
      data[selectedWork] = {
        id: work.id,
        title: work.title,
        value: work.value,
      };
      setLocalProfile({ ...localProfile, works: data });
    }
  };
  const deleteWork = (work: { title: string; value: string; id: string }) => {
    const newArray = localProfile.works.filter((w) => w.id !== work.id);
    setLocalProfile({ ...localProfile, works: newArray });
  };
  const addSocial = (social: { title: string; href: string }) => {
    let socials = [...localProfile.socials];
    const check = localProfile.socials.findIndex(
      (s) => s.title === social.title
    );
    if (check < 0) {
      socials.push({ id: uuidV4(), title: social.title, href: social.href });
      setLocalProfile({ ...localProfile, socials });
    } else {
      toast.error(`you already add ${social.title} `);
    }
  };
  const editSocial = (social: { title: string; href: string; id: string }) => {
    const data = [...localProfile.socials];
    const selectedWork = data.findIndex((s) => s.id === social.id);
    if (data.some((s) => s.title === social.title)) {
      toast.error(`you already added ${social.title}`);
    } else {
      data[selectedWork] = {
        id: social.id,
        title: social.title,
        href: social.href,
      };
      setLocalProfile({ ...localProfile, socials: data });
    }
  };
  const deleteSocial = (social: {
    title: string;
    href: string;
    id: string;
  }) => {
    const newArray = localProfile.socials.filter((w) => w.id !== social.id);
    setLocalProfile({ ...localProfile, socials: newArray });
  };
  return {
    localProfile,
    setLocalProfile,
    addWork,
    editWork,
    deleteWork,
    addSocial,
    editSocial,
    deleteSocial,
  };
};

export default useProfile;
