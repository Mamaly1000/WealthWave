import DashboardSection from "../dashboard/DashboardSection";
import Header from "../header-component/Header";
import {
  emailIcon,
  githubIcon,
  telegramIcon,
  twitterIcon,
  whatsappIcon,
} from "../../assets/social-medias/social";
import { useSelector } from "react-redux";
import { selecttheme } from "../../features/theme_slice/theme_slice";
import { selectProfile } from "../../features/profile_slice/profile_slice";
import InputComponent from "./InputComponent";
import { useContextFunction } from "../../context/AppContext";
import TextAreaComponent from "./TextAreaComponent";
import DateComponent from "./DateComponent";
import moment from "moment";
import SelectProfileComponent from "./SelectProfileComponent";
import WorkEditor from "./WorkEditor";
import SocialEditor from "./SocialEditor";

const socialImages = [
  telegramIcon,
  twitterIcon,
  whatsappIcon,
  githubIcon,
  emailIcon,
];
export const imageTraker = (type: string) => {
  const image = socialImages.find((img) => {
    return img.includes(type);
  });
  return image;
};
const DashboardProfileSection = () => {
  const themeSelector = useSelector(selecttheme);
  const profileSelector = useSelector(selectProfile);
  const contextDatafn = useContextFunction();
  const contextData = [
    { title: "name", value: profileSelector.name },
    {
      title: "email",
      value: profileSelector.email,
    },
    {
      title: "date of birth",
      value:
        profileSelector.Birth !== "Invalid date"
          ? profileSelector.Birth
          : "N/A",
    },
    {
      title: "profession",
      value: profileSelector.profession,
    },
    {
      title: "experience",
      value: profileSelector.Experience + " years",
    },
    {
      title: "address",
      value: profileSelector.Address,
    },
  ];

  return (
    <DashboardSection classname="dashboard-profile-section">
      <Header
        btnText=""
        header={false}
        height={3}
        onclick={() => {}}
        text="edit your profile"
        width={150}
      />
      <div className="profile-card-preview-section">
        <div className="edit-profile-section">
          <SelectProfileComponent />
          <InputComponent
            inputType="text"
            onchange={(e) => {
              contextDatafn!.setLocalProfile({
                ...contextDatafn!.localProfile,
                name: e.target.value,
              });
            }}
            placeholder="write your name here ..."
            title="name"
            value={contextDatafn!.localProfile.name}
          />{" "}
          <InputComponent
            inputType="text"
            onchange={(e) => {
              contextDatafn!.setLocalProfile({
                ...contextDatafn!.localProfile,
                email: e.target.value,
              });
            }}
            placeholder="write your email here ..."
            title="email"
            value={contextDatafn!.localProfile.email}
          />{" "}
          <InputComponent
            inputType="text"
            onchange={(e) => {
              contextDatafn!.setLocalProfile({
                ...contextDatafn!.localProfile,
                profession: e.target.value,
              });
            }}
            placeholder="write your profrssion here ..."
            title="profession"
            value={contextDatafn!.localProfile.profession}
          />{" "}
          <InputComponent
            inputType="text"
            onchange={(e) => {
              contextDatafn!.setLocalProfile({
                ...contextDatafn!.localProfile,
                Address: e.target.value,
              });
            }}
            placeholder="write your address here ..."
            title="address"
            value={contextDatafn!.localProfile.Address}
          />{" "}
          <InputComponent
            inputType="number"
            onchange={(e) => {
              contextDatafn!.setLocalProfile({
                ...contextDatafn!.localProfile,
                Experience: +e.target.value,
              });
            }}
            placeholder="write your experience here ..."
            title="experience"
            value={contextDatafn!.localProfile.Experience}
          />
          <TextAreaComponent
            onchange={(e) => {
              contextDatafn!.setLocalProfile({
                ...contextDatafn!.localProfile,
                description: e.target.value,
              });
            }}
            placeholder="write your Bio here ..."
            title="Bio"
            value={contextDatafn!.localProfile.description}
          />
          <DateComponent
            onchange={(e) => {
              contextDatafn!.setLocalProfile({
                ...contextDatafn!.localProfile,
                Birth: moment(e).format("YYYY/MM/DD"),
              });
              console.log(profileSelector.Birth);
            }}
            placeholder=""
            title="date of birth"
            value={contextDatafn!.localProfile.Birth}
          />
          <WorkEditor />
          <SocialEditor />
        </div>
        <div className="profile-card-preview">
          <div
            style={{ borderColor: themeSelector.btnColor }}
            className="image-section"
          >
            <img src={contextDatafn!.localProfile.profile_pic} />
          </div>
          <Header
            btnText=""
            header={false}
            height={2}
            onclick={() => {}}
            text="About Me"
            width={100}
          />
          <div
            style={{ background: themeSelector.containerColor }}
            className="context-data"
          >
            {contextData.map((data) => {
              return (
                <div
                  style={{
                    borderColor: themeSelector.btnColor,
                    color: themeSelector.headerColor,
                  }}
                  key={data.title}
                  className="context"
                >
                  <span className="title">{data.title}</span>
                  <span className="value">{data.value}</span>
                </div>
              );
            })}
          </div>
          <div className="bio">
            <Header
              btnText=""
              header={false}
              height={2}
              onclick={() => {}}
              text="Bio"
              width={100}
            />
            <p
              style={{
                background: themeSelector.containerColor,
                color: themeSelector.headerColor,
              }}
            >
              {profileSelector.description}
            </p>
          </div>
          <div className="extras">
            <Header
              btnText=""
              header={false}
              height={2}
              onclick={() => {}}
              text="skills"
              width={100}
            />
            {profileSelector.works.map((work) => {
              return (
                <div
                  key={work.title}
                  style={{
                    background: themeSelector.containerColor,
                    color: themeSelector.headerColor,
                  }}
                  className="extra"
                >
                  <span className="title">{work.title}</span>
                  <span className="value">{work.value}</span>
                </div>
              );
            })}
          </div>
          <Header
            btnText=""
            header={false}
            height={2}
            onclick={() => {}}
            text="On The Web"
            width={100}
          />
          <div className="contact">
            {profileSelector.socials.map((link) => {
              return (
                <a
                  key={link.title}
                  className="contact-link"
                  href="#"
                  target="_blank"
                >
                  <img src={imageTraker(link.title)} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardSection>
  );
};

export default DashboardProfileSection;
