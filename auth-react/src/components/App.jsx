import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import Register from "./Register"
import Header from "./Header"

function App() {

    return (
        <div>
            <h1>Auth</h1>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}
export default App