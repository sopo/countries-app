import { Outlet, useParams } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer/footer";
const DefaultLayout: React.FC = () => { 
  const {lang} = useParams()
  console.log(lang)
  return (
    <div>
     <Header />
      <Outlet />
    <Footer />
    </div>
  );
}

export default DefaultLayout;