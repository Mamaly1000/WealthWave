import { ModalTagsProps } from "../../types/noteTypes";
import { motion, AnimatePresence } from "framer-motion";
import SingleTag from "./SingleTag";
import { BlogTagsOverlay, modalMotion } from "../../motions/motions";
const EditTagModal = ({ tags, show, setShow }: ModalTagsProps) => {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          variants={modalMotion}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="modal-container"
        >
          <motion.div
            variants={BlogTagsOverlay}
            initial="hidden"
            animate="visible"
            className="modal-overlay"
            onClick={() => setShow(false)}
          ></motion.div>
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
              {tags.map((tag, index) => (
                <SingleTag tag={tag} index={index} key={tag.id} />
              ))}
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditTagModal;
