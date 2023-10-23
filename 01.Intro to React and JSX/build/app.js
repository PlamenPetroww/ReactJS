var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// const headerElement = React.createElement("h1", {}, "Hello From React!");
// console.log(JSON.parse(JSON.stringify(headerElement)));

//Use JSX Syntax

var headerElement = React.createElement(
    "div",
    null,
    React.createElement(
        "header",
        null,
        React.createElement(
            "h1",
            null,
            "Hello From React!"
        ),
        React.createElement(
            "main",
            null,
            React.createElement(
                "nav",
                null,
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Home"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "About"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Contacts"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "#" },
                            "Blog"
                        )
                    )
                )
            )
        ),
        React.createElement(
            "footer",
            null,
            React.createElement(
                "p",
                null,
                "All Rights reserved!"
            )
        )
    )
);

root.render(headerElement);