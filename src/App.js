//import styling
import "./App.css";
//import components
import WeatherForm from "./components/WeatherForm";

function App() {
  return (
    <div className="App">
      <WeatherForm style={{ backgroundColor: "#282c34" }} />
    </div>
  );
}

export default App;
