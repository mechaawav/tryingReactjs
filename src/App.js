
import './App.css';

function App() {

let datos = {
  nombre: 'Raul',
  apellido: 'Lopez',
  edad: 42
}

const {nombre, edad} = datos

const evento = () => {
  console.log('hola mundo')
}

  return (
    <div className="App">
       <h1>El usuario se llama {nombre} y su edad es {edad}</h1>
       <button onClick={evento}>Hace Click!</button>
    </div>
  );
}

export default App;
