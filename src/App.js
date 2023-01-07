import "./styles.css";
import { useState } from "react";
import mySvg from "./images/illustration-thank-you.svg";

const Response = ({ review }) => {
  return (
    <div className="card center">
      <img src={mySvg} alt="receipt machine" />
      <p className="circle_rating">You selected {review} out of 5 </p>
      <h1>Thank you!</h1>
      <p className="p_center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

const Survey = ({ review, setReview, setRender }) => {
  const handleChange = (event) => {
    setReview(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setRender("response");
    console.log(review);
  };

  return (
    <div className="card">
      <div className="star">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <form onSubmit={handleSubmit}>
        <div className="numbers">
          <span>
            <input
              type="radio"
              className="num"
              id="radio1"
              value="1"
              name="radio"
              onChange={handleChange}
            />
            <label className="star oj" htmlFor="radio1">
              1
            </label>
          </span>
          <span>
            <input
              type="radio"
              className="num"
              id="radio2"
              value="2"
              name="radio"
              onChange={handleChange}
            />
            <label className="star oj" htmlFor="radio2">
              2
            </label>
          </span>
          <span>
            <input
              type="radio"
              className="num"
              id="radio3"
              value="3"
              name="radio"
              onChange={handleChange}
            />
            <label className="star oj" htmlFor="radio3">
              3
            </label>
          </span>
          <span>
            <input
              type="radio"
              className="num"
              id="radio4"
              value="4"
              name="radio"
              onChange={handleChange}
            />
            <label className="star oj" htmlFor="radio4">
              4
            </label>
          </span>
          <span>
            <input
              type="radio"
              className="num"
              id="radio5"
              value="5"
              name="radio"
              onChange={handleChange}
            />
            <label className="star oj" htmlFor="radio5">
              5
            </label>
          </span>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

function App() {
  const [review, setReview] = useState(0);
  const [render, setRender] = useState("survey");

  return (
    <div className="body">
      {render === "survey" && (
        <Survey review={review} setReview={setReview} setRender={setRender} />
      )}
      {render === "response" && <Response review={review} />}
    </div>
  );
}

export default App;
