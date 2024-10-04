import { PropsWithChildren } from "react";


const ArticlePattern: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`container-xl`}>
      <div>{children}</div>
    </div>
  );
};
export default ArticlePattern;
