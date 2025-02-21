import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'
import LoginForm from './components/forms/LoginForm'
import RegistrationForm from './pages/forms/RegistrationForm'

const App = () => {
  const routes =  createBrowserRouter([
    { path:'/', element:<Dashboard/>},
    { path: '/login', element:<LoginForm/>},
    { path: '/register', element: <RegistrationForm/> }
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App