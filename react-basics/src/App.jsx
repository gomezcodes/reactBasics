import "./App.css";
import Card from "./components/Card";
import vehicles from "./data/vehicles"

function App() {

// TODO VERIFICAR EL TEMA DEL MISSING KEY, CON EL VIDEO DE FAZT
  const vehicleCards = vehicles.map(v => {
    return <Card title={v.name} description={v.description}/>
  })
  return (
    <div className="App">
      <h1>Hola Mundo React</h1>
      <div className="container">
        {vehicleCards}
      </div>
    </div>
  );
}

export default App;
