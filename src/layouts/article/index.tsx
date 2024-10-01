import styles from './article-layout.module.css'
interface Content{
    title: string;
    text: string;
}
const ArticleLayout: React.FC<{content: Content}> = ({ content }) => {
    return(
        <div className={`container-xl ${styles.articleContainer}`}>    
            <h1 className={`primary-text title-l ${styles.articleTitle}`}>{content.title}</h1>
            <p className='primary-text paragraph-m'>{content.text}</p>
        </div>
    )
}
export default ArticleLayout;