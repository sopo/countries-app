import styles from './banner.module.css'
const Banner: React.FC = () => {
    return(
        <div className={styles.heroBanner}>
            <div className={`${styles.bannerContent} container-xl`}>
            <h1 className='primary-text-inverted title-l'>Plan a family vacation</h1>
            <p className='secondary-text-inverted'>With spring break and summer vacation looming, now’s the time to plan a family vacation</p>
            </div>
        </div>
    )
}
export default Banner;
