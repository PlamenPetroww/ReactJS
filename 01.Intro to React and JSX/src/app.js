// const rootElement = document.getElementById("root");
// console.dir(rootElement);
// const root = ReactDOM.createRoot(rootElement);

// const headerElement = React.createElement("h1", {}, "Hello From React!");
// console.log(JSON.parse(JSON.stringify(headerElement)));

//Use JSX Syntax

const headerElement = (
    <header>
        <h1>Hello From React!</h1>
        <h2>Slogan here</h2>
        
    </header>
)

root.render(headerElement);
