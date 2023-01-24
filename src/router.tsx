import { createBrowserRouter } from 'react-router-dom'
import { ErrorPage } from './pages/ErrorPage/ErrorPage'
import { HomePage } from './pages/HomePage/HomePage'
import { LandingPage } from './pages/LandingPage/LandingPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
    ],
  },
])
