import ThumbsUp from "~/src/assets/icons/hand.thumbsup.svg?react";
import ThumbsUpFill from "~/src/assets/icons/hand.thumbsup.fill.svg?react";
import styles from "./rating-section.module.css";
interface RatingSectionProps {
  rating: number;
  onClick: () => void;
}

const RatingSection: React.FC<RatingSectionProps> = ({ rating, onClick }) => {
  return (
    <div className={styles.rating}>
      {rating ? (
        <ThumbsUpFill className="icon-l icon-primary" onClick={onClick} />
      ) : (
        <ThumbsUp className="icon-l icon-primary" onClick={onClick} />
      )}
      <p>{rating}</p>
    </div>
  );
};
export default RatingSection;
