import {
  avatar1,
  avatar10,
  avatar11,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar9,
} from "../../assets/dashboard/3d-avatars/avatars";
import InputComponent from "./InputComponent";
import { useContextFunction } from "../../context/AppContext";
import { motion } from "framer-motion";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar9,
  avatar10,
  avatar11,
];
const SelectProfileComponent = () => {
  const contextData = useContextFunction();
  return (
    <div className="avatar-section">
      <InputComponent
        inputType="text"
        onchange={(e) => {
          contextData!.setLocalProfile({
            ...contextData!.localProfile,
            profile_pic: e.target.value,
          });
        }}
        placeholder="place your image URL here"
        title="select your profile picture"
        value={contextData!.localProfile.profile_pic}
      />
      <div className="avatars">
        {avatars.map((avatar) => {
          return (
            <motion.div
              initial={{
                backgroundImage: `url(${avatar})`,
              }}
              className="avatar"
              key={avatar}
              onClick={() =>
                contextData!.setLocalProfile({
                  ...contextData!.localProfile,
                  profile_pic: avatar,
                })
              }
            ></motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectProfileComponent;
