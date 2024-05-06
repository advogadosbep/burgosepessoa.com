import Header from './sections/Header';
import About from './sections/About';
import Atuacao from './sections/Atuacao';
import Form from './sections/Form';
import Office from './sections/Office';
import ClientesNew from './sections/Clientes';
import Footer from './sections/Footer';
import Rodape from './sections/Rodape';
import Termos from './components/Termos';

import { useState } from "react";

function App() {
  const [viewTerms, setViewTerms] = useState(false);

  const close = () => {
    setViewTerms(false)
  }
  const open = () => {
    setViewTerms(true)
  }

  return (
    <div className='relative w-screen overflow-x-hidden scroll-smooth'>
      <Header />
      {
        viewTerms && <Termos close={close} />
      }
      <About />
      <Atuacao />
      <ClientesNew />
      <Form />
      <Office />
      <Footer open={open}/>
      <Rodape />
    </div>
  )
}

export default App
