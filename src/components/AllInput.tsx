const AllInput = () => {
  return (
    <form className="max-w-lg mx-auto flex flex-col gap-5 border p-5">
      <h1 className="text-center text-3xl text-gray-100 uppercase">All form data</h1>
      {/* text */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Name</label>
        <input name="name" className="w-full p-2 border rounded text-black" type="text" placeholder="Enter name" />
      </div>

      {/* color */}
      <div className="flex gap-3">
        <label htmlFor="">Pick color</label>
        <input className="rounded" type="color" />
      </div>

      {/* week */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Select week</label>
        <input className="w-full p-2 border rounded text-black" type="week" />
      </div>

      {/* image url */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Image url</label>
        <input className="w-full p-2 border rounded text-black" type="url" placeholder="Enter url" />
      </div>

      {/* time */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Input time</label>
        <input className="w-full p-2 border rounded text-black" type="time" />
      </div>

      {/* phone */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Phone</label>
        <input className="w-full p-2 border rounded text-black" type="tel" placeholder="Enter phone no" />
      </div>

      {/* search */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Search</label>
        <input className="w-full p-2 border rounded text-black" type="search" placeholder="Search..." />
      </div>

      {/* range */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Select range</label>
        <input type="range" />
      </div>

      {/* radio */}
      <div className="">
        <label htmlFor="">Select gender</label>
        <div>
          <div className="flex gap-2 items-center">
            <input className="" type="radio" />
            <span>Male</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="" type="radio" />
            <span>Female</span>
          </div>
          <div className="flex gap-2 items-center">
            <input className="" type="radio" />
            <span>Third gender</span>
          </div>
        </div>
      </div>

      {/* month */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Select month</label>
        <input className="w-full p-2 border rounded text-black" type="month" />
      </div>

      {/* file */}
      <div>
        <img className="w-full h-[150px] object-cover rounded" src="http://placehold.it/300x150" alt="" />
      </div>
      <div className="flex flex-col gap-1">
        <label className="w-full p-2 border rounded bg-slate-50 text-black text-center" htmlFor="image">
          Add image
        </label>

        <input id="image" name="image" className="hidden" type="file" />
      </div>
      {/* options */}
      <div className="flex flex-col gap-1">
        <label htmlFor="country">Select country</label>
        <select className="w-full p-2 border rounded text-black" name="country" id="country">
          <option value="">Select country...</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
        </select>
      </div>

      {/* date and time */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Select date and time</label>
        <input className="w-full p-2 border rounded text-black" type="datetime-local" />
      </div>

      {/* date */}
      <div className="flex flex-col gap-1">
        <label htmlFor="">Select date</label>
        <input className="w-full p-2 border rounded text-black" type="date" />
      </div>

      {/* checked */}
      <div className="flex gap-3">
        <input type="checkbox" />
        <label htmlFor="">Are you agree with us?</label>
      </div>

      {/* submit and reset */}
      <div className="flex gap-3">
        <input className="px-5 py-2 bg-green-500 rounded" type="submit" />
        <input className="px-5 py-2 bg-green-500 rounded" type="reset" />
      </div>
    </form>
  );
};

export default AllInput;
