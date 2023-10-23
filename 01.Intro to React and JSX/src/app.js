// const rootElement = document.getElementById("root");
// console.dir(rootElement);
// const root = ReactDOM.createRoot(rootElement);

// const headerElement = React.createElement("h1", {}, "Hello From React!");
// console.log(JSON.parse(JSON.stringify(headerElement)));

//Use JSX Syntax

const headerElement = (
    <header>
        <h1>Hello From React!</h1>
        <main>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </nav>
        </main>
        <footer>
            <p>All Rights reserved!</p>
        </footer>
    </header>
    
)

root.render(headerElement);
