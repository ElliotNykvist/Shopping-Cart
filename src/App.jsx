import './index.css'
import Navbar from './components/navbar/Navbar';
import Dropdown from './components/dropdown/Dropdown';
import Video from './components/video/Video';
import Main from './components/main/Main';

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Dropdown></Dropdown>
     <Video></Video>
     <Main></Main>
    </>
  )
}

export default App
