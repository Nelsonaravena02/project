import './App.css';
import 'antd/dist/antd.min.css'
import Plantilla from './features/plantilla/Plantilla';
import tarjeta  from  './features/tarjeta/tarjeta' ;

function App() {
  return (
    <div className="App">
      <Plantilla/>
      <tarjeta/>
    </div>
  );
}

export default App;
