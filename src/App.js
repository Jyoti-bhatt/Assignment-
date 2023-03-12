import "./App.css";
import AirQuality from "./components/air_quality";
import Audio from "./components/Audio";
import Displays from "./components/Displays";
import Header from "./components/Header";
import Lighting from "./components/Lighting";
import Temperature from "./components/Temperature";
// import './fonts/Rota/Rota-Black.otf'
// import './fonts/Rota/Rota-Bold.otf'
// import './fonts/Rota/Rota-Medium.otf'
// import './fonts/Rota/Rota-Regular.otf';

function App() {
  let components = [<AirQuality/>,<Temperature/>,<Audio/>,<Displays/>,<Lighting/>]
 
  let rows = [];
  let index = 0;
  while (index < components.length) {
    let row = components.slice(index, index + 3);
    rows.push(row);
    index += 3;
  }
  console.log(rows[0]);

  return (
    <div className="App">
      <Header />
      {rows.map((items) => {
        return (
          <div className="app-row1">
            {items.map((item) => {
              return <>{item}</>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
