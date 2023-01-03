import logo from './logo.svg';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css"; 
import Table from './Components/Table';
import MainTest from './MainTest';


function App() {
  return (
    <div className="App">
      <MainTest></MainTest>
      <Table></Table>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Button
</button>
    
    </div>
  );
}

export default App;
