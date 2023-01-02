import logo from './logo.svg';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import Table from './Components/Table';

function App() {
  return (
    <div className="App">
      <Table></Table>
    </div>
  );
}

export default App;
