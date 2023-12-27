import { ChangeEvent, FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const UsingCombinedState = () => {
  const [formData, setFormData] = useState(initialState);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) return alert("Name, Email, Password are required!");

    const newUser = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };
    console.log(newUser);
    setFormData(initialState);
  };

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">collect data using combined state</h1>
      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            name="name"
            onChange={changeHandler}
            value={formData.name}
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
            value={formData.email}
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
            value={formData.password}
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
