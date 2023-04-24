export type TAG = {
  id: string;
  label: string;
};

export type Note = {
  id: string;
} & noteData;

export type noteData = {
  title: string;
  body: string;
  email: string;
  tags: TAG[];
};

export type NoteFormProps = {
  onSubmit: (data: Note) => void;
  onAddTag: (tag: TAG) => void;
  AllAvailableTags: TAG[];
};
export type EditNoteFormProps = {
  onSubmit: (id: string, { tags, ...data }: noteData) => void;
  onAddTag: (tag: TAG) => void;
  AllAvailableTags: TAG[];
  notes: SimplifiedNote[];
};
export type EditBlog = Partial<noteData>;
export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  email: string;
  body: string;
  tagIDs: string[];
};
export type SimplifiedNote = {
  tags: TAG[];
  title: string;
  id: string;
  body: string;
  email: string;
};
export type BlogListProps = {
  AllAvailableTags: TAG[];
  notes: SimplifiedNote[];
};

export type BlogComponentProps = {
  title: string;
  email: string;
  id: string;
  tags: TAG[];
};
export type BlogViewPageProps = {
  notes: Note[];
  onDelete: (id: string) => void;
};
export type ModalTagsProps = {
  tags: TAG[];
  show: boolean;
};
