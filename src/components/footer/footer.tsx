import styles from "./footer.module.css";
import { useParams } from "react-router-dom";
const Footer: React.FC = () => {
  const { lang } = useParams();
  const kaContent = {
    title: "ბლოგი",
  };
  const enContent = {
    title: "Blog",
  };

  const content = lang === "en" ? enContent : kaContent;
  return (
    <div>
      <div className={styles.footerContainer}>
        <div className={`container-xl ${styles.footerContentContainer}`}>
          <h3 className={styles.footerTitle}>{content.title}</h3>
        </div>
      </div>
    </div>
  );
};
export default Footer;
