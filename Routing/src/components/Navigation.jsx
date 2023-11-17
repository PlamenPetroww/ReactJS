import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <Link to="/">Home</Link><br />
            <Link to="/about">About</Link><br />
            <Link to="/contacts">Contacts</Link><br />
        </nav>
    );
};

export default Navigation;