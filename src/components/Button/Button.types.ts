import { MouseEventHandler } from "react";

export interface ButtonProps {
  label?: string;
  primary?: boolean,
  disabled?: boolean,
  size?: "small" | "medium" | "large",
  onClick?: MouseEventHandler<HTMLButtonElement>
}