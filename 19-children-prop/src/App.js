import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color={'lightblue'}>
        <h2>Text inside of the Wrapper</h2>
        <button>Click me</button>
      </Wrapper>

      <Wrapper color={'lightgreen'}>
        <h2>Text inside of the Wrapper</h2>
        <p>Some description</p>
        <input type="text" value="enter value"></input>
      </Wrapper>
    </div>
  );
}

export default App;
