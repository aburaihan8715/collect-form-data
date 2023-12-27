import { FormEvent, useRef } from "react";

const UsingRef = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    console.log(newUser);
  };

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">collect data using ref</h1>

      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input ref={nameRef} className="w-full p-3 border rounded text-black" type="text" placeholder="Enter name" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input ref={emailRef} className="w-full p-3 border rounded text-black" type="email" placeholder="Enter email" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input ref={passwordRef} className="w-full p-3 border rounded appearance-none text-black" type="password" placeholder="Enter password" />
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

export default UsingRef;
