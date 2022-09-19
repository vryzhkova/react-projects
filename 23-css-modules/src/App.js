import './App.css';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Info />
      <div>
        <h1 className='info'>App component heading</h1>
        <h2>Hello from Info component</h2>
        <button className='my-button'>App component button</button>
      </div>
    </div>
  );
}

export default App;
