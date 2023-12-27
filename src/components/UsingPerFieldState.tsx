import { FormEvent, useState } from "react";

const UsingPerFieldState = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) return alert("Name, Email, Password are required!");
    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    console.log(newUser);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">collect data using per field state</h1>
      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-full p-3 border rounded text-black"
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-3 border rounded text-black"
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full p-3 border rounded appearance-none text-black"
            type="password"
            placeholder="Enter password"
          />
        </div>

        <div>
          <button className="c-btn bg-green-600 w-full p-3 uppercase rounded" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UsingPerFieldState;
