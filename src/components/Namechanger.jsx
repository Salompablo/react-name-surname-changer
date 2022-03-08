import React, {useState} from 'react';

export default function Namechanger() {
    const [name, setName] = useState("Mi nombre es Pablo");

    const changeButton = () => {
        setName("Y mi apellido es Salom Fede")
    };


return (
    <div className='container'>
        <h1>{name}</h1>
        <button onClick={changeButton}>¿Y tu apellido es?</button>
    </div>
)
}
