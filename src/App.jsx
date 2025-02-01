import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {Outlet} from 'react-router'



export default function App() {

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}


