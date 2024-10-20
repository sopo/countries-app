import styles from "./page-not-found.module.css";
import Button from "@/components/button/button";
import { Link, useParams } from "react-router-dom";
const PageNotFound: React.FC = () => {
  const { lang } = useParams();
  const kaContent = {
    pageTitle: "გვერდი ვერ მოიძებნა",
    buttonTitle: "მთავარ გვერდზე დაბრუნება",
  };
  const enContent = {
    pageTitle: "The page you're looking for can't be found",
    buttonTitle: "Go to homepage",
  };
  const content = lang === "en" ? enContent : kaContent;
  return (
    <div className={styles.container}>
      <h1 className="primary-text">{content.pageTitle}</h1>
      <div>
        <Link to="/">
          <Button title={content.buttonTitle} className="buttonPrimaryM" />
        </Link>
      </div>
    </div>
  );
};
export default PageNotFound;
