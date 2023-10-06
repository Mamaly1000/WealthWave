import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  RawNote,
  TAG,
  noteData,
  SimplifiedNote,
  EditBlog,
} from "../types/noteTypes";
import { v4 as uuidV4 } from "uuid";
import { IAppleNews } from "../hooks/useNews";
import { useDispatch } from "react-redux";
import {
  fetchAppleNews,
  fetchTeslaNews,
  fetchTop_business_headlines,
  fetchTop_business_headlines_tech_crunch_everything,
  fetchWallStreetJournal_News,
} from "../features/news_slice/news_slice";
import {
  AppleNews,
  TechCrunchnews,
  teslaNews,
  wallstreetnews,
  Top_business_headlines,
} from "../Data/news";
import { setProfileSlice } from "../features/profile_slice/profile_slice";
import useProfile, { Iprofile } from "../hooks/useProfile";
import useTheme, { ThemeInterface } from "../hooks/useTheme";
import { setAppTheme } from "../features/theme_slice/theme_slice";
import useToast, { ToastInterface } from "../hooks/useToast";

interface Icontext {
  tags: TAG[];
  setTags: React.Dispatch<React.SetStateAction<TAG[]>>;
  notes: RawNote[];
  setNotes: React.Dispatch<React.SetStateAction<RawNote[]>>;
  notesWithTags: SimplifiedNote[];
  onCreateNote: ({ tags, ...data }: noteData) => void;
  onAddTag: (tag: TAG) => void;
  onUpdate: (id: string, { tags, ...data }: EditBlog) => void;
  onDelete: (id: string) => void;
  onFindTag: (id: string) => boolean;
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, text: string) => void;
  screenW: boolean;
  scrollH: boolean;
  selectedId: IAppleNews | null;
  setSelectedId: React.Dispatch<React.SetStateAction<IAppleNews | null>>;
  showTagModal: boolean;
  setShowTagsModal: React.Dispatch<React.SetStateAction<boolean>>;
  localTheme: ThemeInterface;
  setLocalTheme: React.Dispatch<React.SetStateAction<ThemeInterface>>;
  localToast: ToastInterface;
  setLocalToast: React.Dispatch<React.SetStateAction<ToastInterface>>;
  localProfile: Iprofile;
  setLocalProfile: React.Dispatch<React.SetStateAction<Iprofile>>;
  displayCryptoFilterModal: boolean;
  setDisplayCryptoFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
  displayCreateWalletModal: boolean;
  setDisplayCreateWalletModal: React.Dispatch<React.SetStateAction<boolean>>;
  addWork: (work: { title: string; value: string }) => void;
  editWork: (work: { title: string; value: string; id: string }) => void;
  deleteWork: (work: { title: string; value: string; id: string }) => void;
  addSocial: (social: { title: string; href: string }) => void;
  editSocial: (social: { title: string; href: string; id: string }) => void;
  deleteSocial: (social: { title: string; href: string; id: string }) => void;
}

export const AppContext = createContext<Icontext | null>({} as Icontext);

