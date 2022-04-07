import { createContext } from "react";

interface IPosts {
  id: number;
  title: string;
  content: string;
}

interface IUser {
  username: string;
  posts?: IPosts[];
}

const AppContext = createContext<IUser>({ username: "", posts: [] });

export default AppContext;
