import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import Login from './Login or Signup/Login/Login.jsx'
import Singin from './Login or Signup/Signup/Signup.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Verify from './Login or Signup/Verify/Verify.jsx'
import UsertypeGoal from './Login or Signup/Usertype/UsertypeGoal.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<App/>}>

      <Route path='' element = {<Home/>}></Route>
      <Route path='login' element = {<Login/>}></Route>
      <Route path='register/:name' element = {<Singin/>}></Route>
      <Route path='register/:name/verify' element={<Verify/>}></Route>
      <Route path='register/select-categories' element={<UsertypeGoal/>}></Route>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
