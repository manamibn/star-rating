import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import "./Star.css";

function Star(props) {
  const { rating, setRating, value } = props;
  if (value <= rating) {
    return (
      <FaStar className="star clicked-star" onClick={() => setRating(value)} />
    );
  } else {
    return <FaRegStar className="star" onClick={() => setRating(value)} />;
  }
}
export default Star;
