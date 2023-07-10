import { useState } from "react";
import people from "./Data";
import { FaChewronLeftFaChewronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const [name, job, image, text] = people[index];
  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"></img>
          <span className="qoute-img">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="auther">{name}</h4>
        <p className="joc">{job}</p>
        <p className="text">{text}</p>
      </article>
      <h2> our reviews </h2>
    </>
  );
}

export default Review;
