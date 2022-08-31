// App - функциональный компонент  с собственным состоянием
const App = ({ initialButtonText, initialClassesList }) => {
  // Метод объекта React - useState (возвращает массив из двух элементов) 
  // - передаем начальное значение переменной
  // setButtonText - это ф-ция и с помощью нее мы сможем указывать новое состояние buttonText
  const [buttonText, setButtonText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialClassesList);

  const onButtonClick = () => {
    setButtonText('Hello from React');  // меняем СОСТОЯНИЕ кнопки buttonText на другой текст
    setClassesList('green-btn');
  };

  // App возвращает JSX код
  return ( 
    // JSX компонент div имеет СВОЙСТВО className, JSX компонент button имеет СВОЙСТВО className и onClick
    <div className="app"> 
      <button className={classesList} onClick={onButtonClick}>{buttonText}</button> 
    </div>
  );
};

// Ф-ция App была вызвана дважды и вернула два разных результата 
// (из-за внешней ф-ции React.useState("Click me")) - это ф-ция с побочными эффектами

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container); // с помощью ReactDOM мы показываем компонент App на странице
root.render(<App initialButtonText="Click me" initialClassesList=""/>); // рендерим компонент в определнной части страницы
