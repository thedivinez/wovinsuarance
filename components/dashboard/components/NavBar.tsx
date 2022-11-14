import Image from "next/image";
import { Avatar } from "@material-tailwind/react";

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-2 bg-blue-gray-700/25">
      <div className="h-8 relative w-32">
        <Image
          layout="fill"
          alt="W.O.V Logo"
          src="/img/wov.png"
          objectFit="contain"
        />
      </div>
      <Avatar src="/img/profile.jpg" alt="avatar" variant="circular" />
    </nav>
  );
};

export default NavBar;
