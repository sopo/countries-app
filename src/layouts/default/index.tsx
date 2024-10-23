import { Navigate, Outlet, useParams } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer/footer";
const DefaultLayout: React.FC = () => {
const {lang} = useParams();
if(lang !== "ka" && lang !== "en"){
  return <Navigate to="/en" />
}

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
