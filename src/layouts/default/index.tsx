import { Outlet } from "react-router-dom";
import Header from "@/components/header";
const DefaultLayout: React.FC = () => { 
  return (
    <div>
     <Header />
      <Outlet />
    </div>
  );
}

export default DefaultLayout;