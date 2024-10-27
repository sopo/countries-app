import styles from './loading.module.css';
interface loadingProps {
  title?: string;
}
const Loading: React.FC<loadingProps> = ({ title }) => {
  return (
    <div className={`container-xl margin-vertical-xl ${styles.container}`}>
      <p className="text-primary text-primary-m">
        {title ? `Loading ${title}...` : 'Loading...'}
      </p>
    </div>
  );
};
export default Loading;
