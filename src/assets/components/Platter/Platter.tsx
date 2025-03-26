import { FaLink } from "react-icons/fa";
import Button from '../Button/Button';
import './Platter.css'

type platterProps = {
    visual: string;
    appealing: string;
    calender: React.ReactNode;
    day: string;
    clock: React.ReactNode;
    meeting: string;
    lecture: string;
    gps: React.ReactNode;
    venue: string;
    expert: string;
    lesson: string;
}
function Platter({visual, appealing, calender, day, clock, meeting, lecture, gps, venue, expert, lesson}: platterProps) {
  return (
    <>
      <div className="platter-container">
        <div className="platter-image">
            <img src={visual} alt={appealing} />
            <div className="image-link">
            <FaLink />
            </div>
        </div>
        <div className="platter-details">
            <div className="platter-time">
            {calender}{day} <span className="clock-styling">{clock}{meeting}</span>
            </div>
            <div className="platter-program">
                {lecture}
            </div>
            <div className="platter-venue">
                {gps}{venue} <span className="venue-stylings">F04</span>
            </div>
            <div className="platter-lead">
                Host: <span className="expert-stylings">{expert}</span>
            </div>
            <div className="platter-lesson">
                Topic: <span className="lesson-stylings">{lesson}</span>
            </div>
            <div className="platter-cta">
                <Button btn="Book Now" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Platter
