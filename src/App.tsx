import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from 'react-router-dom';
import '@/global-css/containers.css';
import DefaultLayout from './layouts/default';
import HomePage from './pages/home/homepage';
import About from './pages/about/about';
import PageNotFound from './pages/page-not-found/page-not-found';
import ExpandedCard from './components/cards/card-expanded/expanded-card';
import Contact from './pages/contact/contact';
import SignIn from './pages/sign-in/sign-in';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/en" />} />
      <Route path=":lang" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="countries/:id" element={<ExpandedCard />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Route>,
  ),
);
const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
