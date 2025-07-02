import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Button } from './components/ui/button'
import Applayout from './layout/app-layout'
import LandingPage from './pages/landing'
import OnboardingPage from './pages/onboarding'
import Joblisting from './pages/job-listing'
import Job from './pages/job'
import Myjobs from './pages/my-jobs'
import Postjob from './pages/post-job'
import SavedJob from './pages/saved-job'
import { ThemeProvider } from './components/theme-provider'


const router = createBrowserRouter([
  {
    element:<Applayout />, 
    children:[
      {
        path:'/',
        element: <LandingPage />
      },
      {
        path:'/onboarding',
        element:<OnboardingPage />
      },
      {
        path:'/job-listing',
        element: <Joblisting />
      },
      {
        path:'/job',
        element: <Job />
      },
      {
        path:'/my-jobs',
        element: <Myjobs />
      },
      {
        path:'/post-job',
        element: <Postjob />
      },
      {
        path:'/saved-jobs',
        element: <SavedJob />
      },
    ]
  }
])

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router = {router}/>  
    </ThemeProvider>
  )
}

export default App
