import { Outlet } from "react-router-dom"
import Header from "../components/Header"


const FirstLayout = () => {
  return (
      <div>
          <Header/>
          <div>
              <Outlet/>
          </div>
      
    </div>
  )
}

export default FirstLayout
