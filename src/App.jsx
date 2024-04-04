import { useState } from 'react' 
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route ,Routes, useParams} from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/video/Video'
import context from './context/context'
import Serchvideo from './components/feed/Serchvideo'
import Video2 from './pages/video/Video2'
function App() {
  const [expand, setexpand] = useState(false)
  const [resexpand, setresexpand] = useState(false)
  const [catagorie , setCategorie] = useState(0); 
  const [input ,setinput] = useState('');
  const [showinputbox ,setInptbox ] = useState(false);
  const[loader , setLoader] = useState(true)
  const showsearch = ()=>{
 
    setInptbox(true);
  }

const value = {expand , setexpand,showsearch,resexpand, setresexpand ,catagorie,input,setinput,showinputbox,setInptbox , setCategorie ,loader , setLoader}; 
  return (
    <context.Provider value={value}>
 
 <Navbar/>
    <Routes>
  <Route path='/' element={<Home />} />
       <Route path='/video/:categoryId/:videoId' element={<Video />} />
       <Route path='/video/:videoId' element={<Video2 />} />
       <Route path='/search_query' element={<Serchvideo />} />
  </Routes>

    </context.Provider>
  )
}

export default App
