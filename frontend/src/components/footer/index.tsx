const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-crystalBlue">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">BlogVoyage</h1>
          <p className="text-sm">A place to share your thoughts and ideas.</p>
        </div>

        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
