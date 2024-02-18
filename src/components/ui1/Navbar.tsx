function Navbar() {
  return (
    <div className="flex justify-between items-center w-5/6 mx-auto">
      <div className="text-black font-bold text-2xl">Critic Design</div>
      <button className="capitalize font-semibold text-ui1-primary border border-ui1-primary rounded-md p-3 hover:bg-ui1-primary hover:text-white text-sm">
        Place for learner
      </button>
    </div>
  );
}

export default Navbar;
