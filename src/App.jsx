import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import { FaWhatsapp     } from "react-icons/fa6";

function App() {


  return (
    <div className='flex flex-col'>
      <Header/> 
      <Content/>
      <a className="fixed p-3 bottom-4 right-4 text-6xl text-white bg-green-500 rounded-full z-20" href='https://api.whatsapp.com/send?phone=584121193833&text=Quiero saber más' rel="noopener noreferrer" target='_blank'>
        <FaWhatsapp/>
      </a>
    </div>
  )
}

export default App
