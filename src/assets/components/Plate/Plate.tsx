import './Plate.css'

type plateProps = {
    member: string;
    reader: string;
    alumni: string;
    position: string;
    rating ? : React.ReactNode;
    ratinga ? : React.ReactNode;
    ratingb ? : React.ReactNode;    
    ratingc ? : React.ReactNode;
    ratingd ? : React.ReactNode;    
    quotes: React.ReactNode;
    testimonies: string;
}
function Plate({member, reader, alumni, position, rating, ratinga, ratingb, ratingc, ratingd, quotes, testimonies}: plateProps) {
  return (
    <>
      <div className="plate-container">
        <div className="plate-top">
        <div className="members-image">
        <img src={member} alt={reader} />
        </div>
        <div className="members-details">
            <p className="members-name">
                {alumni}
            </p>
            <p className="members-role">
                {position}
            </p>
            <p className="members-ratings">
                {rating}{ratinga} {ratingb} {ratingc} {ratingd} 
            </p>
        </div>
        <div className="members-remarks">
            {quotes}
        </div>
        </div>
        <div className="members-reviews">
        <p className="reviews-paragragh">
        {testimonies}
        </p>
        </div>
        </div>
    </>
  )
}

export default Plate
