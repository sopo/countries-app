import { Outlet } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer/footer";
const DefaultLayout: React.FC = () => { 
  return (
    <div>
     <Header />
      <Outlet />
    <Footer />
    </div>
  );
}

export default DefaultLayout;