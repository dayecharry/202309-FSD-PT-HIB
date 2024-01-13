import { useDispatch } from "react-redux";
import { registerUser } from "./redux/actions/auth.actions"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const registrar = async (formData) => {
        dispatch(registerUser(formData, navigate))
    }
    return (
        <section>
            <h2>Registro de usuario</h2>
            <form onSubmit={handleSubmit(registrar)}>
                <label>
                    Email
                    <input type="email"  {...register("email")} />
                </label>
                <label>
                    Password
                    <input type="password" {...register("password")} />
                </label>
                <label>
                    Nombre
                    <input type="text" {...register("name")} />
                </label>
                <input type="submit" value="Registrate" />
            </form>
        </section>
    )
}
export default Register