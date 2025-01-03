import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Github, { loaderGithubInfo } from './components/Github/Github.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//         path: "github",
//         element: <Github/>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

//****************************** OR */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      {/* loader is used to optimize the api call means when you hover over the link in which api is called then it call the api before the clicking on link by that it optimze the calling of data from database or api */}
      <Route 
      path='github' 
      element={<Github/>}
      loader={loaderGithubInfo} />
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
