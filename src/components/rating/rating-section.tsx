import ThumbsUp from "~/src/assets/icons/hand.thumbsup.svg?react";
import ThumbsUpFill from "~/src/assets/icons/hand.thumbsup.fill.svg?react";
import { useState } from "react";
import styles from "./rating-section.module.css";

const RatingSection: React.FC = () => {
  const [like, setLike] = useState(0);
  function handleLikeClick() {
    setLike(like + 1);
  }
  return ( 
    <div className={styles.rating}>
      {
      like ? ( <ThumbsUpFill className="icon-l icon-action" onClick={handleLikeClick} />
      ) : (
        <ThumbsUp className="icon-l icon-primary" onClick={handleLikeClick} />
      )
    }
     <p>{like}</p> 
    </div>
  );
};
export default RatingSection;
