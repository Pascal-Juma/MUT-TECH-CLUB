import './Button.css'
import { FaLongArrowAltRight } from "react-icons/fa";

interface buttonProps{
    btn: string;
}
function Button({btn}: buttonProps) {
  return (
    <>
      <button type="button" className="btn btn-danger">{btn} <FaLongArrowAltRight /></button>
    </>
  )
}

export default Button
