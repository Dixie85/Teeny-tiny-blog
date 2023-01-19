import { createContext, useState } from "react";
import { IChildComponentElementType, IComments } from "../Types/Interfaces/Interfaces";

interface ICommentsContext {
  comments: IComments[],
  setComments: React.Dispatch<React.SetStateAction<IComments[]>>,
}

const CommentsContext = createContext<ICommentsContext>({} as ICommentsContext);

export const CommentsProvider = ({ children }: IChildComponentElementType) => {
  const [comments, setComments] = useState<IComments[]>([{} as IComments])

  return <CommentsContext.Provider value={{ comments, setComments }}>
    {children}
  </CommentsContext.Provider>;
};

export default CommentsContext;
