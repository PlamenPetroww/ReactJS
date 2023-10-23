const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// const headerElement = React.createElement("h1", {}, "Hello From React!");
// console.log(JSON.parse(JSON.stringify(headerElement)));

//Use JSX Syntax

const headerElement = (
    <div>
        <header>
            <h1>Hello From React!</h1>
            <main>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
            </main>
            <footer>
                <p>All Rights reserved!</p>
            </footer>
        </header>
    </div>
)

root.render(headerElement);
