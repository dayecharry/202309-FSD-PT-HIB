
function FormCalculator({ changeNum, operation, reset, num1, num2 }) {
    //lifting --> ejecuto una funcion que se encuentra en mi componente padre 
    const handleInput = (event) => {
        changeNum(event.target.value, event.target.id)
    }
    const handleClick = (event) => {
        event.preventDefault();
        operation(event.target.id)
    }
    const handleReset = (event) => {
        event.preventDefault();
        reset()
    }
    return (
        <>
            <h2>Calculadora</h2>
            <form>
                <input type="number" placeholder="num1" id="num1" onChange={handleInput} value={num1} />
                <input type="number" placeholder="num2" id="num2" onChange={handleInput} value={num2} />
                <button id="+" onClick={handleClick}>+</button>
                <button id="-" onClick={handleClick}>-</button>

                <button onClick={handleReset}>Reset</button>

                {/*<input type="submit" value="Reset" />*/}

            </form>
        </>
    )
}

export default FormCalculator;