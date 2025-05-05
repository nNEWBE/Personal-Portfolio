import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed z-50 w-full mt-3">
      <div className="flex justify-between max-w-[97rem] mx-auto px-5 py-2">
        <Link
          href="/"
          className="sm:text-2xl text-xl  font-lobster px-3 py-2 border cursor-pointer rounded-xl backdrop-blur-md "
        >
          Shuvo.
        </Link>
        <Link
          href="/projects"
          className="sm:text-2xl text-xl  font-lobster px-3 py-2 border cursor-pointer rounded-xl backdrop-blur-md "
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
