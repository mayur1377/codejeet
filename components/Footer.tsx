import { BsTwitterX, BsSuitHeartFill } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex flex-row items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <span className="flex items-center">
            Built with <BsSuitHeartFill className="ml-1 mr-1" />
            by shydev
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://twitter.com/shydev69" target="_blank" rel="noopener noreferrer">
            <BsTwitterX size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
