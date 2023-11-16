import { useRef } from 'react';
import './App.css'
import ControlledForm from './components/ControlledForm'

function App() {

  const formRef = useRef();

  return (
    <>
        <ControlledForm formRef={formRef}/>
        <button type="button"
        onClick={() => formRef.current.requestSubmit()}
        >
        Submit
        </button>
    </>
  )
}

export default App
