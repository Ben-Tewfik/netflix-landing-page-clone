import questions from "../../utils/faqData";
import SingleQuestion from "./SingleQuestion";
export default function Faq() {
  console.log(questions);
  return (
    <section className="faq-container">
      <h2 className="faq-title">frequently asked questions</h2>
      <div className="questions-container">
        <ul className="questions-list">
          {questions.map((question, index) => {
            return <SingleQuestion {...question} key={index} />;
          })}
        </ul>
      </div>
    </section>
  );
}
