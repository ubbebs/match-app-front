import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { LandingPage } from './pages/LandingPage/LandingPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { ProcessPage } from './pages/ProcessPage/ProcessPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/login',
        element: <LoginPage />,
      },
    ],
  },
  {
    path: '/process',
    element: <ProcessPage />,
    errorElement: <LandingPage />,
  },
  {
    path: '/signup',
    element: <ProcessPage />,
    errorElement: <LandingPage />,
  },
])
