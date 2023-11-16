import { useState } from "react";

const formInitialState = {
    username: '',
    password: '',
    age: '',
}

export default function ControlledForm() {

    const [formValues, setFormValues] = useState(formInitialState);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state, 
            [e.target.name]: e.target.value
        }));
    }

    const resetFormHandler = () => {
        setFormValues(formInitialState);
    };

    const onSubmitHandler = () => {
        console.log(formValues)
        resetFormHandler();
    }

    return(
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={formValues.username}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="number"
                        name="age"
                        value={formValues.age}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <button type="button" onClick={onSubmitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    );
};