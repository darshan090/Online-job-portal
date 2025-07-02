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
import ProtectedRoute from './components/protected-route'


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
        element:(
          <ProtectedRoute>
            <OnboardingPage />
          </ProtectedRoute>
        )
      },
      {
        path:'/job-listing',
        element: (
          <ProtectedRoute>
            <Joblisting />
          </ProtectedRoute>
        )
      },
      {
        path:'/job',
        element:(
          <ProtectedRoute>
            <Job />
          </ProtectedRoute>
        )
      },
      {
        path:'/my-jobs',
        element:(
          <ProtectedRoute>
            <Myjobs />
          </ProtectedRoute>
        ) 
      },
      {
        path:'/post-job',
        element:(
          <ProtectedRoute>
            <Postjob />
          </ProtectedRoute>
        )
      },
      {
        path:'/saved-jobs',
        element:(
          <ProtectedRoute>
            <SavedJob />
          </ProtectedRoute>
        ) 
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
