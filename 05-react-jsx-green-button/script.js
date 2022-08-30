const App = () => {
    let [buttonText, setButtonText] = React.useState('Click me');

    const onButtonClick = () => {
        buttonText = 'Hello from React';
    };

    return (
        <div className="app">
            <button onClick={onButtonClick}>{buttonText}</button>
        </div>
      )
}
    const container = document.getElementById('app');
    const root = ReactDOM.createRoot(container);
    root.render(<App />);