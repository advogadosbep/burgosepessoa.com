import Header from './page/Header';
import About from './page/About';
import Atuacao from './page/Atuacao';
import Form from './page/Form';

function App() {
  return (
    <div className='w-screen overflow-x-hidden scroll-smooth'>
      <Header />
      <About />
      <Atuacao />
      <Form />
    </div>
  )
}

export default App
