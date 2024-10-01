import styles from "./page-not-found.module.css";
import Button from "@/components/button/button";
import { Link } from "react-router-dom";
const PageNotFound: React.FC = () => {
  return (
    <div className={styles.container}>
      <p className="title-l primary-text">
        The page you're looking for can't be found.
      </p>
      <div>
        <Link to="/">
          <Button title="Go to homepage" className='buttonPrimaryM' />
        </Link>
      </div>
    </div>
  );
};
export default PageNotFound;
