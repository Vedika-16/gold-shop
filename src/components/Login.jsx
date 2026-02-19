import { useState } from "react";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleLogin = () => {
    if (!email || !name) return alert("Enter all fields");
    setUser({ name, email });
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
