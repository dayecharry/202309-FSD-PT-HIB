import Button from "./Button";
import Footer from "./Footer";
import Header from "./Header";
import "../css/App.scss";
import { useState } from "react";
import FormCalculator from "./FormCalculator";
import Result from "./Result";

function App() {
    // js
    //useState--> hooks  
    const [username, setUsername] = useState("");
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [totalOpe, setTotalOpe] = useState(0);
    const sayHi = () => {
        return " ¿Como estas? ";
    }
    const handleInputName = (event) => {
        setUsername(event.target.value)
    }
    // funcion para cambiar var de estado num1
    const changeNum = (value, id) => {
        //asigno al valor  tipo de datos numero
        const valueNum = parseInt(value);
        //id -> representa cada input
        if (id === "num1") {
            setNum1(valueNum)
        } else {
            setNum2(valueNum)
        }
    }
    const operation = (operator) => {
        if (operator === "+") {
            setTotalOpe(num1 + num2)
        }
        else {
            setTotalOpe(num1 - num2)
        }
    }

    const reset = () => {
        setNum1(0);
        setNum2(0);
        setTotalOpe(0)
    }
    return (
        <>
            <h1>Mi web de react</h1>
            <form action="">
                <input type="text" name="" id="" placeholder="dime tu nombre" onChange={handleInputName} />
            </form>
            <p>Bienvenida {username} </p>
            <p>{sayHi()}</p>
            <Header />
            <Button title="Login" id={1} classCss="success" />
            <Button title="Registrate" id={2} classCss="info" />
            <Footer instagram="viteReact" x="vite_react" />

            <FormCalculator changeNum={changeNum} operation={operation} reset={reset} num1={num1} num2={num2} />
            <Result total={totalOpe} />
        </>
    )
}
export default App