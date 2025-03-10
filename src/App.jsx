import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import './App.css';
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import ProjectsPage from "./pages/Project/ProjectPage.jsx";
import Education from './pages/Education/Education.jsx';

function App() {
  
  const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{

				path: "",
				element: <Home />
			},
			{

				path: "about",
				element: <About />
			},
			{

				path: "projects",
				element: <ProjectsPage />
			},
			{

				path: "education",
				element: <Education />
			},
		]
  }
]);

  return (
    <>
		<RouterProvider router={router} />
    </>
  )
}

export default App
