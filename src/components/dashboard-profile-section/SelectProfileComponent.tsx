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
  avatar8,
  avatar9,
} from "../../assets/dashboard/3d-avatars/avatars";
import Header from "../header-component/Header";

const avatars = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
];
const SelectProfileComponent = () => {
  return (
    <div className="avatar-section">
      <Header
        width={3}
        header={false}
        height={35}
        btnText=""
        onclick={() => {}}
        text="select your profile picture"
      />
      <input value={value} onChange={onchange} />
    </div>
  );
};

export default SelectProfileComponent;
