import { useState } from "react";

function Login({ changeUserLogin }) {
  const [userLogin, setUserLogin] = useState({});
  const handleInput = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    console.log(id, value);
    setUserLogin({
      ...userLogin,
      [id]: value,
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    changeUserLogin(userLogin);
  };
  return (
    <div>
      login
      <form action="">
        <label htmlFor="email">email</label>
        <input type="text" name="email" id="email" onChange={handleInput} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInput}
        />
        <input type="submit" value="Login" onClick={handleClick} />
      </form>
    </div>
  );
}

export default Login;
