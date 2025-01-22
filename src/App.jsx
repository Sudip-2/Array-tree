import Navbar from "./Components/Navbar/Navbar"
import {Outlet,useLocation,useParams} from 'react-router-dom'

function App() {

  const {name} = useParams()
  const location = useLocation()

  const pageNameToIgnore = ['/login',`/register/${name}`,`/register/${name}/verify`,`/register/select-categories`]
  const showORnot = !pageNameToIgnore.includes(location.pathname)

  return (
    <>
    {showORnot && <Navbar/>}
    <Outlet/>
    </>
  )
}

export default App
