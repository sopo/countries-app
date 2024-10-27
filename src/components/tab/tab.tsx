interface TabProps {
  tabTitle: string;
  className?: string;
  onClick: () => void;
}
const Tab: React.FC<TabProps> = ({ tabTitle, className, onClick }) => {
  return (
    <div onClick={onClick}>
      <p className={className}>{tabTitle}</p>
    </div>
  );
};
export default Tab;
