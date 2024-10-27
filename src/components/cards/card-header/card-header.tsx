import styles from './card-header.module.css';
interface cardHeaderProps {
  cardImageUrl: string;
  className?: string;
}
const CardHeader: React.FC<cardHeaderProps> = ({ cardImageUrl, className }) => {
  return (
    <div>
      <div
        className={`${className} ${styles.img}`}
        style={{ backgroundImage: `url(${cardImageUrl})` }}
      >
        {' '}
      </div>
    </div>
  );
};
export default CardHeader;
