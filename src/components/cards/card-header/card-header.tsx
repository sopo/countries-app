import styles from './card-header.module.css'
const CardHeader: React.FC = () => {
  return (
    <div className={styles.cardHeader}>
      <p className="caption-s secondary-text">new</p>
    </div>
  );
}
export default CardHeader;