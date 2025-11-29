import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Container: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={cn("container mx-auto px-4", className)}>{children}</div>
  );
};
