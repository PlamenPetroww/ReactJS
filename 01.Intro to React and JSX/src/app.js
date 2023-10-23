const rootElement = document.getElementById('root');
        console.dir(rootElement);
        const root = ReactDOM.createRoot(rootElement);

        const headerElement = React.createElement('h1', {}, 'Hello From React!');
        // console.log(JSON.parse(JSON.stringify(headerElement)));

        root.render(headerElement);