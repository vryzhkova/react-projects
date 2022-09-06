import './App.css';
import PetInfo from './components/PetInfo';

function App() {
  return (
    <div className="App">
      { <PetInfo animal="dog" age="2"/> /* animal, age - это свойство компонента App */}
      { <PetInfo animal="cat" age="1"/>}
    </div> 
  );
}

export default App;
