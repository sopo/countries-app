import styles from "../article.module.css";
interface ArticleBodyProps {
  text: string;
}
const ArticleBody: React.FC<ArticleBodyProps> = ({ text }) => {
  return (
    <div className={`container-l ${styles.articleBody}`}>
      <p>{text}</p>
    </div>
  );
};
export default ArticleBody;
