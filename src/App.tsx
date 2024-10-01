import "@/global-css/containers.css";
import DefaultLayout from "./layouts/default";
import DefaultHome from "./pages/home/views/default-home";


const App: React.FC = () => {
  return (
    <>
       <DefaultLayout>
          <DefaultHome />
       </DefaultLayout>
    </>
  );
};

export default App;
