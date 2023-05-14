function Footer() {
  return (
    <footer className="absolute bottom-0 w-full h-8">
      <p className=" text-center text-sm font-medium text-gray-800 hover:text-indigo-900 dark:text-gray-400 dark:hover:text-indigo-400">
        <a href="https://github.com/theRohan2001" target="_blank">
          ©{new Date().getFullYear()} Made by Rohan Wadhwa
        </a>
      </p>
    </footer>
  );
}

export default Footer;
