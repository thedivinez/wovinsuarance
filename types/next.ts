import { IconType } from "react-icons";

export type SideBarItem = {
  name: string;
  icon: IconType;
  content: React.FC;
}