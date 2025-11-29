"use client";

import { useState } from "react";

export const useToggle = (initial = false) => {
  const [open, setOpen] = useState(initial);
  return {
    open,
    toggle: () => setOpen(!open),
    close: () => setOpen(false),
    openIt: () => setOpen(true),
  };
};
