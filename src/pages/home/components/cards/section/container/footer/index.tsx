import styles from './footer.module.css';
import ArrowIcon from '@/assets/arrow.right.svg?react'
const CardFooter: React.FC = () => {
    return(
        <div className={styles.cardFooter}>
            <div className='display-flex column-gap-xs'>
                <p className='naked-button-m'>Read more</p>
                <ArrowIcon className='icon-m icon-primary' />
            </div>
        </div>
    )
}
export default CardFooter;