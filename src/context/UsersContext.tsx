import { createContext, useState } from "react";
import { IChildComponentElementType, IUsers } from "../Types/Interfaces/Interfaces";

interface IUserContext {
  users: IUsers[],
  setUsers: React.Dispatch<React.SetStateAction<IUsers[]>>,
}

const UsersContext = createContext<IUserContext>({} as IUserContext);

export const UsersProvider = ({ children }: IChildComponentElementType) => {
  const [users, setUsers] = useState<IUsers[]>([{} as IUsers])

  return <UsersContext.Provider value={{ users, setUsers }}>
    {children}
  </UsersContext.Provider>;
};

export default UsersContext;
