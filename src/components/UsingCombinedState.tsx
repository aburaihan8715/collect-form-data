import { ChangeEvent, FormEvent, useState } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  startDate: "",
  endDate: "",
  country: "",
  gender: "",
  color: "#000000",
};

const UsingCombinedState = () => {
  const [inputData, setInputData] = useState(initialState);
  const [file, setFile] = useState<File | null>(null);
  const [agree, setAgree] = useState(false);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    setFile(selectedFile || null);
  };
  // const handleAgree = (e: ChangeEvent<HTMLInputElement>) => {
  //   const selectedValue = e.target.checked;
  //   setAgree(selectedValue || false);
  // };

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputData({ ...inputData, [name]: value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !inputData.name ||
      !inputData.email ||
      !inputData.password ||
      !inputData.confirmPassword ||
      !inputData.startDate ||
      !inputData.endDate ||
      !inputData.country ||
      !inputData.gender ||
      !inputData.color ||
      !file ||
      !agree
    )
      return alert("Input should not be empty");

    if (inputData.password !== inputData.confirmPassword) return alert("Password mismatch!");

    const newUser = {
      name: inputData.name,
      email: inputData.email,
      password: inputData.password,
      startDate: inputData.startDate,
      endDate: inputData.endDate,
      country: inputData.country,
      gender: inputData.gender,
      color: inputData.color,
      agree,
      file,
    };
    console.log(newUser);
    setInputData(initialState);
    setFile(null);
    setAgree(false);
  };

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">collect data using combined state</h1>
      <form onSubmit={submitHandler} className="space-y-3">
        {/* name */}
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input
            name="name"
            onChange={changeHandler}
            value={inputData.name}
            className="w-full p-3 border rounded text-black"
            type="text"
            placeholder="Enter name"
          />
        </div>

        {/* email */}
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input
            name="email"
            onChange={changeHandler}
            value={inputData.email}
            className="w-full p-3 border rounded text-black"
            type="email"
            placeholder="Enter email"
          />
        </div>

        {/* password */}
        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            name="password"
            onChange={changeHandler}
            value={inputData.password}
            className="w-full p-3 border rounded appearance-none text-black"
            type="password"
            placeholder="Enter password"
          />
        </div>

        {/* confirm password */}
        <div className="flex flex-col gap-1">
          <label>Confirm password</label>
          <input
            name="confirmPassword"
            value={inputData.confirmPassword}
            onChange={changeHandler}
            className="w-full p-3 border rounded appearance-none text-black"
            type="password"
            placeholder="Confirm password"
          />
        </div>

        {/* date */}
        <div className="flex gap-3">
          <div className="flex w-1/2 flex-col gap-1">
            <label htmlFor="">Start date</label>
            <input
              name="startDate"
              value={inputData.startDate}
              onChange={changeHandler}
              className="w-full p-2 border rounded text-black"
              type="date"
            />
          </div>

          <div className="flex w-1/2 flex-col gap-1">
            <label htmlFor="">End date</label>
            <input name="endDate" value={inputData.endDate} onChange={changeHandler} className="w-full p-2 border rounded text-black" type="date" />
          </div>
        </div>

        {/* file */}
        <div>
          {file ? (
            <img className="w-full h-[150px] object-cover rounded" src={URL.createObjectURL(file)} alt="" />
          ) : (
            <img className="w-full h-[150px] object-cover rounded" src="http://placehold.it/300x150" alt="" />
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label className="w-full p-2 border rounded bg-slate-50 text-black text-center" htmlFor="image">
            Add image
          </label>

          <input onChange={handleFileChange} id="image" name="image" className="hidden" type="file" />
        </div>

        {/* options */}
        <div className="flex flex-col gap-1">
          <label htmlFor="country">Select country</label>
          <select onChange={changeHandler} className="w-full p-2 border rounded text-black" name="country" value={inputData.country} id="country">
            <option value="">Select country...</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
          </select>
        </div>

        {/* radio */}
        <div className="">
          <label htmlFor="">Select gender</label>
          <div>
            <div className="flex gap-2 items-center">
              <input name="gender" value="Male" checked={inputData.gender === "Male"} onChange={changeHandler} className="" type="radio" />
              <span>Male</span>
            </div>
            <div className="flex gap-2 items-center">
              <input name="gender" value="Female" checked={inputData.gender === "Female"} onChange={changeHandler} className="" type="radio" />
              <span>Female</span>
            </div>
            <div className="flex gap-2 items-center">
              <input name="gender" value="Others" checked={inputData.gender === "Others"} onChange={changeHandler} className="" type="radio" />
              <span>Others</span>
            </div>
          </div>
        </div>

        {/* color */}
        <div className="flex gap-3">
          <label htmlFor="">Pick color</label>
          <input name="color" value={inputData.color} onChange={changeHandler} className="rounded" type="color" />
        </div>

        {/* check */}
        <div className="flex gap-3">
          <input name="gender" checked={agree} onChange={(e: ChangeEvent<HTMLInputElement>) => setAgree(e.target.checked)} type="checkbox" />
          <label htmlFor="">Are you agree with us?</label>
        </div>

        {/* submit and reset */}
        <div className="flex gap-3">
          <input className="w-1/2  py-2 bg-green-500 rounded" type="submit" />
          <input className="w-1/2  py-2 bg-green-500 rounded" type="reset" />
        </div>
      </form>
    </div>
  );
};

export default UsingCombinedState;
