import { Bell } from "lucide-react";
import { Input } from "./ui/input";
import LanguageSwitch from "./LanguageSwitch";
import Profile from "./Profile";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-3 px-10">
      <div className="w-1/2">
        <Input
          placeholder="Search..."
          className="rounded-full bg-[#F5F6FA] py-5 px-7 w-full"
        />
      </div>
      <div className="flex items-center gap-5">
        <div>
          <Bell />
        </div>
        <LanguageSwitch />
        <Profile />
      </div>
    </header>
  );
};

export default Header;
