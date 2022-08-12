import Escenas from './componentes/escenas/escenas';

function App() {
  const frases =["Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
  "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.",
  "El héroe decidió atravesar la puerta que le llevaba a casa",
  "Mientras tanto, otros héroes no tuvieron tanta suerte en su elección..."] 
  return (
    <Escenas frases ={frases}/>
  );
}

export default App;
