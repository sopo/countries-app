import ThumbsUp from "~/src/assets/icons/hand.thumbsup.svg?react";
import ThumbsUpFill from "~/src/assets/icons/hand.thumbsup.fill.svg?react";
import { useState } from "react";
import styles from "./icon-button.module.css";

const IconButton: React.FC = () => {
  const [like, setLike] = useState(0);
  function handleLikeClick() {
    setLike(like + 1);
  }
  return (
    <div className={styles.iconButton}>
      {like ? (
        <ThumbsUpFill
          className="icon-l icon-action"
          onClick={handleLikeClick}
        />
      ) : (
        <ThumbsUp className="icon-l icon-primary" onClick={handleLikeClick} />
      )}

      {like}
    </div>
  );
};
export default IconButton;
