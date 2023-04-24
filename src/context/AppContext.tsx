import React, { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import {
  RawNote,
  TAG,
  noteData,
  SimplifiedNote,
  Note,
  EditBlog,
} from "../types/noteTypes";
import { v4 as uuidV4 } from "uuid";
import { useNavigate } from "react-router-dom";

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
}

export const AppContext = createContext<Icontext | null>({} as Icontext);

const AppContextComponent = ({ children }: any) => {
  const nav = useNavigate();
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<TAG[]>("TAGS", []);

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
  return (
    <AppContext.Provider
      value={{
        onDelete,
        onUpdate,
        notes,
        setNotes,
        tags,
        setTags,
        notesWithTags,
        onCreateNote,
        onAddTag,
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
