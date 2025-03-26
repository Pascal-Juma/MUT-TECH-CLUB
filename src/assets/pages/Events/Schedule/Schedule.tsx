import { MdLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import Platter from '../../../components/Platter/Platter'
import robust from '../../../images/robust.jpg'
import data from '../../../images/data.jpg'
import deploy from '../../../images/deploy.jpg'
import optimisation from '../../../images/optimisation.jpg'
import scalable from '../../../images/scalable.jpg'
import figma from '../../../images/interface.jpg'
import './Schedule.css'

function Schedule() {
  return (
    <>
    <section className="schedule-section">
    <Platter visual={robust} appealing="Robust Security" calender={<SlCalender />} day="Mondays" clock={<FaRegClock />} meeting="4:00 pm -7:00 pm" lecture="Cyber Security" gps={<MdLocationOn />} venue="Computer Lab" expert="Webster Ifedha" lesson="Robust Security Measures, safeguard digital environments & conduct security audits" />

    <Platter visual={figma} appealing="UI/UX Design" calender={<SlCalender />} day="Tuesday" clock={<FaRegClock />} meeting="5:00 pm -8:00 pm" lecture="UI/UX Design" gps={<MdLocationOn />} venue="Computer Lab" expert="Manase Gunga" lesson="Robust Security Measures, safeguard digital environments & conduct security audits" />

    <Platter visual={scalable} appealing="Web Development" calender={<SlCalender />} day="Wednesdays" clock={<FaRegClock />} meeting="6:00 pm -9:00 pm" lecture="Web Development" gps={<MdLocationOn />} venue="Computer Lab" expert="Carolyne Githenduka" lesson="Robust Security Measures, safeguard digital environments & conduct security audits" />

    <Platter visual={deploy} appealing="Mobile App Development" calender={<SlCalender />} day="Thursdays" clock={<FaRegClock />} meeting="4:00 pm -7:00 pm" lecture="Mobile App Development" gps={<MdLocationOn />} venue="Twin Lab" expert="Stanley Amunze" lesson="Robust Security Measures, safeguard digital environments & conduct security audits" />

    <Platter visual={optimisation} appealing="Cloud Engineering" calender={<SlCalender />} day="Fridays" clock={<FaRegClock />} meeting="3:00 pm -6:00 pm" lecture="Cloud Engineering" gps={<MdLocationOn />} venue="Computer Lab" expert="Paul Karanja" lesson="Robust Security Measures, safeguard digital environments & conduct security audits" />

    <Platter visual={data} appealing="Power Platform" calender={<SlCalender />} day="Saturday" clock={<FaRegClock />} meeting="1:00 pm -4:00 pm" lecture="Power Platform" gps={<MdLocationOn />} venue="Computer Lab" expert="Eyvonne Mbithe" lesson="Robust Security Measures, safeguard digital environments & conduct security audits" />
    </section>
    </>
  )
}

export default Schedule
