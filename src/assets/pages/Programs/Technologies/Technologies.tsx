import { SiAwssecretsmanager, SiGooglecloudstorage } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { FaAppStoreIos } from "react-icons/fa";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import Divnin from "../../../components/Divnin/Divnin";
import network from '../../../images/network.jpg'
import react from '../../../images/web.jpg'
import ios from '../../../images/app.jpg'
import query from '../../../images/database.jpg'
import automation from '../../../images/platform.jpg'
import figma from '../../../images/style.webp'
import './Technologies.css'

function Technologies() {
  return (
    <>
      <section className="technologies-section">
        <Divnin snap={network} alternative="cyber security" cog={<SiAwssecretsmanager />} technology="Cyber Security" entails="Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.
          Earum ex quibusdam ad provident debitis excepturi accusamus odit, unde adipisci tempore sequi." content="Asperiores libero ex aperiam error accusantium velit." />
          <Divnin snap={react} alternative="web development photo" cog={<TbBrandReactNative />} technology="Web Development" entails="Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.Earum ex quibusdam ad provident debitis excepturi accusamus odit, unde adipisci tempore sequi." content="Asperiores libero ex aperiam error accusantium velit." />
          <Divnin snap={ios} alternative="ios development" cog={<FaAppStoreIos />} technology="App Development" entails="Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis.Earum ex quibusdam ad provident debitis excepturi accusamus odit, unde adipisci tempore sequi." content="Asperiores libero ex aperiam error accusantium velit." />
          <Divnin snap={query} alternative="Database systems" cog={<SiGooglecloudstorage />} technology="Database Systems" entails="Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis. Earum ex quibusdam ad provident debitis excepturi accusamus odit, unde adipisci tempore sequi." content="Asperiores libero ex aperiam error accusantium velit." />
          <Divnin snap={automation} alternative="Cloud Engineering" cog={<BsFillWrenchAdjustableCircleFill />} technology="Cloud Engineering" entails="Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis. Earum ex quibusdam ad provident debitis excepturi accusamus odit, unde adipisci tempore sequi." content="Asperiores libero ex aperiam error accusantium velit." />
          <Divnin snap={figma} alternative="UI/ UX Design" cog={<CgFigma />} technology="UI/UX Design" entails="Pellentesque nec the condimentum nec lorem nulla augue est ultricies ac iaculis. Earum ex quibusdam ad provident debitis excepturi accusamus odit, unde adipisci tempore sequi." content="Asperiores libero ex aperiam error accusantium velit." />
      </section>
    </>
  )
}

export default Technologies
