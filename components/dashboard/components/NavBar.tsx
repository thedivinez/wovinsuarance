import { Avatar } from "@material-tailwind/react";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-2 bg-blue-gray-700/25">
      <div className="relative text-gray-600 w-96"></div>
      <Avatar src="/img/profile.jpg" alt="avatar" variant="circular" />
    </nav>
  );
};

export default NavBar;
