
import { Link, Outlet } from 'react-router-dom'
import './App.css'
import Theme from './Components/Theme'

function App() {

  return (
    <>
       <h2 className='text-2xl text-center mt-10'>Main Page Of React Router</h2>

       <div >
         <nav className='flex justify-center items-center gap-10 mt-10'>
          <Link to='/home'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
         </nav>
         <div className='text-center mt-10'>
          <Outlet></Outlet>
         </div>
       </div>
          
       
    </>
  )
}

export default App
