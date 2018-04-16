const app = {
  title: 'Indecision App ',
  subtitle: 'by Nitin',
  options: ['Hi See me']
};

const onFormSubmit = event => {
  event.preventDefault();
  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    renderApp();
  }
};
const onMake = () => {
  const randomNum = Math.round(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const removeAll = event => {
  event.preventDefault();
  app.options = [];
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMake}>
        What do I do
      </button>
      <ol>
        {app.options.map(opt => {
          return <li key={opt}>{opt}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add</button>
      </form>
      <button onClick={removeAll}>Reset Options</button>
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};
renderApp();
