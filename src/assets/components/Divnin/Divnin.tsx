import { FaLongArrowAltRight } from "react-icons/fa";
import veins from '../../veins.png'
import './Divnin.css'

type divninProps = {
  snap: string;
  alternative: string;
  cog: React.ReactNode;
  technology: string;
  entails: string;
  content: string;
}
function Divnin({snap, alternative, cog, technology, entails, content}: divninProps) {
  return (
    <>
      <div className="divnin-container">
        <div className="divnin-image">
          <img src={snap} alt={alternative} />
        </div>
        <div className="snap-icon">
          {cog}
        </div>
        <div className="divnin-style">
          <img src={veins} alt="veins image" />
        </div>
        <div className="divnin-program">
          {technology}
        </div>
        <div className="divnin-message">
          <p className="divnin-paragraph">
            {entails}<br />{content}
          </p>
        </div>
        <p className="divnin-cta"><a href="#" rel="noopener noreferrer">Read More <FaLongArrowAltRight /></a></p>
      </div>
    </>
  )
}

export default Divnin
