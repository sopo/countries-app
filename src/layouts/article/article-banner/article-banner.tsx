import styles from './article-banner.module.css'
interface ArticleBannerProps{
    bannerImageUrl: string;
}
const ArticleBanner:React.FC<ArticleBannerProps> = ({bannerImageUrl}) => {
   
    return(
        <div className={`image-container-xl ${styles.banner}`}
        style={{ backgroundImage: `url(${bannerImageUrl})` }}
        >

        </div>
    )
}
export default ArticleBanner