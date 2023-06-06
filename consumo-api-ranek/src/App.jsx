import { useState } from 'react'
import Produto from './produto'
import './App.css'

function App() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null);

  async function handleClick(event) {
    setCarregando(true);
    const res = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
    const json = await res.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados}/>}
    </div>
  )

}

export default App
