import { useEffect, useRef, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { LiaTimesSolid } from "react-icons/lia";

export default function SingleQuestion({ question, answer }) {
  const [show, setShow] = useState(false);
  const answerContainerRef = useRef(null);
  const answerRef = useRef(null);

  useEffect(() => {
    const linksHeight = answerRef.current.getBoundingClientRect().height;
    if (show) {
      answerContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      answerContainerRef.current.style.height = "0px";
    }
  }, [show]);
  return (
    <li className="single-question-container">
      <h3 className="question-title">
        <button
          className="question-btn"
          type="button"
          onClick={() => setShow(!show)}
        >
          {question}
          {show ? (
            <LiaTimesSolid className="btn-icon" />
          ) : (
            <AiOutlinePlus className="btn-icon" />
          )}
        </button>
      </h3>

      <div className="answer-container" ref={answerContainerRef}>
        <div className="answer" ref={answerRef}>
          {answer}
        </div>
      </div>
    </li>
  );
}
