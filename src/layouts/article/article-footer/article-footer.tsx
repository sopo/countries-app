import styles from '../article.module.css'
const ArticleFooter: React.FC = () => {
    return(
        <div className={`container-l ${styles.articleFooter}`}>
            <p className="title-s">Share article</p>
        </div>
    )
}
export default ArticleFooter;