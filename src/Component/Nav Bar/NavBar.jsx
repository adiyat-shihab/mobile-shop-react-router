import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="mx-auto block w-full max-w-screen-xl rounded-xl border border-white/80 bg-white bg-opacity-80 py-2 px-4 text-white shadow-md backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div>
          <div className="container mx-auto flex items-center justify-between text-gray-900">
            <a
              href="#"
              className="mr-4 block cursor-pointer py-1.5 font-sans text-sm font-normal leading-normal text-inherit antialiased"
            >
              <span className={"font-bold text-2xl text-sky-300"}>
                Material Tailwind
              </span>
            </a>
            <ul className="hidden items-center gap-6 lg:flex">
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <Link to={"/"}>
                  <span className="flex items-center font-semibold text-xl">
                    Home
                  </span>
                </Link>
              </li>
              <li className="block p-1 font-sans text-sm font-normal leading-normal text-inherit antialiased">
                <span className="flex items-center font-semibold text-xl">
                  Login
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
