
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Theme from './Components/Theme'

function App() {

  return (
    <>
       <h2 className='text-2xl text-center mt-10'>Main Page Of React Router</h2>

       <div className='flex justify-center items-center mt-10 gap-10'>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
       </div>

       <div className='text-center mt-10'>
        <Outlet></Outlet>
       </div>
          
       
    </>
  )
}

export default App
