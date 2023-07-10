import { useState } from "react";
import people from "./Data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextBtn = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevBtn = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const surpriseBtn = () => {
    const newIndex = Math.floor(Math.random() * people.length);

    setIndex(checkNumber(newIndex));
  };

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
        <div className="btn-container">
          <button onClick={nextBtn} className="next-btn">
            <FaChevronRight />
          </button>
          <button onClick={prevBtn} className="prev-btn">
            <FaChevronLeft />
          </button>
          <button onClick={surpriseBtn} className="next-btn">
            suprise me
          </button>
        </div>
      </article>
      <h2> our reviews </h2>
    </>
  );
}

export default Review;
