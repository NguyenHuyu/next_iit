import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn2(...inputs) {
  return twMerge(clsx(inputs));
}