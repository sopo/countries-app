import { PropsWithChildren } from "react";
import Header from "#/header";
const Layout: React.FC <PropsWithChildren> = ({children}) => { 
  return (
    <div >
     <Header />
      {children}
    </div>
  );
}

export default Layout;