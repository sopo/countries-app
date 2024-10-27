import styles from './banner.module.css';
import { useParams } from 'react-router-dom';
const Banner: React.FC = () => {
  const { lang } = useParams();
  const kaContent = {
    title: 'დაგეგმეთ მოგზაურობა ოჯახთან ერთად',
    description: 'ზაფხულის მოახლოებასთან ერთად, დროა მოგზაურობა დაგეგმოთ',
  };
  const enContent = {
    title: 'Plan a family vacation',
    description:
      'With spring break and summer vacation looming, now’s the time to plan a family vacation',
  };
  const content = lang === 'en' ? enContent : kaContent;
  return (
    <div className={styles.heroBanner}>
      <div className={`${styles.bannerContent} container-xl`}>
        <h1 className="primary-text-inverted title-l">{content.title}</h1>
        <p className="secondary-text-inverted">{content.description}</p>
      </div>
    </div>
  );
};
export default Banner;
