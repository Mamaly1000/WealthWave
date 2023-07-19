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
}

export const AppContext = createContext<Icontext | null>({} as Icontext);

const AppContextComponent = ({ children }: any) => {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<TAG[]>("TAGS", []);
  const [selectedId, setSelectedId] = useState<IAppleNews | null>(null);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIDs.includes(tag.id)),
      };
    });
  }, [notes, tags]);
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
  const [screenW, setScreenW] = useState<boolean>(
    window.innerWidth > 450 ? true : false
  );
  const [scrollH, setScrollH] = useState<boolean>(
    window.scrollY > 300 ? true : false
  );
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
