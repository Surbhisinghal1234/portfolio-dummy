import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from "./screen/home/navbar/Navbar";
import Hero from './screen/home/hero/Hero';
import Service from './screen/home/service/Service';
import HtmlCssProjects from './screen/projects/HtmlCssProjects';
import JsProjects from './screen/projects/JsProjects';
import ReactProjects from './screen/projects/ReactProjects';
import MernProjects from './screen/projects/MernProjects';
import SkillsSection from './screen/home/skills/SkillsSection';
import Contact from './screen/home/contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Hero />
        <Service />
        <SkillsSection/>
        <Contact/>
      </>
    ),
  },
  {
    path: 'htmlCss-projects',
    element:<HtmlCssProjects/>,
  },
  {
    path: 'js-projects',
    element: <JsProjects/>,
  },
  {
    path: 'react-projects',
    element: <ReactProjects/>,
  },
  {
    path: 'mern-projects',
    element: <MernProjects/>,
  },
 
]);

function App() {
  return (
    <>
 <div className='xl:px-[6rem] lg:md-[4rem] md:px-[3rem] px-[2rem]  '>
<RouterProvider router={router} />
</div>

    </>
  );
}

export default App;
