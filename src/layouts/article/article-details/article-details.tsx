import styles from '../article.module.css'
interface ArticleDetailProps{
    text: string;
}
const ArticleDetails:React.FC<ArticleDetailProps> = ({text}) => {
    return(
        <div className={`container-l ${styles.articleDetails}`}>
            <p className='secondary-text'>{text}</p>
        </div>
    )
}
export default ArticleDetails;