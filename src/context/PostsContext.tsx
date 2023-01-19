import { createContext, useState } from "react";
import { IChildComponentElementType, IPosts } from "../Types/Interfaces/Interfaces";

interface IPostContext {
  posts: IPosts[],
  setPosts: React.Dispatch<React.SetStateAction<IPosts[]>>,
}

const PostsContext = createContext<IPostContext>({} as IPostContext);

export const PostsProvider = ({ children }: IChildComponentElementType) => {
  const [posts, setPosts] = useState<IPosts[]>([{} as IPosts])

  return <PostsContext.Provider value={{ posts, setPosts }}>
    {children}
  </PostsContext.Provider>;
};

export default PostsContext;
