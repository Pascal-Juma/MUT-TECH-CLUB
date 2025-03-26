import './Intro.css'

type introProps = {
    heading: string;
    sub: string;
    color ? : string;
}
function Intro({heading, sub, color}: introProps) {
    let headingStyle;
    if(color === 'black'){
        headingStyle = 'black';
    }else if (color === 'grey'){
        headingStyle = 'grey';
    }
  return (
    <>
      <div className="intro-container">
        <h1 className="intro-heading">
            {heading}
        </h1>
        <h2 className={color}>{sub}</h2>
      </div>
    </>
  )
}

export default Intro
