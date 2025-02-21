import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'
import LoginForm from './components/forms/LoginForm'
import RegistrationForm from './pages/forms/RegistrationForm'
import ForgetPassword from './pages/forms/ForgotPassword'
import ResetPassword from './pages/forms/ResetPassword'
import VerifyOTP from './pages/forms/VerifyOTP'

const App = () => {
  const routes =  createBrowserRouter([
    { path:'/', element:<Dashboard/>},
    { path: '/login', element:<LoginForm/>},
    { path: '/register', element: <RegistrationForm/> },
    { path: '/forgot-password', element: <ForgetPassword/> },
    { path: '/reset-password', element: <ResetPassword/> },
    { path: '/verify-otp', element: <VerifyOTP/> },
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App