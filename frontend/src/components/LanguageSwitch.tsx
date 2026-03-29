import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const LanguageSwitch = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex gap-1 items-center">
          <span className="text-[14px]">Language</span>
          <ChevronDown size={"16px"} color="#565656" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>Vietnamese</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LanguageSwitch;
