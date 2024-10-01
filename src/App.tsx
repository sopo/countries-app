import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/global-css/containers.css";
import DefaultLayout from "./layouts/default";
import DefaultHome from "./pages/home/views/default-home";
import About from "./pages/about/views";
import PageNotFound from "./pages/page-not-found/views";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<DefaultHome />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
{
  /* <DefaultLayout>
<DefaultHome />

</DefaultLayout> */
}
