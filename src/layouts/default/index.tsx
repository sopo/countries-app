import { PropsWithChildren } from "react";
import Header from "@/components/header";
const DefaultLayout: React.FC <PropsWithChildren> = ({children}) => { 
  return (
    <div >
     <Header />
      {children}
    </div>
  );
}

export default DefaultLayout;