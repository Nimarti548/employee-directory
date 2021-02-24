import './App.css';
import Jumbotron from "./Components/Jumbotron/Jumbotron"
import SearchBar from './Components/SearchBar/SearchBar';


function App() {
  return (
    <div className="container">
      <Jumbotron/>
      <SearchBar/>
    </div>
  );
}

export default App;