const AppContextComponent = ({ children }: { children: React.ReactNode }) => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const { localTheme, setLocalTheme } = useTheme();
  const [tags, setTags] = useLocalStorage<TAG[]>("TAGS", []);
  const [showTagModal, setShowTagsModal] = useState<boolean>(false);
  const [displayCreateWalletModal, setDisplayCreateWalletModal] =
    useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<IAppleNews | null>(null);
  const [displayCryptoFilterModal, setDisplayCryptoFilterModal] =
    useState<boolean>(false);
  const {
    localProfile,
    setLocalProfile,
    addWork,
    editWork,
    deleteWork,
    addSocial,
    editSocial,
    deleteSocial,
  } = useProfile();
  const dispatch = useDispatch();
  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIDs.includes(tag.id)),
      };
    });
  }, [notes, tags]);
  const [screenW, setScreenW] = useState<boolean>(
    window.innerWidth > 450 ? true : false
  );
  const [scrollH, setScrollH] = useState<boolean>(
    window.scrollY > 300 ? true : false
  );
  const { localToast, setLocalToast } = useToast();
  const onCreateNote = ({ tags, ...data }: noteData) => {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          ...data,
          id: uuidV4(),
          tagIDs: tags.map((t) => t.id),
        },
      ];
    });
  };
  const onAddTag = (tag: TAG) => {
    setTags((prev) => [...prev, tag]);
  };
  const onUpdate = (id: string, { tags, ...data }: EditBlog) => {
    setNotes((prev) => {
      return prev.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...data,
            tagIDs: tags!.map((t) => t.id),
          };
        } else {
          return note;
        }
      });
    });
  };
  const onDelete = (id: string) => {
    setNotes((prev) => {
      return prev.filter((note) => note.id !== id);
    });
  };
  const onFindTag = (id: string) => {
    const selectedTag = tags.findIndex((tag) => tag.id === id);
    if (selectedTag < 0) {
      return true;
    } else {
      return false;
    }
  };
  const onDeleteTag = (id: string) => {
    setTags((prev) => {
      return prev.filter((tag) => tag.id !== id);
    });
  };
  const onUpdateTag = (id: string, label: string) => {
    setTags((prev) => {
      return prev.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
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
  useEffect(() => {
    dispatch(fetchAppleNews(AppleNews));
    dispatch(fetchWallStreetJournal_News(wallstreetnews));
    dispatch(
      fetchTop_business_headlines_tech_crunch_everything(TechCrunchnews)
    );
    dispatch(fetchTeslaNews(teslaNews));
    dispatch(fetchTop_business_headlines(Top_business_headlines));
  }, []);
  useEffect(() => {
    if (localProfile.description !== "" && localProfile.name !== "") {
      dispatch(
        setProfileSlice({
          description: localProfile.description,
          email: localProfile.email,
          name: localProfile.name,
          profile_pic: localProfile.profile_pic,
          Address: localProfile.Address,
          Birth: localProfile.Birth,
          Experience: localProfile.Experience,
          profession: localProfile.profession,
          socials: localProfile.socials,
          works: localProfile.works,
        } as Iprofile)
      );
    }
  }, []);
  useEffect(() => {
    dispatch(
      setAppTheme({
        bgColor: localTheme.bgColor,
        btnColor: localTheme.btnColor,
        containerColor: localTheme.containerColor,
        headerColor: localTheme.headerColor,
        plainTextColor: localTheme.plainTextColor,
        divider: localTheme.divider,
        modalColor: localTheme.modalColor,
        hoverColor: localTheme.headerColor,
      } as ThemeInterface)
    );
  }, []);
  useEffect(() => {
    dispatch(
      setProfileSlice({
        description: localProfile.description,
        email: localProfile.email,
        name: localProfile.name,
        profile_pic: localProfile.profile_pic,
        Address: localProfile.Address,
        Birth: localProfile.Birth,
        Experience: localProfile.Experience,
        profession: localProfile.profession,
        socials: localProfile.socials,
        works: localProfile.works,
      } as Iprofile)
    );
  }, [localProfile]);
  return (
    <AppContext.Provider
      value={{
        screenW,
        scrollH,
        onUpdateTag,
        onDeleteTag,
        onDelete,
        onUpdate,
        notes,
        setNotes,
        tags,
        setTags,
        notesWithTags,
        onCreateNote,
        onAddTag,
        onFindTag,
        selectedId,
        setSelectedId,
        showTagModal,
        setShowTagsModal,
        localTheme,
        setLocalTheme,
        localToast,
        setLocalToast,
        setLocalProfile,
        localProfile,
        addWork,
        editWork,
        deleteWork,
        addSocial,
        editSocial,
        deleteSocial,
        displayCryptoFilterModal,
        setDisplayCryptoFilterModal,
        displayCreateWalletModal,
        setDisplayCreateWalletModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextComponent;
export const useContextFunction = () => {
  return useContext(AppContext);
};
