import styles from './tab-bar.module.css'
function TabBar({children,}){
return(
    <div className={styles.tabContainer}>
        {children}
    </div>
)
}
export default TabBar;