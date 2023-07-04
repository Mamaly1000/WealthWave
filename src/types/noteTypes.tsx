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
  img: string;
  published_date: Date;
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
  img: string;
  published_date: Date;
  tagIDs: string[];
};
export type SimplifiedNote = {
  tags: TAG[];
  title: string;
  id: string;
  body: string;
  email: string;
  img: string;
  published_date: Date;
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
  published_date: Date;
  index: number;
};
export type BlogViewPageProps = {
  notes: Note[];
  onDelete: (id: string) => void;
};
export type ModalTagsProps = {
  tags: TAG[];
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
};
export type CommentType = {
  name: string;
  email: string;
  comment: string;
  profilePicUrl: string;
  date: string;
  liked: number;
  disliked: number;
  saved: boolean;
};
