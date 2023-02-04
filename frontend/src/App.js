import './app.css'
import Pages from './components/Pages';
import AOS from 'aos';
import "aos/dist/aos.css";
import {useEffect} from 'react'
function App() {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className="App">
     <Pages/>
    </div>
  );
}

export default App;
