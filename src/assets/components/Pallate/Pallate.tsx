import './Pallate.css'

type pallateProps= {
    symbol: React.ReactNode;
    intouch: string;
}
function Pallate({symbol, intouch}: pallateProps) {
  return (
    <>
      <div className="pallate-container">
        <p className="pallate-info">
            {symbol}{intouch}
        </p>
      </div>
    </>
  )
}

export default Pallate
