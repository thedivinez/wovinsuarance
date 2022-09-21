import { IconType } from "react-icons";
import { ChangeEventHandler, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type Props = {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  Icon?: IconType;
  multiLine?: boolean;
  labelText?: string;
  className?: string;
  isRequired?: boolean;
  placeholder: string;
  onIconClick?: Function;
  handleChange?: ChangeEventHandler<HTMLInputElement>;
};

export default function TextInputField({
  id,
  Icon,
  name,
  type,
  value,
  multiLine,
  labelText,
  className,
  placeholder,
  onIconClick,
  handleChange,
  isRequired = false,
}: Props) {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div>
      <label htmlFor={id ?? name} className="font-bold">
        {labelText}
      </label>
      <div className="relative">
        {multiLine ? (
          <textarea
            id={id}
            name={name}
            value={value}
            required={isRequired}
            placeholder={placeholder}
            className={`mt-2 w-full rounded-lg bg-slate-200 p-3 pr-12 text-slate-900 shadow-sm ${className}`}
          />
        ) : (
          <input
            id={id}
            name={name}
            required={isRequired}
            onChange={handleChange!}
            placeholder={placeholder}
            type={showPassword ? type : "text"}
            className={`mt-2 w-full rounded-lg bg-slate-200 p-3 pr-12 text-slate-900 shadow-sm ${className}`}
          />
        )}
        {type === "password" && (
          <span
            className="absolute inset-y-0 right-4 inline-flex cursor-pointer items-center"
            onClick={() =>
              type == "password"
                ? setShowPassword(!showPassword)
                : onIconClick && onIconClick!()
            }
          >
            {showPassword ? (
              <AiFillEye className="mt-2 h-5 w-5 text-slate-500" />
            ) : (
              <AiFillEyeInvisible className="mt-2 h-5 w-5 text-slate-500" />
            )}
          </span>
        )}
        {Icon && (
          <span
            className="absolute inset-y-0 right-4 inline-flex cursor-pointer items-center"
            onClick={() => onIconClick && onIconClick!()}
          >
            <Icon className="mt-2 h-5 w-5 text-slate-500" />
          </span>
        )}
      </div>
    </div>
  );
}
