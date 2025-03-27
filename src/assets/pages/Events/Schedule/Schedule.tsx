import { MdLocationOn } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import Platter from '../../../components/Platter/Platter'
import robust from '../../../robust.jpg'
import data from '../../../data.jpg'
import deploy from '../../../deploy.jpg'
import optimisation from '../../../optimisation.jpg'
import scalable from '../../../scalable.jpg'
import figma from '../../../interface.jpg'
import './Schedule.css'

function Schedule() {
  return (
    <>
    <section className="schedule-section">
    <Platter visual={robust} appealing="Robust Security" calender={<SlCalender />} day="Mondays" clock={<FaRegClock />} meeting="4:00 pm -7:00 pm" lecture="Cyber Security" gps={<MdLocationOn />} venue="Computer Lab" expert="Webster Ifedha" lesson="Robust Security Measures, safeguard digital environments & conduct security audits" />

    <Platter visual={figma} appealing="UI/UX Design" calender={<SlCalender />} day="Tuesday" clock={<FaRegClock />} meeting="5:00 pm -8:00 pm" lecture="UI/UX Design" gps={<MdLocationOn />} venue="Computer Lab" expert="Manase Gunga" lesson="User research, wireframing and usability testing" />

    <Platter visual={scalable} appealing="Web Development" calender={<SlCalender />} day="Wednesdays" clock={<FaRegClock />} meeting="6:00 pm -9:00 pm" lecture="Web Development" gps={<MdLocationOn />} venue="Computer Lab" expert="Carolyne Githenduka" lesson="Designing, developing and deploying full-stack responsive and dynamic web applications" />

    <Platter visual={deploy} appealing="Mobile App Development" calender={<SlCalender />} day="Thursdays" clock={<FaRegClock />} meeting="4:00 pm -7:00 pm" lecture="Mobile App Development" gps={<MdLocationOn />} venue="Twin Lab" expert="Stanley Amunze" lesson="Delivering engaging and high-performance solutions for smartphones and tablets" />

    <Platter visual={optimisation} appealing="Cloud Engineering" calender={<SlCalender />} day="Fridays" clock={<FaRegClock />} meeting="3:00 pm -6:00 pm" lecture="Cloud Engineering" gps={<MdLocationOn />} venue="Computer Lab" expert="Paul Karanja" lesson="Ensuring high availabilty, security and performance for applications and services" />

    <Platter visual={data} appealing="Power Platform" calender={<SlCalender />} day="Saturday" clock={<FaRegClock />} meeting="1:00 pm -4:00 pm" lecture="Power Platform" gps={<MdLocationOn />} venue="Computer Lab" expert="Eyvonne Mbithe" lesson="Creating custom business applications, automate  workflows and data analysis" />
    </section>
    </>
  )
}

export default Schedule
