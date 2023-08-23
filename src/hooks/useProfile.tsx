import useLocalStorage from "./useLocalStorage";

export interface Iprofile {
  name: string;
  email: string;
  profile_pic: string;
  description: string;
}

const useProfile = () => {
  const [localProfile, setLocalProfile] = useLocalStorage<Iprofile>("profile", {
    description: "",
    email: "",
    name: "",
    profile_pic: "",
  });
  return { localProfile, setLocalProfile };
};

export default useProfile;
