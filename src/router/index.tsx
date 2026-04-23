import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import DashboardPage from '../pages/DashboardPage'
import PracticePage from '../pages/PracticePage'
import ProblemsPage from '../pages/ProblemsPage'
import ProgressPage from '../pages/ProgressPage'
import NotFoundPage from '../pages/NotFoundPage'
import ProtectedRoute from './ProtectedRoute'

// TODO: replace with real auth state from auth context/store
const isAuthenticated = false

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/practice/:id', element: <PracticePage /> },
      { path: '/problems', element: <ProblemsPage /> },
      { path: '/progress', element: <ProgressPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
