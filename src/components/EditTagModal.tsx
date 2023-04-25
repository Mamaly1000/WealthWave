import React from "react";
import { ModalTagsProps } from "../types/noteTypes";
import { useContextFunction } from "../context/AppContext";

const EditTagModal = ({ tags, show, setShow }: ModalTagsProps) => {
  console.log(tags, show);
  const contextData = useContextFunction();
  return (
    <div className="modal-container">
      <div className="modal-overlay" onClick={() => setShow(false)}></div>
      <div className="modal-content">
        <div className="modal-header">
          <h4>Tags List</h4>
          <button
            onClick={() => {
              setShow(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <form className="form-tags">
          {tags.map((tag) => (
            <div className="form-group" key={tag.id}>
              <input
                type="text"
                value={tag.label}
                className="tag-label-input"
                onChange={(e) =>
                  contextData!.onUpdateTag(tag.id, e.target.value)
                }
              />
              <button
                onClick={() => contextData!.onDeleteTag(tag.id)}
                className="delete-tag-btn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default EditTagModal;
