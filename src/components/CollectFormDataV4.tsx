const CollectFormDataV4 = () => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const email = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[2] as HTMLInputElement).value;

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
      <h1 className="text-center text-3xl font-medium uppercase">collect form data v4</h1>

      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input name="name" id="name" className="w-full p-3 border rounded text-black" type="text" placeholder="Enter name" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input name="email" id="email" className="w-full p-3 border rounded text-black" type="email" placeholder="Enter email" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            name="password"
            id="password"
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

export default CollectFormDataV4;

// ===========work in only react not with typeScript========
/*
const CollectFormDataV4 = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!name || !email || !password) return alert("Name, Email, Password are required!");

    const newUser = {
      name: name,
      email: email,
      password: password,
    };
    console.log(newUser);
    e.target.reset();
  };

  return (
    <div className="border max-w-xl mx-auto p-4 mt-10 rounded">
      <h1 className="text-center text-3xl font-medium uppercase">collect form data v4</h1>
      <form onSubmit={submitHandler} className="space-y-3">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <input name="name" id="name" className="w-full p-3 border rounded text-black" type="text" placeholder="Enter name" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Email</label>
          <input name="email" id="email" className="w-full p-3 border rounded text-black" type="email" placeholder="Enter email" />
        </div>

        <div className="flex flex-col gap-1">
          <label>Password</label>
          <input
            name="password"
            id="password"
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

export default CollectFormDataV4;
*/
