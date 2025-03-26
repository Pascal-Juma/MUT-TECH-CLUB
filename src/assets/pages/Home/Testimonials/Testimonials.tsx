import './Testimonials.css'
import Intro from '../../../components/Intro/Intro'
import Plate from '../../../components/Plate/Plate'
import monica from '../../../monica.jpg'
import pascal from '../../../pascal.jpg'
import andrew from '../../../andrew.jpg'
import gatzambithe from '../../../gatzambithe.jpg'
import { IoMdStar,  IoMdStarHalf } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";


function Testimonials() {
  return (
    <>
      <section className="testimonial-section">
        <div className="testimonial-introduction">
            <Intro heading="Members Reviews" sub=" What our Happy Alumni & Members Say" color="black" />
        </div>
        <div className="testimonials-highlights">
            <p className="highlights-paragraph">
            It is a well-known truth that those who join the Tech Club gain valuable skills while engaging with a vibrant community. Through mentorship, collaboration, and hands-on learning, members develop expertise, build connections, and achieve success. Their experiences showcase the club’s impact, inspiring more tech enthusiasts to grow and innovate together.
            </p>
        </div>
        <div className="testimonial-bottom">
                <Plate member={monica} reader={monica} alumni="Yvonne Mbithe" position="Vice President" rating={<IoMdStar />} ratinga={<IoMdStar />} ratingb={<IoMdStar />} ratingc={<IoMdStar />} ratingd={< IoMdStarHalf />} quotes={<RiDoubleQuotesL />} testimonies='"Pariatur, natus! Non alias ipsa ipsum perspiciatis quasi quas voluptatem, nesciunt natus debitis animi recusandae, distinctio nam neque, aliquid hic odit perferendis!"'/>
                <Plate member={pascal} reader={pascal} alumni="Pascal Tokodi" position="President" rating={<IoMdStar />} ratinga={<IoMdStar />} ratingb={<IoMdStar />} ratingc={<IoMdStar />} ratingd={< IoMdStar />} quotes={<RiDoubleQuotesL />} testimonies='"Pariatur, natus! Non alias ipsa ipsum perspiciatis quasi quas voluptatem, nesciunt natus debitis animi recusandae, distinctio nam neque, aliquid hic odit perferendis!"'/>
                <Plate member={andrew} reader={andrew} alumni="Dominic Andati" position="Treasure" rating={<IoMdStar />} ratinga={<IoMdStar />} ratingb={<IoMdStar />} ratingc={<IoMdStar />} ratingd={< IoMdStarHalf />} quotes={<RiDoubleQuotesL />} testimonies='"Pariatur, natus! Non alias ipsa ipsum perspiciatis quasi quas voluptatem, nesciunt natus debitis animi recusandae, distinctio nam neque, aliquid hic odit perferendis!"'/>
                <Plate member={gatzambithe} reader={gatzambithe} alumni="Monica Gatzambithe" position="Member" rating={<IoMdStar />} ratinga={<IoMdStar />} ratingb={<IoMdStar />} ratingc={<IoMdStar />} ratingd={< IoMdStar />} quotes={<RiDoubleQuotesL />} testimonies='"Pariatur, natus! Non alias ipsa ipsum perspiciatis quasi quas voluptatem, nesciunt natus debitis animi recusandae, distinctio nam neque, aliquid hic odit perferendis!"'/>
        </div>
      </section>
    </>
  )
}

export default Testimonials
