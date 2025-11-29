import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Input } from "./input";

export function PasswordInput({ field, ...props }: any) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <Input type={show ? "text" : "password"} {...field} {...props} />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-2 text-gray-500"
      >
        {show ? <EyeOff /> : <Eye />}
      </button>
    </div>
  );
}
