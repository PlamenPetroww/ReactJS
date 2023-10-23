var rootElement = document.getElementById('root');
console.dir(rootElement);
var root = ReactDOM.createRoot(rootElement);

var headerElement = React.createElement('h1', {}, 'Hello From React!');
// console.log(JSON.parse(JSON.stringify(headerElement)));

root.render(headerElement);