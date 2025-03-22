import './Intro.css'

type introProps = {
    heading: string;
    sub: string;
    color ? : string;
}
function Intro({heading, sub, color}: introProps) {
    let headingStyle;
    if(color === 'red'){
        headingStyle = 'red';
    }else if (color === 'orange'){
        headingStyle = 'orange';
    }
  return (
    <>
      <div className="intro-container">
        <h1 className={color}>
            {heading}
        </h1>
        <h2 className="sub-heading">{sub}</h2>
      </div>
    </>
  )
}

export default Intro
