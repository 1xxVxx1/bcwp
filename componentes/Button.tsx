import {InputHTMLAttributes } from "react";

interface ButtonType extends InputHTMLAttributes<HTMLInputElement> {};

export default function Button ({ children}: ButtonType) {
  return (
    <button>{children}</button>
  );
}