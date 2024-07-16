import * as React from "react";

import { cn } from "@/lib/utils";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  primaryBg?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, primaryBg = true, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          `${
            primaryBg && "my-5 bg-[#4c781ab4] !text-[#ededed]"
          } flex h-10 w-full rounded-md   px-3 py-2 text-sm text-primaryColor file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none border-none placeholder:text-[#cecdcd] `,
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
