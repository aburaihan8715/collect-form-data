const CollectFormDataV3 = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement)?.value;
    const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement)?.value;

    if (!name || !email || !password) return alert("Name, Email, Password are required!");

    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    console.log(newUser);
    e.currentTarget.reset();
  };

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">collect form data v3</h1>
      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input name="name" className="w-full p-3 border rounded text-black" type="text" placeholder="Enter name" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input name="email" className="w-full p-3 border rounded text-black" type="email" placeholder="Enter email" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input name="password" className="w-full p-3 border rounded appearance-none text-black" type="password" placeholder="Enter password" />
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

export default CollectFormDataV3;

// ===========work in only react not with typeScript========
/*
const CollectFormDataV3 = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    // const name = (e.currentTarget.elements.namedItem("name") as HTMLInputElement)?.value;
    // const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
    // const password = (e.currentTarget.elements.namedItem("password") as HTMLInputElement)?.value;

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!name || !email || !password) return alert("Name, Email, Password are required!");

    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    console.log(newUser);
    e.currentTarget.reset();
  };

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">collect form data v3</h1>
      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input name="name" className="w-full p-3 border rounded text-black" type="text" placeholder="Enter name" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input name="email" className="w-full p-3 border rounded text-black" type="email" placeholder="Enter email" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input name="password" className="w-full p-3 border rounded appearance-none text-black" type="password" placeholder="Enter password" />
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

export default CollectFormDataV3;
*/
