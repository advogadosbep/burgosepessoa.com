import Header from './page/Header';
import About from './page/About';
import Atuacao from './page/Atuacao';

function App() {
  return (
    <div className='w-screen overflow-x-hidden scroll-smooth'>
      <Header />
      <About />
      <Atuacao />
    </div>
  )
}

export default App
