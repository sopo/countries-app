import styles from './footer.module.css'
const Footer: React.FC = () => {
    return(
        <div>
            <div className={styles.footerContainer}> 
                <div className={`container-xl ${styles.footerContentContainer}`}>
                    <h3 className={styles.footerTitle}>Travel blog</h3>
                </div>
                 </div>
        </div>
    )
}
export default Footer;