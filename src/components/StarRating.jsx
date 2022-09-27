import Star from "./Star";
import "./StarRating.css";
import { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const claerrating = () => {
    setRating(0);
  };
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => {
        return (
          <Star
            key={value}
            value={value}
            rating={rating}
            setRating={setRating}
          />
        );
      })}
      <span className="clear-rating" onClick={claerrating}>
        Clear
      </span>
    </span>
  );
};
export default StarRating;
