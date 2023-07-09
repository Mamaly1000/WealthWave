import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlogTagsOverlay, modalMotion } from "../../motions/motions";
import cloaseTag from "./../../assets/blogs/cloaseImg.svg";
import resetImg from "./../../assets/blogs/resetIcon.svg";
import { toast } from "react-toastify";
type imgPreviewPropTypes = {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  src: string;
  setSRC: React.Dispatch<React.SetStateAction<string>>;
  setImageSRCurl: React.Dispatch<React.SetStateAction<string>>;
};
const ImagePreview = ({
  show,
  setShow,
  src,
  setSRC,
  setImageSRCurl,
}: imgPreviewPropTypes) => {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div className="modal-container preview-modal">
          <motion.div
            variants={BlogTagsOverlay}
            initial="hidden"
            animate="visible"
            className="modal-overlay"
            onClick={() => setShow(false)}
          ></motion.div>
          <motion.div
            variants={modalMotion}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modal-content"
            style={{ position: "relative", bottom: 60 }}
          >
            <div className="modal-header">
              <h4>Image Preview</h4>
              <button
                onClick={() => {
                  setShow(false);
                }}
              >
                <img src={cloaseTag} alt="close" />{" "}
              </button>
            </div>
            <img src={src} alt="image preview" />
            <div className="modal-actions">
              <button onClick={() => setShow(false)}>Submit image</button>
              <button className="reset-button">
                <img
                  src={resetImg}
                  alt="reset"
                  onClick={() => {
                    setSRC("");
                    setImageSRCurl("");
                    setShow(false);
                    toast.warn("image removed !");
                  }}
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImagePreview;
