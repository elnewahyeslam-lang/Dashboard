import{Route,Routes,BrowserRouter} from'react-router-dom'
import { useState } from "react"
import Sidebar from './sidebar'
import Head from './Head'
import Tasks from './Tasks'
import Projects from './Projects'
import "./App.css"
function App(){
   const[tasks,setasks]=useState([])
  return (
    <BrowserRouter>
    <div className='app'>
    <Sidebar/>
    <main>
    <Routes>
    <Route path='/' element={
      <>
    <Head tasks={tasks}/>
    <Tasks tasks={tasks} setasks={setasks}/> 
     </>
    }/> 
    <Route path='/Projects' element={<Projects/>}/>
    </Routes>
    </main>
    </div>
    </BrowserRouter>
  )
}

export default App
