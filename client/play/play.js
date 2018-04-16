let count = 0;

const renderApp = () => {
  const template = (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          count++;
          renderApp();
        }}
      >
        +1
      </button>a
      <button
        onClick={() => {
          count = count - 1;
          renderApp();
        }}
      >
        -1
      </button>
      <button
        onClick={() => {
          count = 0;
          renderApp();
        }}
      >
        Reset
      </button>
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
