import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/global-css/containers.css";
import DefaultLayout from "./layouts/default";

import HomePage from "./pages/home/homepage/homepage";
import About from "./pages/about/views";
import PageNotFound from "./pages/page-not-found/views";
import ExpandedCard from "./pages/home/components/cards/section/views/expanded";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<About />} />
            <Route path="/countries/:id" element={<ExpandedCard />}/>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
