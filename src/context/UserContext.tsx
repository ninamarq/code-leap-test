import { createContext, SetStateAction, Dispatch } from "react";

import IPosts from "../interfaces/IPosts";

export interface IUserContext {
  username: string;
  setUsername?: (value: string) => void;
  posts?: IPosts[];
  setPosts?: Dispatch<
    SetStateAction<
      {
        id: number;
        title: string;
        content: string;
        username: string;
      }[]
    >
  >;
  creating: boolean;
  setCreating?: Dispatch<SetStateAction<boolean>>;
}

const defaultState = {
  username: "",
  posts: [],
  creating: false,
};

const AppContext = createContext<IUserContext>(defaultState);

export default AppContext;
