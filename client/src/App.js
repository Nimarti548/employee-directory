import './App.css';
import Jumbotron from "./Components/Jumbotron/Jumbotron"
import SearchBar from './Components/SearchBar/SearchBar';
import Table from './Components/Table/Table';


function App() {
  return (
    <div className="container">
      <Jumbotron/>
      <SearchBar/>
      <Table/>
    </div>
  );
}

export default App;
