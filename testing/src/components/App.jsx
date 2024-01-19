function App() {
  const printHello = () => {
    console.log("Impreso por App.");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>react</h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
          className="App-logo"
          alt="pepito perez"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
