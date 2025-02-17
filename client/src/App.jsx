import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Dashboard from './components/dashboard/Dashboard'

const App = () => {
  const routes =  createBrowserRouter([
    { path:'/', element:<Dashboard/>}
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App