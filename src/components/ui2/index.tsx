function UITwo() {
  return (
    <div className="bg-ui2-bg py-10">
      <div className="flex justify-between items-center w-11/12 mx-auto flex-wrap">
        <img
          src="https://via.placeholder.com/500X300"
          alt="My food Image"
          className="rounded-md"
        />
        <div className="w-2/4 max-lg:w-full max-lg:my-2">
          <h2 className="uppercase text-xl font-bold my-2 text-yellow-950">
            what we have on menu
          </h2>
          <h1 className="text-3xl text-yellow-800 font-bold">
            We serve the best{" "}
            <span className="capitalize text-orange-700">Indian food</span> in
            the town
          </h1>
          <p className="my-3 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit,
            eveniet laudantium. commodi nisi repudiandae nam amet!
          </p>
          <button className="py-3 px-8 capitalize text-white rounded-md shadow-2xl bg-gradient-to-tr from-[#fb8f3b] to-[#ed5c10] my-5">
            view menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default UITwo;
