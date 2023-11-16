import { useRef, useState, useEffect } from "react";
import styles from './ControlledForm.module.css';

const formInitialState = {
    username: '',
    password: '',
    age: '',
    gender: 'm',
    swimming: false,
    shoping: false,
    running: false,
}

export default function ControlledForm({
    formRef,
}) {

    const usernameInputRef = useRef();
    const isMoundedRef = useRef(false);
    const [formValues, setFormValues] = useState(formInitialState);
    const [error, setErrors] = useState('');

    useEffect(() => {
        usernameInputRef.current.focus();
    }, []);

    // Executes only on update

    useEffect(() => {
        if (!isMoundedRef.current) {
            isMoundedRef.current = true;
            return;
        }

        console.log('Form is updated')
    }, [formValues])

    const changeHandler = (e) => {
        let value = '';

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                value = e.target.value;
                break;
        }

        setFormValues(state => ({
            ...state, 
            [e.target.name]: e.target.value
        }));
    }

    const resetFormHandler = () => {
        setFormValues(formInitialState);
    };

    const submitHandler = () => {
        console.log(formValues)
        resetFormHandler();
    };

    const ageValidator = () => {
        
        if(formValues.age < 0 || formValues.age > 120) {
            setErrors(state => ({
                ...state,
                age: 'Age should be between 0 and 120'
            }));
        } else {
            if (error.age) {
                    setErrors(state => ({
                    ...state,
                    age: '',
                }));
            }
        }
    }

    return(
        <>
            <h1>Controlled Form</h1>

            <form ref={formRef} onSubmit={submitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                    ref={usernameInputRef}
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
                        id="age"
                        name="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={ageValidator}
                        className={error.age && styles.inputError}
                    />
                    {error.age && (
                        <p className={styles.errorMessage}>{error.age}</p> 
                    )}
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                        <option value="f">F</option>
                        <option value="m">M</option>
                    </select>
                </div>
                <div>
                    <h3>Hobbies</h3>
                    <label htmlFor="hobbies">Swimming</label>
                    <input type="checkbox" name="swimming" id="swimming" checked={formValues.swimming} onChange={changeHandler}/>
                    <label htmlFor="shoping">Shoping</label>
                    <input type="checkbox" name="shoping" id="shoping" checked={formValues.shoping} onChange={changeHandler}/>
                    <label htmlFor="running">Running</label>
                    <input type="checkbox" name="running" id="running" checked={formValues.running} onChange={changeHandler}/>
                </div>
                <div>
                    <button type="submit">Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    );
};