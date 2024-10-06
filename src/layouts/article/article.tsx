import { PropsWithChildren } from "react";
const Article: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};
export default Article;
