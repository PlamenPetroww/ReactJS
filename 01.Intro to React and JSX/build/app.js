// const rootElement = document.getElementById("root");
// console.dir(rootElement);
// const root = ReactDOM.createRoot(rootElement);

// const headerElement = React.createElement("h1", {}, "Hello From React!");
// console.log(JSON.parse(JSON.stringify(headerElement)));

//Use JSX Syntax

var headerElement = React.createElement(
    "header",
    null,
    React.createElement(
        "h1",
        null,
        "Hello From React!"
    ),
    React.createElement(
        "h2",
        null,
        "Slogan here"
    )
);

root.render(headerElement);