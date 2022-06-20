import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useTheme } from "next-themes";

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full h-16 flex justify-between z-50 bg-blue-900 text-white px-2 sm:px-6 py-4 dark:bg-gray-800">
      <div className="container flex items-center align-center">
        <a href="#">
          <h1 className="text-2xl cursor-pointer">Logo/Name</h1>
        </a>

        <div className="flex grow justify-center space-x-2  invisible md:visible">
          <a
            href="#"
            className="py-4 px-2 text-blue-500 border-green-500 font-semibold"
          >
            Home
          </a>
          <a
            href="#"
            className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300"
          >
            Features
          </a>
          <a
            href="#"
            className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300"
          >
            Resources
          </a>
          <a
            href="#"
            className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="py-4 px-2 text-white font-semibold hover:text-blue-500 transition duration-300"
          >
            Contact Us
          </a>
        </div>

        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-[32px] h-[32px] cursor-pointer"
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
    </nav>
  );
}
