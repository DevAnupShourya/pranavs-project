function Hero() {
  return (
    <div className="text-center py-20">
      <h6 className="inline bg-[#d2f2e8] px-3 py-1 font-bold rounded-full">
        We are on Linkedin
        <a href="#" className="underline pl-1 font-medium">
          Just take a peek
        </a>
      </h6>
      <h1 className="capitalize text-5xl font-bold tracking-wider my-5 max-md:text-4xl">
        get into the design world with <br /> critic designs
      </h1>
      <p className="text-xl font-bold text-gray-400 my-5 max-md:text-base">
        Our goal at Critic Designs is to help you advance in your design career,{" "}
        <br /> and to make lifelong friends along the way.
      </p>
      <button className="mx-auto p-4 bg-ui1-primary text-white rounded-md capitalize font-bold my-3">
        join discord community
      </button>
    </div>
  );
}

export default Hero;
