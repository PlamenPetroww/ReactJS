import { useEffect, useState } from "react";
import { useParams, useNavigate} from 'react-router-dom';
const CharacterDetails = () => {
    const {id} = useParams();
    const name = 'Unknown';
    const navigate = useNavigate();
    const [character, setCharacters] = useState({});
;
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Not Found!');
                }

                return res.json();
            })
            .then(setCharacters)
            .catch((err) => {
                navigate('/characters');
            })
    }, [id]);


    return(
        <>
            <h1>{character.name}</h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsam ab aut recusandae sapiente eaque doloremque itaque dignissimos minima inventore! Ab accusantium esse possimus fuga odio praesentium inventore magni cupiditate.</p>
        </>
    );
};

export default CharacterDetails;