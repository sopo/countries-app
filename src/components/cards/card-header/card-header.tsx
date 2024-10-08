import styles from './card-header.module.css';
interface cardHeaderProps{
  cardImageUrl: string;
}
const CardHeader: React.FC<cardHeaderProps> = ({cardImageUrl}) => {
  return (
    <div>
      <div className={styles.img} style={{ backgroundImage: `url(${cardImageUrl})` }}> </div>
    </div>
  );
}
export default CardHeader;