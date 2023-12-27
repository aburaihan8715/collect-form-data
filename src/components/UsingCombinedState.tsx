import { FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const UsingCombinedState = () => {
  const [formData, setFormData] = useState(initialState);

  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const { name, email, password } = formData;

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) return alert("Name, Email, Password are required!");

    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    console.log(newUser);
    setFormData(initialState);
  };

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">collect form data v2</h1>
      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            name="name"
            onChange={changeHandler}
            value={name}
            className="w-full p-3 border rounded text-black"
            type="text"
            placeholder="Enter name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            name="email"
            onChange={changeHandler}
            value={email}
            className="w-full p-3 border rounded text-black"
            type="email"
            placeholder="Enter email"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            name="password"
            onChange={changeHandler}
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

export default UsingCombinedState;
