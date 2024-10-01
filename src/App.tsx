
import "@/global-css/containers.css";
import DefaultLayout from "./layouts/default";
import DefaultHome from "./pages/home/views/default-home";
import About from "./pages/about/views";


const App: React.FC = () => {
  return (
    <>
       <DefaultLayout>
          <DefaultHome />
          <About />
       </DefaultLayout>
    </>
  );
};

export default App;
