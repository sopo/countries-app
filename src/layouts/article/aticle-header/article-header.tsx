import styles from '../article.module.css';
import '@/global-css/typography.css';
interface ArticleHeaderProps {
  articleTitle: string;
}
const ArticleHeader: React.FC<ArticleHeaderProps> = ({ articleTitle }) => {
  return (
    <div className="container-l">
      <h1 className={`${styles.articleTitle}`}>{articleTitle}</h1>
    </div>
  );
};
export default ArticleHeader;
