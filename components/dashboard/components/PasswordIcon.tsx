import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

type Props = { shown: boolean; setShown: Function };
const PasswordIcon: React.FC<Props> = ({ shown, setShown }) => {
  return shown ? (
    <AiFillEyeInvisible
      onClick={(_) => setShown(false)}
      className="cursor-pointer"
    />
  ) : (
    <AiFillEye onClick={(_) => setShown(true)} className="cursor-pointer" />
  );
};

export default PasswordIcon;
