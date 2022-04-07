import IPosts from "./IPosts";

export default interface IUser {
  username: string;
  posts?: IPosts[];
  setUsername: (value: string) => void;
}
