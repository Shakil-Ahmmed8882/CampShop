import { ReactElement, ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;

};
export type TUserPath = {
  key?: string;
  label?: string;
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TUserRoute = {
  key?:string;
  name?: string | ReactElement;
  path: string;
  element: ReactNode;
  children?: TUserRoute[];
};