import { Routes, Route, Navigate, useParams } from "react-router-dom";
import "@/global-css/containers.css";
import DefaultLayout from "./layouts/default";
import HomePage from "./pages/home/homepage";
import About from "./pages/about/about";
import PageNotFound from "./pages/page-not-found/page-not-found";
import ExpandedCard from "./components/cards/card-expanded/expanded-card";
import Contact from "./pages/contact/contact";
const App: React.FC = () => {
  const { lang } = useParams();
  
  return (
    <>
      <Routes>
        <Route path="/:lang" element={<DefaultLayout />}>
          <Route path="/:lang" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="countries/:id" element={<ExpandedCard />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
        <Route path="/" element={<Navigate to={`/${lang || 'en'}`} />} />
      </Routes>
    </>
  );
};

export default App;
